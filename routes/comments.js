
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment.js');


router.get('/comments/:postId', getCommentsForPost);
router.post('/comments', createComments);
router.delete('/comments/:commentId', deleteComment);
router.put('/comments/:commentId', updateComment);


module.exports = router;


function getCommentsForPost(req, res, next){
  Comment.find({post: req.params.postId}, function(err, comments){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      if(comments){
      res.status(200).json({
        comments: comments
      });
    } else {
      res.status(404).json({
        msg: "Didn't find it"
      });
    }
    }
  });
}
function createComments(req, res, next){
  var comment = new Comment({
    author: req.body.author,
    body: req.body.body,
    post: req.body.post,
    created: new Date(),
    updated: new Date()
  });
  comment.save(function(err, newComment){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        comment: newComment
      });
    }
  });
}
function deleteComment(req, res, next){
  Comment.findOneAndRemove({_id: req.params.commentId}, function(err, deletedComment){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        removedComment: deletedComment
      });
    }
  });
}
function updateComment(req, res, next){
  Comment.findOneAndUpdate({_id: req.params.commentId}, req.body, function(err, post){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(200).json({
        post: post
      });
    }
  });
}
