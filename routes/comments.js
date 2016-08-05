
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment.js');

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
  var comment = new Comment({
    author: req.body.author,
    body: req.body.body,
    created: new Date(),
    updated: new Date(),
    post: req.body.post
  });
  comment.save(function(err, newComment){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        newComment: newComment
      });
    }
  });
}
function deleteComment(req, res, next){
  console.log('deleting a commenting');
  next();
}
function updateComment(req, res, next){
  console.log('updating a comment');
  next();
}
