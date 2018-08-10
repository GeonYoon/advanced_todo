const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')
const cookieSession= require("cookie-session");
const bodyParser = require('body-parser');
const passport = require("passport");

// order is important here!!
require('./models/User');
require('./models/Todo');
require('./services/passport');

// connect to database. 
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());

app.use(
    cookieSession({
         // how long it can survie inside of browser until it is disappeared by itself
         // survive for 30 days
         maxAge: 30 * 24 * 60 *60 *1000,
         keys: [keys.cookieKey]
    })    
);
app.use(passport.initialize());
app.use(passport.session());

// authRoutes does not return anything. Just need to excute + passing app instance
// immediately call the function. 
require('./routes/authRoutes')(app);
require('./routes/todoRoutes')(app);

const PORT = process.env.PORT || 8080 
app.listen(PORT, function(){
 console.log("server has started");
});