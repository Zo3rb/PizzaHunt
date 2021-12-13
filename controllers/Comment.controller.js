const {Pizza, Comment} = require('../models');

const commentController = {
  async addComment(req, res) {
    try {
      console.log(req.body);
      const newComment = await Comment.create(req.body);
      const pizzaCommented = await Pizza.findOneAndUpdate(
            {_id: req.params.pizzaId},
            {$push: {comments: newComment._id}},
            {new: true}
      );
      if(!pizzaCommented) return res.status(404).json({message: "Pizza Was not found With this ID"});
      res.status(201).json({message: "Successed", data: pizzaCommented});
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  async removeComment(req, res) {
    try {
      const commentToDelete = await Comment.findOneAndDelete({_id: req.params.commentId});
      if(!commentToDelete) return res.status(404).json({message: "Comment Was not found With this ID"});
      const pizzaCommented = await Pizza.findOneAndUpdate(
              {_id: req.params.pizzaId},
              {$pull: {comments: req.params.commentId}},
              {new: true}
            );
      if(!pizzaCommented) return res.status(404).json({message: "Pizza Was not found With this ID"});
      res.json({message: "Successed", data: pizzaCommented});
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = commentController;
