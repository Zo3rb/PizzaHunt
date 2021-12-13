const { Pizza } = require("../models");

const pizzaController = {
  async getAllPizza(req, res) {
    try {
      const pizzas = await Pizza.find({}).populate('comments').sort({_id: -1});
      res.json({
        message: "Successed",
        data: pizzas,
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  async getPizzaById(req, res) {
    try {
      const pizza = await Pizza.findById(req.params.id).populate('comments');
      if (!pizza)
        return res
          .status(404)
          .json({ message: "Pizza Was Not Found With This ID" });
      res.json(pizza);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  async createPizza(req, res) {
    try {
      const newPizza = await Pizza.create(req.body);
      res.status(201).json({message: "Successed", data: newPizza});
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
  async updatePizza(req, res) {
    try {
      const pizzaToUpdate = await Pizza.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
      if(!pizzaToUpdate) return res.status(404).json({ message: "Pizza Was Not Found With This ID" });
      res.json({message: "Successed", data: pizzaToUpdate});
    } catch(error) {
      res.status(400).json(error.message);
    }
  },
  async deletePizza(req, res) {
    try {
      const pizzaToDelete = await Pizza.findOneAndDelete({_id: req.params.id});
      if(!pizzaToDelete) return res.status(404).json({ message: "Pizza Was Not Found With This ID" });
      res.json({message: "Successed", data: pizzaToDelete});
    } catch(error) {
      res.status(500).json(error.message);
    }
  }
};

module.exports = pizzaController;
