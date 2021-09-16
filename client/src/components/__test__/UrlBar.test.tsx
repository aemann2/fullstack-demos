import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UrlBar from '../UrlBar';

describe('tests for URL bar', () => {
	test('URL bar shows input', () => {
		const testString = 'http://www.google.com';
		render(<UrlBar />);
		const urlBar = screen.getByPlaceholderText('Enter long URL here...');
		userEvent.type(urlBar, testString);
		expect(urlBar).toHaveValue(testString);
	});
	test('URL bar accepts valid input', () => {
		const testString = 'http://www.google.com';
		render(<UrlBar />);
		const urlBar = screen.getByPlaceholderText('Enter long URL here...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		const errorMsg = screen.queryByText('Invalid Input');
		userEvent.type(urlBar, testString);
		userEvent.click(submitBtn);
		expect(errorMsg).not.toBeInTheDocument();
	});
	test('URL bar rejects invalid input', () => {
		const testString = 'test';
		render(<UrlBar />);
		const urlBar = screen.getByPlaceholderText('Enter long URL here...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlBar, testString);
		userEvent.click(submitBtn);
		const errorMsg = screen.getByLabelText('Invalid Input');
		expect(errorMsg).toBeInTheDocument();
	});
	test('Submitting clears URL bar if valid input', () => {
		const testString = 'http://www.google.com';
		render(<UrlBar />);
		const urlBar = screen.getByPlaceholderText('Enter long URL here...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlBar, testString);
		userEvent.click(submitBtn);
		expect(urlBar).toHaveValue('');
	});
	test('Submitting does not clear URL bar if invalid input', () => {
		const testString = 'test';
		render(<UrlBar />);
		const urlBar = screen.getByPlaceholderText('Enter long URL here...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlBar, testString);
		userEvent.click(submitBtn);
		expect(urlBar).toHaveValue(testString);
	});
});
