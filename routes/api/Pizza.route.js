const express = require('express');
const PizzaController = require('../../controllers/Pizza.controller');

const router = express.Router();

router.route('/')
  .get(PizzaController.getAllPizza)
  .post(PizzaController.createPizza);

router.route('/:id')
  .get(PizzaController.getPizzaById)
  .put(PizzaController.updatePizza)
  .delete(PizzaController.deletePizza);

module.exports = router;
