const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Item model
const Item = require('../models/Item');

// @route GET items/
// @description get all items in the DB
// @access Public
router.get('/', async (req, res) => {
	try {
		const items = await Item.find();

		return res.status(200).json({
			success: true,
			count: items.length,
			data: items,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: err,
		});
	}
});

// @route POST items/
// @description add an item
// @access Public
router.post('/', async (req, res) => {
	try {
		const item = await Item.create(req.body);

		return res.status(200).json({
			success: true,
			data: item,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: err,
		});
	}
});

// @route DELETE item/
// @description delete an item
// @access Public
router.delete('/', async (req, res) => {
	try {
		const id = mongoose.Types.ObjectId(req.body.id);
		const { deletedCount } = await Item.deleteOne({ _id: id });

		if (!deletedCount) {
			return res.status(404).json({
				success: false,
				error: 'Item not found',
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

// @route PUT items/
// @description modify an item
// @access Public
router.put('/', async (req, res) => {
	try {
		const id = mongoose.Types.ObjectId(req.body.id);
		const updateObject = req.body;
		const updated = await Item.findOneAndUpdate(
			{ _id: id },
			{ $set: updateObject }
		);

		if (!updated) {
			return res.status(404).json({
				success: false,
				error: 'Item not found',
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
