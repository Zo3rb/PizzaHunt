const router = require('express').Router();
const pizzaRoutes = require('./Pizza.route');
const commentRoutes = require('./Comment.route');

router.use('/pizzas', pizzaRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
