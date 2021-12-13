const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
  pizzaName: {
    type: String
  },
  createdBy: {
    type: String
  },
  size: {
    type: String,
    default: 'Large'
  },
  toppings: []
}, {
  timestamps: true
});

const PizzaModel = mongoose.model('Pizza', PizzaSchema);

module.exports = PizzaModel;
