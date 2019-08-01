var Todo = require('./../models/Todo');
var User = require('./../models/User')

module.exports = {

  newTodo: (req, res) => {
    const { todo, isCompleted } = req.body
    const newTodo = new Todo({
      todo, isCompleted
    })
    newTodo.save((err, todo) => {
      if(err) return res.status(500).json({err: "Internal Server Error"})
      return res.status(200).json({
        todo
      })
    })
  },




}