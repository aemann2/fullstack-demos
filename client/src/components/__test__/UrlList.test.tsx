import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UrlBar from '../UrlBar';
import UrlList from '../UrlList';

describe('tests for URL list', () => {
	test('URL List displays correctly from list', async () => {
		render(<UrlList />);
		const list = await screen.findAllByText('URL');
		expect(list).toHaveLength(3);
	});
	test('URL List displays new URL from input bar', async () => {
		const passingText = 'http://www.google.com';
		render(<UrlBar />);
		const urlBar = screen.getByPlaceholderText('Enter long URL here...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlBar, passingText);
		userEvent.click(submitBtn);
		render(<UrlList />);
		const list = await screen.findAllByText('URL');
		expect(list).toHaveLength(4);
	});
});
