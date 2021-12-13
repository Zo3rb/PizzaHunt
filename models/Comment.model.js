const mongoose = require('mongoose');

const ReplySchema = new mongoose.Schema({
  replyId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  replyBody: {
    type: String
  },
  writtenBy: {
    type: String
  }
}, {
  timestamps: true
});

const CommentSchema = new mongoose.Schema({
  writtenBy: {
    type: String
  },
  commentBody: {
    type: String
  },
  replies: [ReplySchema]
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  },
  id: false
});

CommentSchema.virtual('replyCount').get(function() {
  return this.replies.length
});

const CommentModel = mongoose.model('Comment', CommentSchema);

module.exports = CommentModel;
