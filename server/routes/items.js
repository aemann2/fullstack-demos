const express = require('express');
const router = express.Router();

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

module.exports = router;
