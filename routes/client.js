const path = require('path')

/**
 * Every path that is not matching any route from the client
 * or from the api side will redirect to index.html in the client
 */
module.exports = app => {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
    });

}