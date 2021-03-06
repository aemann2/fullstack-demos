const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: false,
	},
});

module.exports = mongoose.model('Item', itemSchema);
