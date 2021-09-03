const express = require('express');
const router = express.Router();

// Item model
const Item = require('../models/Item');

// @route GET items/
// @description get all items in the DB
// @access Public
router.get('/', (req, res) => {
	Item.find()
		.then((items) => res.json(items))
		.catch((err) => res.status(404).json({ error: 'No Items found!' }));
});

// @route POST items/
// @description add an item
// @access Public
router.post('/', (req, res) => {
	Item.create(req.body)
		.then((item) => res.json({ msg: `${item} added!` }))
		.catch((err) => res.status(400).json({ error: err }));
});

module.exports = router;
