import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UrlBar from '../UrlBar/UrlBar';

const mockFn = () => {
	return;
};

describe('Tests for URL input', () => {
	const passingText = 'http://www.google.com';
	const failingText = 'www.google.com';
	const testName = 'test name';

	test('URL input shows input', () => {
		render(<UrlBar getUrls={mockFn} />);
		const urlInput = screen.getByPlaceholderText('Enter URL here...');
		userEvent.type(urlInput, passingText);
		expect(urlInput).toHaveValue(passingText);
	});

	test('URL input accepts valid input', () => {
		render(<UrlBar getUrls={mockFn} />);
		const urlInput = screen.getByPlaceholderText('Enter URL here...');
		const nameInput = screen.getByPlaceholderText('Name your URL...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		const errorMsg = screen.queryByText('Invalid Input');
		userEvent.type(urlInput, passingText);
		userEvent.type(nameInput, testName);
		userEvent.click(submitBtn);
		expect(errorMsg).not.toBeInTheDocument();
	});

	test('URL input rejects invalid input', () => {
		render(<UrlBar getUrls={mockFn} />);
		const urlInput = screen.getByPlaceholderText('Enter URL here...');
		const nameInput = screen.getByPlaceholderText('Name your URL...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlInput, failingText);
		userEvent.type(nameInput, testName);
		userEvent.click(submitBtn);
		const errorMsg = screen.getByLabelText('Invalid Input');
		expect(errorMsg).toBeInTheDocument();
	});

	test('Submitting clears URL input if valid input', async () => {
		render(<UrlBar getUrls={mockFn} />);
		const urlInput = screen.getByPlaceholderText('Enter URL here...');
		const nameInput = screen.getByPlaceholderText('Name your URL...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlInput, passingText);
		userEvent.type(nameInput, testName);
		userEvent.click(submitBtn);
		await waitFor(() => expect(urlInput).toHaveValue(''));
	});

	test('Submitting does not clear URL input if invalid input', () => {
		render(<UrlBar getUrls={mockFn} />);
		const urlInput = screen.getByPlaceholderText('Enter URL here...');
		const nameInput = screen.getByPlaceholderText('Name your URL...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlInput, failingText);
		userEvent.type(nameInput, testName);
		userEvent.click(submitBtn);
		expect(urlInput).toHaveValue(failingText);
	});
});

describe('Tests for name input', () => {
	const testURL = 'http://www.google.com';
	const testName = 'test name';

	test('Name input shows input', () => {
		render(<UrlBar getUrls={mockFn} />);
		const nameInput = screen.getByPlaceholderText('Name your URL...');
		userEvent.type(nameInput, testName);
		expect(nameInput).toHaveValue(testName);
	});

	test('Submitting clears name input if valid input', async () => {
		render(<UrlBar getUrls={mockFn} />);
		const urlInput = screen.getByPlaceholderText('Enter URL here...');
		const nameInput = screen.getByPlaceholderText('Name your URL...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlInput, testURL);
		userEvent.type(nameInput, testName);
		userEvent.click(submitBtn);
		await waitFor(() => expect(urlInput).toHaveValue(''));
	});
});
