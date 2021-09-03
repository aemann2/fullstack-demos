const express = require('express');
const router = express.Router();

// Item model
const Contact = require('../models/Contact');

// @route GET items/
// @description get all items in the DB
// @access Public
router.get('/', (req, res) => {
	Contact.find()
		.then((contacts) => res.json(contacts))
		.catch((err) => res.status(404).json({ error: 'No Items found!' }));
});

// @route POST items/
// @description add an item
// @access Public
router.post('/', (req, res) => {
	Contact.create(req.body)
		.then((contact) => res.json({ msg: `${contact} added!` }))
		.catch((err) => res.status(400).json({ error: err }));
});

module.exports = router;
