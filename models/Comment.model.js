const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  writtenBy: {
    type: String
  },
  commentBody: {
    type: String
  }
}, {
  timestamps: true
});

const CommentModel = mongoose.model('Comment', CommentSchema);

module.exports = CommentModel;
