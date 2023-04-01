const router = require('express').Router();


// require todo from models:
const Todo = require('../model/todo')

router.post('/add-todo',(req,res)=>{
    // first we have to grab data
    const {todo} = req.body;
    console.log(todo);
    const newTodo = new Todo({todo:todo});


    // save the todo

    newTodo.save()
    .then(()=>{
        console.log("Successfully added todo item");
        res.redirect("/")
    })
    .catch((err)=>{
        console.log(err);
    })

})

.get("/delete-todo/:_id",(req,res)=>{
 const {_id} = req.params;

 Todo.deleteOne({_id})
 .then(()=>{
    console.log("Delted Successfully!")
    res.redirect('/');
 })
 .catch(err => console.log(err));

})



module.exports = router;