const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const TodoSchema = new Schema({
  todo: { type: String },
  isCompleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('Todo', TodoSchema);