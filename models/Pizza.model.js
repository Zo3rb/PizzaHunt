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
  toppings: [],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
}, {
  timestamps: true,
  toJSON: {
      virtuals: true,
    },
    id: false
});

PizzaSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const PizzaModel = mongoose.model('Pizza', PizzaSchema);

module.exports = PizzaModel;
