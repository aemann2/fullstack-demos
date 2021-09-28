const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Item model
const Contact = require('../models/Contact');

// @route GET contacts/
// @description get all contacts in the DB
// @access Public
router.get('/', (req, res) => {
	Contact.find()
		.then((contacts) => res.json(contacts))
		.catch((err) => res.status(404).json({ error: 'No Items found!' }));
});

// @route POST contacts/
// @description add a contact
// @access Public
router.post('/', (req, res) => {
	Contact.create(req.body)
		.then((contact) => res.json({ msg: `${contact} added!` }))
		.catch((err) => res.status(400).json({ error: err }));
});

// @route DELETE contacts/
// @description delete a contact
// @access Public
router.delete('/', (req, res) => {
	const id = mongoose.Types.ObjectId(req.body.id);
	Contact.deleteOne({ _id: id })
		.then((id) => res.json({ msg: `${req.body.id} deleted!` }))
		.catch((err) => res.status(400).json({ error: err }));
});

// @route PATCH contacts/
// @description modify a contact
// @access Public
router.patch('/', (req, res) => {
	const id = mongoose.Types.ObjectId(req.body.id);
	Contact.updateOne({ _id: id }, { name: 'test' })
		.then((id) => res.json({ msg: `${req.body.id} updated!` }))
		.catch((err) => res.status(400).json({ error: err }));
});

module.exports = router;
