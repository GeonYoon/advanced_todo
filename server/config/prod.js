module.exports = {
    'googleAuth' : {
        'clientID' : process.env.GOOGLE_CLIENT_ID,
        'clientSecret' : process.env.GOOGLE_CLIENT_SECRET,
        'callbackURL' : 'ec2-3-130-47-223.us-east-2.compute.amazonaws.com/auth/google/callback'
    },
    'facebookAuth' : {
        'clientID'      : process.env.FB_CLIENT_ID, 
        'clientSecret'  : process.env.FB_CLIENT_SECRET, 
        'callbackURL'   : 'ec2-3-130-47-223.us-east-2.compute.amazonaws.com/auth/facebook/callback'
    },
    mongoURI : process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
}
