/**
 * I use heroku, and they have process.env.NODE_ENV=production
 */

let envSetting = {
    local: null,
    dev: null,
    production: null
}

let config = {
    env: 'local',
    serverPort: 8000
}

module.exports = async function configBuilder() {
    try {
        let processEnv = process.env.NODE_ENV 

        if(processEnv === 'production') {
            envSetting.production = require('./prodConfig')
            config.env = processEnv

        } else if(config.env === 'local') {
            envSetting.local = require('./localConfig')
        }
        // I don't know if I will have a dev env set up, yet

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

/** 
 * this immediately function was made special for envSetting
 * I don't want to push localConfig.js. When the app run in 
 * heroku, require('./localConfig') will yield an error
 */
// !(async () => {
//     if(process.env.NODE_ENV === 'production'){
//         envSetting = {
//             dev: require('./devConfig'),
//             production: require('./prodConfig') 
//         }
//     } else {
//         envSetting = {
//             local: require('./localConfig'),
//             dev: require('./devConfig'),
//             production: require('./prodConfig') 
//         }
//     }
// })()