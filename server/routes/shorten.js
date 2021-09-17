const express = require('express');
const router = express.Router();
const URL = require('../models/URL');
const validateUrl = require('../utils/utils');
const shortid = require('shortid');

// @route GET shorten/:url
// @description redirects a short URL to a full URL
// @access Public
router.get('/:url', async (req, res) => {
	try {
		// checking if url exists by looking for the urlId, which we're trying to match with the url param
		const url = await URL.findOne({ urlId: req.params.url });
		if (url) {
			// if it does, add to number of visits
			url.visits++;
			url.save();
			// then redirect to the long url. this works because the URL itself is making a GET request to our server, and our server responds by redirecting to the long URL
			return res.redirect(url.longUrl);
		} else {
			res.status(400).json('URL not found');
		}
	} catch (err) {
		console.log(err);
		res.status(500).json('Server error');
	}
});

// @route GET shorten/all
// @description gets all shortened URLs
// @access Public
router.get('/urls/all', async (req, res) => {
	try {
		const urls = await URL.find();
		if (urls) {
			res.header('Access-Control-Allow-Origin', '*');
			res.json(urls);
		}
	} catch (err) {
		console.log(err);
		res.status(500).json('Server error');
	}
});

// @route POST shorten/
// @description submit a long URL to shorten
// @access Public
router.post('/', async (req, res) => {
	// grabbing long URL from post body
	const { longUrl } = req.body;
	// the base URL our server is running on, which is what will listen for our GET request for the URL redirect
	const base = process.env.BASEURL;
	// getting a short id, which we'll use to shorten the long url
	const urlId = shortid.generate();

	// checking if URL is valid
	if (validateUrl(longUrl)) {
		try {
			// seeing if the long url is already in the DB
			let url = await URL.findOne({ longUrl });

			if (url) {
				res.json(url);
			} else {
				// if we don't find the shortened URL, we'll create one and add it to the DB
				const shortUrl = `${base}/shorten/${urlId}`;

				url = new URL({
					longUrl,
					shortUrl,
					urlId,
				});

				await url.save();
				res.json(url);
			}
		} catch (err) {
			console.log(err);
			res.status(500).json('Server error');
		}
	} else {
		// if the submitted URL isn't valid, return this error
		res.status(400).json('Invalid Original Url');
	}
});

module.exports = router;
