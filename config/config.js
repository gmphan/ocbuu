let envSetting = {
    local:  require('./localConfig'),
    dev:    require('./devConfig'),
    prod:   require('./prodConfig')
}

let currentEnv = 'local'
let config = {
    env: currentEnv,
    serverPort: 4000
}

module.exports = async function configBuilder() {
    try {
        let processEnv = process.env['ENV']
        if(processEnv !== currentEnv) {
            currentEnv = processEnv
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