const mongoose = require('mongoose');
const { Schema } = mongoose;

const urlSchema = new Schema({
	urlId: {
		type: String,
		required: true,
	},
	longUrl: {
		type: String,
		required: true,
	},
	shortUrl: {
		type: String,
		required: true,
	},
	urlName: {
		type: String,
		required: true,
	},
	visits: {
		type: Number,
		required: true,
		default: 0,
	},
});

module.exports = mongoose.model('URL', urlSchema);
