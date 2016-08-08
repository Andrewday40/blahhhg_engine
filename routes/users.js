
var express = require('express');
var router = express.Router();
var User = require('../models/user.js');


router.get('/users', getAllUser);
router.get('/users/:userId', getUser);
router.post('/users', createUser);
router.delete('/users/:userId', deleteUser);
router.put('/users/:userId', updateUser);

module.exports = router;

function getAllUser(req, res, next){
  User.find({}, function(err, foundUser){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        user: foundUser
      });
    }
  });
}
function getUser(req, res, next){
  console.log('getting a user');
  next();
}
function createUser(req, res, next){
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    email: req.body.email
  });
  user.save(function(err, newUser){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        user: newUser
      });
    }
  });
}
function deleteUser(req, res, next){
  console.log('deleting a user');
  next();
}
function updateUser(req, res, next){
  console.log('Updating a User');
  next();
}
