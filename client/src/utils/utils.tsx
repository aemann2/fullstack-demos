import validator from 'validator';

export const validateUrl = (url: string) => {
	return validator.isURL(url, {
		require_protocol: true,
	});
};
