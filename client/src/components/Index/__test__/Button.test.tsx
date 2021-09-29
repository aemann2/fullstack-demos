import { render, screen } from '@testing-library/react';
import Button from '../../UI/Button';

describe('UI component tests', () => {
	test('button displays correct input text', () => {
		const testText = 'test';
		render(<Button type='submit'>{testText}</Button>);
		const button = screen.getByText(testText);
		expect(button).toHaveTextContent(testText);
	});
});
