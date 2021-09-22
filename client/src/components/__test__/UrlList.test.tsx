import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UrlBar from '../UrlBar';
import UrlList from '../UrlList';

describe('tests for URL list', () => {
	test('URL List displays correctly from list', async () => {
		render(<UrlList />);
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
		render(<UrlBar />);
		const urlInput = screen.getByPlaceholderText('Enter URL here...');
		const nameInput = screen.getByPlaceholderText('Name your URL...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlInput, failingText);
		userEvent.type(nameInput, testText);
		userEvent.click(submitBtn);
		render(<UrlList />);
		const listButton = screen.getByText('Link History');
		userEvent.click(listButton);
		const list = await screen.findAllByText(/visits/i);
		expect(list).toHaveLength(3);
	});

	test('URL list displays valid URL from input bar', async () => {
		const passingText = 'http://www.google.com';
		const testText = 'test';
		render(<UrlBar />);
		const urlInput = screen.getByPlaceholderText('Enter URL here...');
		const nameInput = screen.getByPlaceholderText('Name your URL...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlInput, passingText);
		userEvent.type(nameInput, testText);
		userEvent.click(submitBtn);
		render(<UrlList />);
		const listButton = screen.getByText('Link History');
		userEvent.click(listButton);
		const list = await screen.findAllByText(/visits/i);
		expect(list).toHaveLength(4);
	});
});
