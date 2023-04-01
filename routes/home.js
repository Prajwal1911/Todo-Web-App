const router = require('express').Router();
const Todo = require('../model/todo');


// routes:

router.get("/",async (req,res)=>{
    const allTodo = await Todo.find();

    res.render("home",{
        todo:allTodo
    });
})



module.exports = router;