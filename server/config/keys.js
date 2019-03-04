// // keys.js - figure out what set of credentials to return 
// if (process.env.NODE_ENV === 'production') {
//     // we are in production - return the prod set of keys
//     console.log("I'm here")
//     module.exports = require("./prod")
// }else {
//     // we are in development - return the dev keys
//    module.exports = require("./dev")
// }

module.exports = {
    'googleAuth' : {
        'clientID' : process.env.GOOGLE_CLIENT_ID,
        'clientSecret' : process.env.GOOGLE_CLIENT_SECRET,
        'callbackURL' : '/api/auth/google/callback'
    },
    'facebookAuth' : {
        'clientID'      : process.env.FB_CLIENT_ID, 
        'clientSecret'  : process.env.FB_CLIENT_SECRET, 
        'callbackURL'   : '/api/auth/facebook/callback'
    },
    mongoURI : process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
}
