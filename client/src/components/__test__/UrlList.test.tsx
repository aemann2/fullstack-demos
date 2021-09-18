import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UrlBar from '../UrlBar';
import UrlList from '../UrlList';

describe('tests for URL list', () => {
	test('URL List displays correctly from list', async () => {
		render(<UrlList />);
		const list = await screen.findAllByText(/url/i);
		expect(list).toHaveLength(3);
	});
	test('URL list does not display bad url', async () => {
		const passingText = 'test';
		render(<UrlBar />);
		const urlBar = screen.getByPlaceholderText('Enter long URL here...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlBar, passingText);
		userEvent.click(submitBtn);
		render(<UrlList />);
		const list = await screen.findAllByText(/url/i);
		expect(list).toHaveLength(3);
	});
	test('URL list displays valid URL from input bar', async () => {
		const passingText = 'http://www.google.com';
		render(<UrlBar />);
		const urlBar = screen.getByPlaceholderText('Enter long URL here...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlBar, passingText);
		userEvent.click(submitBtn);
		render(<UrlList />);
		const list = await screen.findAllByText(/url/i);
		expect(list).toHaveLength(4);
	});
});
