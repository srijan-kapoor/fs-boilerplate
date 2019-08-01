const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  todos: [{ type: Schema.Types.ObjectId, ref: 'Todo' }]
})

UserSchema.pre('save', function(next) {
  if(this.password) {
    this.password = bcrypt.hashSync(this.password, SALT_ROUNDS);
    next();
  } else {
    next();
  }
});

module.exports = mongoose.model('User', UserSchema);