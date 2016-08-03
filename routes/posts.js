
var express = require('express');
var router = express.Router();

router.get('/posts/:id', getPost);
router.get('/posts', getAllThePost);
router.post('/posts', createPost);
router.delete('/posts/:id', deletePost);
router.put('/posts/:id', updatePost);

module.exports = router;

function getPost(req, res, next){
  console.log('getting a post');
  next();
}
function getAllThePost(req, res, next){
  console.log('getting all the posts');
  next();
}
function createPost(req, res, next){
  console.log('creating a post');
  next();
}
function deletePost(req, res, next){
  console.log('deleteing a post');
  next();
}
function updatePost(req, res, next){
  console.log('updating a post');
  next();
}
