import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import UrlBar from '../UrlBar';
import UrlList from '../UrlList';

describe('tests for URL list', () => {
	test('URL List displays correctly from list', async () => {
		const response = await axios.get('/shorten');
		render(<UrlList response={response} />);
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
		const response = await axios.get('/shorten');
		render(<UrlList response={response} />);
		const list = await screen.findAllByText('URL');
		expect(list).toHaveLength(4);
	});
});
