
var express = require('express');
var router = express.Router();

router.get('/comments/:postId', getCommentsForPost);
router.post('/comments', createComments);
router.delete('/comments/:commentId', deleteComment);
router.put('/comments/:commentId', updateComment);


module.exports = router;


function getCommentsForPost(req, res, next){
  console.log('getting all the comments');
  next();
}
function createComments(req, res, next){
  console.log('creating a comment');
  next();
}
function deleteComment(req, res, next){
  console.log('deleting a commenting');
  next();
}
function updateComment(req, res, next){
  console.log('updating a comment');
  next();
}
