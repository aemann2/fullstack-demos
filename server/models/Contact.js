const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
	name: {
		first: {
			type: String,
			required: true,
		},
		last: {
			type: String,
			required: true,
		},
	},
	phone: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	picture: {
		large: {
			type: String,
			required: true,
		},
		medium: {
			type: String,
			required: true,
		},
		thumbnail: {
			type: String,
			required: true,
		},
	},
});

module.exports = mongoose.model('Contact', contactSchema);
