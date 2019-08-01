var User = require('./../models/User');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports = {

  register : (req, res) => {
    const {username, email, password} = req.body;
    const newUser = new User({
      username, email, password
    })
    // console.log(newUser, 'user created')
    newUser.save((err, user) => {
      if(err) return res.json({err: "Failed to create new user"})
      // console.log(user, 'success')
      res.json({username: user.username, email: user.email })
    })
  },

  login: (req, res, next) => {
    User.findOne({email: req.body.email}, (err, user) => {
      // console.log(user, 'checkpoint')
      if(!user){
        return res.status(401).json({err: "User not found."})
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if(result){
          const id = user._id
          const token = jwt.sign({id}, process.env.secret);
          req.headers.authorization = token;
          // console.log(req.headers, 'in login');
          return res.status(200).json({name: user.username, email: user.email, token})
        }
        else {
          return res.status(401).json({err: "Invalid User"})
        }
      })
    })
  }
}