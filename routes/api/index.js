const router = require('express').Router();
const pizzaRoutes = require('./Pizza.route');

router.use('/pizzas', pizzaRoutes);

module.exports = router;
