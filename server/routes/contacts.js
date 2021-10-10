const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Item model
const Contact = require('../models/Contact');

// @route GET contacts/
// @description get all contacts in the DB
// @access Public
router.get('/', async (req, res) => {
	try {
		const contacts = await Contact.find();

		return res.status(200).json({
			success: true,
			count: contacts.length,
			data: contacts,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: err,
		});
	}
});

// @route POST contacts/
// @description add a contact
// @access Public
router.post('/', async (req, res) => {
	try {
		const contact = await Contact.create(req.body);

		return res.status(201).json({
			success: true,
			data: contact,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: err,
		});
	}
});

// @route DELETE contacts/
// @description delete a contact
// @access Public
router.delete('/', async (req, res) => {
	try {
		const id = mongoose.Types.ObjectId(req.body.id);
		const { deletedCount } = await Contact.deleteOne({ _id: id });

		if (!deletedCount) {
			return res.status(404).json({
				success: false,
				error: 'Contact not found',
			});
		}

		return res.status(200).json({
			success: true,
			data: `${req.body.id} deleted`,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: err,
		});
	}
});

// @route PATCH contacts/
// @description modify a contact
// @access Public
router.put('/', async (req, res) => {
	try {
		const id = mongoose.Types.ObjectId(req.body.id);
		const updateObject = req.body;
		const updated = await Contact.findOneAndUpdate(
			{ _id: id },
			{ $set: updateObject }
		);

		if (!updated) {
			return res.status(404).json({
				success: false,
				error: 'Contact not found',
			});
		}

		return res.status(200).json({
			success: true,
			data: updated,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			error: err,
		});
	}
});

module.exports = router;
