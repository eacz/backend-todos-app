const Todo = require('../models/Todo')

exports.getTodos = async (req,res) => {
    try {
        const todos = await Todo.find({})
        res.status(200)
        res.json(todos)
    } catch (error) {
        console.log(error);
        res.status(404)
        res.json(error)
    }
}

exports.addTodo = async (req,res, next) => {
    try {
        console.log(req.body);
        const {name, description} = req.body
        if(name && description){
           const newTodo = await Todo.create({name, description})
           res.status(200)
           res.json({newTodo, msg: 'Todo creado'})
        }
        throw new Error('El todo debe tener un nombre y una descripcion')
    } catch (error) {
        console.log(error);
        res.json({msg: error.message})
        
    }
}

exports.deleteTodo = async (req,res,next) => {
    try {
        const todoID = req.params.todoID
        console.log(todoID);
        await Todo.findByIdAndDelete(todoID)
        res.status(200)
        res.json({msg: 'Todo eliminada'})
    } catch (error) {
        console.log(error);
        res.json({msg: error.message})
    }
}

exports.updateTodo = async (req,res,next) => {
    try {
        const todoID = req.params.todoID
        await Todo.findByIdAndUpdate(todoID, {$set: req.body}, {$new: true})
        const updatedTodo = await Todo.findById(todoID);
        res.status(200)
        res.json({msg: 'Todo actualizada', updatedTodo})
    } catch (error) {
        console.log(error);
        res.json({msg: error.message})
    }
}

exports.toggleTodo = async (req,res, next) => {
    try {
        const todoID = req.params.todoID
        const todo = await Todo.findById(todoID)
        todo.done = !todo.done
        await todo.save()
        res.status(200)
        res.json({msg: 'todo actualizada'})
    } catch (error) {
        console.log(error);
        res.json({msg: error.message})
    }
}