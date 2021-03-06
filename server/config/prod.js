module.exports = {
    'googleAuth' : {
        'clientID' : process.env.GOOGLE_CLIENT_ID,
        'clientSecret' : process.env.GOOGLE_CLIENT_SECRET,
        'callbackURL' : 'http://todo.geonyoon.com/api/auth/google/callback'
    }, 
    'facebookAuth' : {
        'clientID'      : process.env.FB_CLIENT_ID, 
        'clientSecret'  : process.env.FB_CLIENT_SECRET, 
        'callbackURL'   : 'http://todo.geonyoon.com/api/auth/facebook/callback'
    },
    mongoURI : process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
}
