const express = require('express')
const configBuilder = require('./config/config')
const mongoose = require('mongoose')
const cookeSession = require('cookie-session')
const passport = require('passport')
const path = require('path')
const dir = require('node-dir')
const https = require('https')
const pem = require('pem')
// const { MongoClient, ServerApiVersion } = require('mongodb');


require('./models/User')
require('./services/passport')


const app   = express()
let config, certKeys

!(async () => {
    try {
        config      = await configBuilder();
        certKeys    = await createCert();
        /**
         * options to implement https
         */
        const options = {
            key: certKeys.serviceKey,
            cert: certKeys.certificate
        }

        await mongoDbCon();
        await routeRegister();

        /**
         * implement cookieSesstion to app Express.
         */
        app.use(
            cookeSession({
                maxAge: 30 * 24 * 60 * 60 * 1000,
                keys: [config.cookieKeys]
            }));

        /**
         * passport.initialize() setups the functions to serializ/deserialize the
         * user data from the request.
         * If we are not using session we don't need passport.initilize()
         */
        app.use(passport.initialize());
        app.use(passport.session())

        const PORT = process.env.PORT || config.serverPort;
        console.log(`Express server is running on port ${PORT}`)
        /**
         * create server running on https
         */
        https.createServer(options, app).listen(PORT)

    } catch (error) {
        console.error(error)
    } finally {

    }
})()

function routeRegister() {
    return new Promise((resolve, reject) => {
        try {
            /**
             * require route files to app
             * all Express/api routes needed to be required first
             * before the 'client'/index.html route can be required 
             * or else the api will not work. 
             */
            console.info(`Registering routes to app`)
            const routeDirPath = path.join(__dirname, 'routes')        
            dir.files(routeDirPath, (err, filePaths) => {
                if(err) {
                    console.error(err)
                    return false
                }

                let lastRoute;
                for(let i = 0; i < filePaths.length; i++) {
                    // console.log(path.parse(filePaths[i]).name)
                    if(path.parse(filePaths[i]).name === 'client'){
                        lastRoute = filePaths[i]
                        continue;
                    } 
                    require(filePaths[i])(app)
                }

                /**
                 * Only start serving react/client when in prod/dev because
                 * we want to run React and Express in different server
                 * while developing so that we can develop them separately
                 */
                if(config.env !== 'local') {
                    app.use(express.static('client/build'))
                    require(lastRoute)(app)
                }
            })
            resolve(true)
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}

function mongoDbCon() {
    return new Promise( (resolve, reject) => {
        try {
            mongoose.connect(config.mongoUri)
            .then( () => {
                console.log('Connected to MongoDb Atlas')
                resolve (true)
            })
            .catch( (err) => {
                console.error(err)
                reject(err)
            });
            
        } catch (error) {
            console.error(`error from mongoDbCon() ${error}`)
        }
       
    })
}


/**
 * create a self cert on the fly everytime this app is started. 
 * to create https - install pem, https package
 */
function createCert() {
    return new Promise(function (resolve, reject) {
        pem.createCertificate({ days: 1, selfSigned: true },
            function (err, keys) {
                if(err) return reject(err)
                return resolve(keys)
            })
    })
}

/**
 * this is for using mongoDb driver a node module and not using mongoose
 */
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
        // const client = new MongoClient(config.mongoUri, {
        //     serverApi: {
        //         version: ServerApiVersion.v1,
        //         strict: true,
        //         deprecationErrors: true,
        //     }
        // });
        // await client.connect();
        // // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // const database = client.db('sample_mflix');
        // const movies = database.collection('movies');
        // // Query for a movie that has the title 'Back to the Future'
        // const query = { title: 'Back to the Future' };
        // const movie = await movies.findOne(query);
        // console.log(movie);
        // await client.close();