/**
 * as of Dec 14, 2024, passport 0.7 was giving the error message below
 * TypeError: req.session.regenerate is not a function using Passport
 * I have to downgrade it to 0.5
 * https://stackoverflow.com/questions/72375564/typeerror-req-session-regenerate-is-not-a-function-using-passport
 */
const passport = require('passport');
const GoogleStragety = require('passport-google-oauth20').Strategy;
const configBuilder = require('../config/config');
const mongoose = require('mongoose')

let config 
!(async () => {
    config = await configBuilder()
    const User = mongoose.model('users')

    /**
     * the parameter user is from User.findOne below
     * it comes here to be serialized and added to 
     * cookie. 
     */
    passport.serializeUser((user, done) => {
        done(null, user.id) //user.id is the object id and not google id
    })

    /**
     * get user from cookie to verify from database
     */
    passport.deserializeUser((id, done) => {
        User.findById(id).then(user => {
            done(null, user)
        })
    })

    /**
     * link to register google api for the below info
     * https://console.cloud.google.com/home/dashboard?project=ocbuu-407115
     */
    passport.use(
        new GoogleStragety(
            {
                clientID: config.googleClientID,
                clientSecret: config.googleClientSecret,
                callbackURL: '/auth/google/callback',
                proxy: true //this will trust all communication from heroku
                /**
                 * when develop on local http://localhost is ok
                 * but when on production our app only trust https - passport thing
                 * when https callback from google get to heroku proxy, it became http
                 * and passport don't trust it that why we have to set proxy to true,
                 * so it can trust all proxy.
                 */
            },
            (accessToken, refreshToken, profile, done) => {
                User.findOne({ googleId: profile.id})
                    .then((existingUser) => {
                        if(existingUser) {
                            /**
                             * null mean everything is good
                             * and we give google the user (the googleId)
                             * so google can close the connection
                             */
                            console.log(existingUser)
                            done(null, existingUser)
                        } else {
                            new User({ googleId: profile.id })
                                .save()
                                .then(user => done(null, user))
                        }
                    })
                
            }
        )
    )
})()
