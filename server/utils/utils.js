const validator = require('validator');

const validateUrl = (url) => {
	return validator.isURL(url, {
		require_protocol: true,
	});
};

module.exports = validateUrl;
