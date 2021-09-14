const express = require('express');
const router = express.Router();

const URL = require('../models/URL');

router.get('/', (req, res) => {
	URL.find()
		.then((urls) => res.json(urls))
		.catch((err) => res.status(404).json({ error: 'No Items found!' }));
});

router.post('/', (req, res) => {
	URL.create(req.body)
		.then((item) => res.json({ msg: `${item} added!` }))
		.catch((err) => res.status(400).json({ error: err }));
});

module.exports = router;
