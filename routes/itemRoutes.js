const express = require('express');
const { createItem, readAllItems, deleteItem } = require('../controllers/itemController');

const router = express.Router();
router.use(express.json());

router.post('/new_item', createItem);
router.get('/', readAllItems);
router.delete('/:id', deleteItem);

module.exports = router;
