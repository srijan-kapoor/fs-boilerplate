var express = require('express');
var router = express.Router();

var userController = require('./../controllers/userController');
const todoController = require('./../controllers/todoController');
const isLoggedIn = require('./../controllers/authController');
let { isLogged } = isLoggedIn;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', userController.register)
router.post('/login', userController.login)

router.post('/createtodo', isLogged, todoController.newTodo)

module.exports = router;
