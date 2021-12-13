const express = require('express');
const CommentController = require('../../controllers/Comment.controller');

const router = express.Router();

router.route('/:pizzaId').post(CommentController.addComment);
router.route('/:pizzaId/:commentId').delete(CommentController.removeComment);

module.exports = router;
