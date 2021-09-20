import validateUrl from '../utils.tsx';

describe('tests for utils', () => {
	test('returns true for valid URL', () => {
		const result = validateUrl('http://www.google.com');
		expect(result).toBeTruthy();
	});
	test('returns false for invalid URL', () => {
		const result = validateUrl('test');
		expect(result).toBeFalsy();
	});
});
