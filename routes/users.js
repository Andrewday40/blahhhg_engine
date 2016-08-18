
var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var auth = require('../authentication.js');
var passport = require('passport');


router.get('/users', getAllUser);
router.get('/users/:userId', getUser);
// router.post('/users', createUser);
router.post('/signup', auth.signup);
router.post('/login', auth.login);
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
  User.find({_id: req.params.id}, function(err, foundAUser){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        user: foundAUser
      });
    }
  });
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
  User.findOneAndRemove({_id: req.params.id}, function(err, removedUser){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        removedUser: removedPost
      });
    }
  });
}
function updateUser(req, res, next){
  User.findOneAndUpdate({_id: req.params.id}, req.body, function(err, oldUser){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        oldUser: oldUser
      });
    }
  });
}
