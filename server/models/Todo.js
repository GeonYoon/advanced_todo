const mongoose = require('mongoose');
const { Schema } = mongoose;


const todoSchema = new Schema({
   title: String,
   date: String,
   todos: { type : Array , "default" : [] },
   completeness: String,
   // a reference to a very particular user or to another instance of user 
   _user: {type: Schema.Types.ObjectId, ref: 'User'},

});

mongoose.model('todos',todoSchema);