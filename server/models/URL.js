const mongoose = require('mongoose');
const { Schema } = mongoose;

const urlSchema = new Schema({
	longURL: {
		type: String,
		required: true,
	},
	shortURL: {
		type: String,
	},
});

module.exports = mongoose.model('URL', urlSchema);
