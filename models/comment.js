
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  author: String,
  // author: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'User'
  // },
  body: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    required: true
  },
  updated: {
    type: Date,
    required: true
  },
  post: String
  // post: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'Post'
  // }
});

var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
