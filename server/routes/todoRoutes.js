const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Todo = mongoose.model('todos');

module.exports = (app) => {
    app.post('/todos', requireLogin , async (req,res)=> {
        const {title, date, todos, completeness} = req.body;
        const todo = new Todo({
            title,
            date,
            todos, 
            completeness,
            _user: req.user.id,
        });
        await todo.save();
        res.send()
        
    }) ;  
    
    app.put('/todos/edit/:id', requireLogin, async (req, res) => {
        const { todos, completeness, id} = req.body;
        await Todo.update({_id : req.params.id, _user : req.user.id},
                                    {$set : {completeness : completeness, todos :todos}})
         res.send()
    })
   
    app.get('/todos', requireLogin ,async(req,res) => {
        const todos = await Todo.find({ _user: req.user.id })
        res.send(todos);
    });  
    
    app.delete('/todos/delete/:id', async (req, res) => {
      await Todo.deleteOne({ _id: req.params.id });
      const todos = await Todo.find({ _user: req.user.id }).sort({dateSent: -1}).select({
        recipients: false
      });
      res.send(todos);
    });
}