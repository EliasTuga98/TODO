const item = require('../models/item');
require('dotenv').config();

module.exports = {
  createItem: async (req, res) => {
    const { description } = req.body;
    try {
      const result = await item.create({ description, state: false });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  readAllItems: async (req, res) => {
    try {
      const results = await item.findAll();
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteItem: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await item.destroy({ where: { id } });
      return res.status(200).json({ message: `${result} Item eliminado` });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
