const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Contact', contactSchema);
