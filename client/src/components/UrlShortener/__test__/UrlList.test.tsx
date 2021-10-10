import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// using UrlShortener since the state has been lifted up for UrlList
import UrlShortener from '../../../pages/UrlShortener/UrlShortener';

describe('tests for URL list', () => {
	test('URL List displays correctly from list', async () => {
		render(<UrlShortener />);
		const listButton = screen.getByText('Link History');
		userEvent.click(listButton);
		const list = await screen.findAllByText(/visits/i);
		expect(list).toHaveLength(3);
	});
});

describe('integration tests for URL list and URL bar', () => {
	test('URL list does not display bad url', async () => {
		const failingText = 'test';
		const testText = 'test';
		render(<UrlShortener />);
		const urlInput = screen.getByPlaceholderText('Enter URL here...');
		const nameInput = screen.getByPlaceholderText('Name your URL...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlInput, failingText);
		userEvent.type(nameInput, testText);
		userEvent.click(submitBtn);
		const listButton = screen.getByText('Link History');
		userEvent.click(listButton);
		const list = await screen.findAllByText(/visits/i);
		expect(list).toHaveLength(3);
	});

	test('URL list displays valid URL from input bar', async () => {
		const passingText = 'http://www.google.com';
		const testText = 'test4';
		render(<UrlShortener />);
		const urlInput = screen.getByPlaceholderText('Enter URL here...');
		const nameInput = screen.getByPlaceholderText('Name your URL...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlInput, passingText);
		userEvent.type(nameInput, testText);
		await waitFor(() => userEvent.click(submitBtn));
		const listButton = await screen.findByText('Link History');
		await waitFor(() => userEvent.click(listButton));
		const list = await screen.findAllByText(/visits/i);
		await waitFor(() => expect(list).toHaveLength(4));
	});
});
