/**
 * I use heroku, and they have process.env.NODE_ENV=production
 */

let envSetting

/** 
 * this immediately function was made special for envSetting
 * I don't want to push localConfig.js. When the app run in 
 * heroku, require('./localConfig') will yield an error
 */
!(async () => {
    if(process.env.NODE_ENV === 'production'){
        envSetting = {
            dev: require('./devConfig'),
            production: require('./prodConfig') 
        }
    } else {
        envSetting = {
            local: require('./localConfig'),
            dev: require('./devConfig'),
            production: require('./prodConfig') 
        }
    }
})()


let config = {
    env: 'local',
    serverPort: 8000
}

module.exports = async function configBuilder() {
    try {
        let processEnv = process.env.NODE_ENV 
        if(processEnv !== config.env && processEnv !== undefined) {
            config.env = processEnv
        }
        let setting = envSetting[config.env]

        // add all item in choosen env to confg obj
        // this will replace same item(s) from config with the choosen env
        // this will also keep what are in config but not in the choosen env
       for(let item in setting){
            config[item] = setting[item]
        }
        
        return (config)

    } catch (error) {
        console.error(error)
    }
}