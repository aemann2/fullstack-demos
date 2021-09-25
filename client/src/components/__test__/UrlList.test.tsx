import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UrlBar from '../UrlBar/UrlBar';
import UrlList from '../UrlList/UrlList';

let urls = [
	{
		urlId: '123',
		longUrl: 'https://mswjs.io/docs/getting-started/integrate/node',
		shortUrl: 'http://www.baseUrl.com/123',
		urlName: 'test1',
		visits: 2,
	},
	{
		urlId: '456',
		longUrl: 'https://mswjs.io/docs/getting-started/integrate/node',
		shortUrl: 'http://www.baseUrl.com/456',
		urlName: 'test2',
		visits: 1,
	},
	{
		urlId: '789',
		longUrl: 'https://mswjs.io/docs/getting-started/integrate/node',
		shortUrl: 'http://www.baseUrl.com/789',
		urlName: 'test3',
		visits: 5,
	},
];

const getUrls = () => {
	urls.push({
		urlId: '999',
		longUrl: 'https://mswjs.io/docs/getting-started/inrate/node',
		shortUrl: 'http://www.baseUrl.com/999',
		urlName: 'test8',
		visits: 9,
	});
};

describe('tests for URL list', () => {
	test('URL List displays correctly from list', async () => {
		render(<UrlList urls={urls} />);
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
		render(<UrlBar getUrls={getUrls} />);
		const urlInput = screen.getByPlaceholderText('Enter URL here...');
		const nameInput = screen.getByPlaceholderText('Name your URL...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlInput, failingText);
		userEvent.type(nameInput, testText);
		userEvent.click(submitBtn);
		render(<UrlList urls={urls} />);
		const listButton = screen.getByText('Link History');
		userEvent.click(listButton);
		const list = await screen.findAllByText(/visits/i);
		expect(list).toHaveLength(3);
	});

	test('URL list displays valid URL from input bar', async () => {
		const passingText = 'http://www.google.com';
		const testText = 'test';
		getUrls();
		render(<UrlBar getUrls={getUrls} />);
		const urlInput = screen.getByPlaceholderText('Enter URL here...');
		const nameInput = screen.getByPlaceholderText('Name your URL...');
		const submitBtn = screen.getByRole('button', { name: 'Shorten!' });
		userEvent.type(urlInput, passingText);
		userEvent.type(nameInput, testText);
		await userEvent.click(submitBtn);
		render(<UrlList urls={urls} />);
		const listButton = screen.getByText('Link History');
		userEvent.click(listButton);
		const list = await screen.findAllByText(/visits/i);
		await waitFor(() => expect(list).toHaveLength(4));
	});
});
