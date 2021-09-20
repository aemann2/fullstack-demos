import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UrlBar from '../UrlBar';

describe('tests for URL bar', () => {
	const passingText = 'http://www.google.com';
	const failingText = 'www.google.com';

	test('URL bar shows input', () => {
		render(<UrlBar />);
		const urlBar = screen.getByPlaceholderText('Enter long URL here...');
		userEvent.type(urlBar, passingText);
		expect(urlBar).toHaveValue(passingText);
	});

	test('URL bar accepts valid input', () => {
		render(<UrlBar />);
		const urlBar = screen.getByPlaceholderText('Enter long URL here...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		const errorMsg = screen.queryByText('Invalid Input');
		userEvent.type(urlBar, passingText);
		userEvent.click(submitBtn);
		expect(errorMsg).not.toBeInTheDocument();
	});

	test('URL bar rejects invalid input', () => {
		render(<UrlBar />);
		const urlBar = screen.getByPlaceholderText('Enter long URL here...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlBar, failingText);
		userEvent.click(submitBtn);
		const errorMsg = screen.getByLabelText('Invalid Input');
		expect(errorMsg).toBeInTheDocument();
	});

	test('Submitting clears URL bar if valid input', () => {
		render(<UrlBar />);
		const urlBar = screen.getByPlaceholderText('Enter long URL here...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlBar, passingText);
		userEvent.click(submitBtn);
		expect(urlBar).toHaveValue('');
	});

	test('Submitting does not clear URL bar if invalid input', () => {
		render(<UrlBar />);
		const urlBar = screen.getByPlaceholderText('Enter long URL here...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlBar, failingText);
		userEvent.click(submitBtn);
		expect(urlBar).toHaveValue(failingText);
	});
});
