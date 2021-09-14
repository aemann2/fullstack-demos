const express = require('express');
const router = express.Router();

const Short = require('../models/Shorten');

router.get('/shorten', (req, res) => {
	res.json({ msg: `test!` });
});

router.post('/shorten', (req, res) => {});

module.exports = router;
