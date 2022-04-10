const express = require('express');
const {
  createItem, readAllItems, deleteItem, updateItem,
} = require('../controllers/itemController');

const router = express.Router();
router.use(express.json());

router.post('/new_item', createItem);
router.get('/', readAllItems);
router.delete('/:id', deleteItem);
router.put('/:id', updateItem);

module.exports = router;
