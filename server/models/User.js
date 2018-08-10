const mongoose = require("mongoose");
//const Schema = mongoose.Schema; Doing same thing as below
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    facebookId : String
});

mongoose.model('users', userSchema);
