const passport = require("passport");

/**
 * setup google auth console.developer.google.com 
 */
module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    )

    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/dashboard')
        }        
    )

    app.get('/api/logout', (req, res) => {
        req.logout();
        // res.send(req.user)
        res.redirect('/')
    })

    // we only able to get the user after authenticate with google (/auth/google)
    app.get('/api/current_user', (req, res) => {
        // console.log('req.user', req.user)
        res.send(req.user)
    })
}