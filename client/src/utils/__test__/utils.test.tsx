import { validateUrl } from '../utils';

describe('tests for URL validation', () => {
	const goodURLs = [
		'https://www.google.com',
		'http://www.thenew.org',
		'http://cnn.com',
	];
	const badURLs = ['htt://www.bad.net', 'www.google.com', 'notaurl'];
	test('detects good URLs', () => {
		const results = [];
		for (let url of goodURLs) {
			results.push(validateUrl(url));
		}
		expect(results).not.toContain(false);
	});
	test('detects bad URLs', () => {
		const results = [];
		for (let url of badURLs) {
			results.push(validateUrl(url));
		}
		expect(results).not.toContain(true);
	});
});
