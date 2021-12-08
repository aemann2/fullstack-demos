import validator from 'validator';

export const validateUrl = (url: string) => {
	return validator.isURL(url, {
		require_protocol: true,
	});
};

export const trimNum = (input: string) => {
	const length = 6;
	const trimmedNum = input.length > length ? input.substring(0, length) : input;
	return Number(trimmedNum).toFixed(2);
};
