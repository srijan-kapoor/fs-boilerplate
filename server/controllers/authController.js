const jwt = require('jsonwebtoken');
const User = require('./../models/User');

module.exports = {
  isLogged: (req, res, next) => {
    console.log(req.headers, 'checking headers');
    next(); 
  }
}