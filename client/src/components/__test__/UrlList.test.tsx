import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UrlBar from '../UrlBar';
import UrlList from '../UrlList';

describe('tests for URL list', () => {
	test('URL List displays correctly from list', async () => {
		render(<UrlList />);
		const listButton = screen.getByText('Link History');
		userEvent.click(listButton);
		const list = await screen.findAllByText(/url/i);
		expect(list).toHaveLength(6);
	});
});

describe('integration tests for URL list and URL bar', () => {
	test('URL list does not display bad url', async () => {
		const passingText = 'test';
		render(<UrlBar />);
		const urlBar = screen.getByPlaceholderText('Enter long URL here...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlBar, passingText);
		userEvent.click(submitBtn);
		render(<UrlList />);
		const listButton = screen.getByText('Link History');
		userEvent.click(listButton);
		const list = await screen.findAllByText(/url/i);
		expect(list).toHaveLength(6);
	});

	test('URL list displays valid URL from input bar', async () => {
		const passingText = 'http://www.google.com';
		render(<UrlBar />);
		const urlBar = screen.getByPlaceholderText('Enter long URL here...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlBar, passingText);
		userEvent.click(submitBtn);
		render(<UrlList />);
		const listButton = screen.getByText('Link History');
		userEvent.click(listButton);
		const list = await screen.findAllByText(/url/i);
		expect(list).toHaveLength(8);
	});
});
