import { rest } from 'msw';
import validateUrl from '../utils/utils';

let urls = [
	{
		urlId: '123',
		longUrl: 'https://mswjs.io/docs/getting-started/integrate/node',
		shortUrl: 'http://www.baseUrl.com/123',
		visits: 2,
	},
	{
		urlId: '456',
		longUrl: 'https://mswjs.io/docs/getting-started/integrate/node',
		shortUrl: 'http://www.baseUrl.com/456',
		visits: 1,
	},
	{
		urlId: '789',
		longUrl: 'https://mswjs.io/docs/getting-started/integrate/node',
		shortUrl: 'http://www.baseUrl.com/789',
		visits: 5,
	},
];

export const handlers = [
	// Handles a POST /shorten request
	rest.post('/shorten', (req, res, ctx) => {
		const { longUrl } = req.body;
		const base = 'http://www.baseUrl.com';
		const shortUrl = `${base}/shorten/${123}`;

		if (validateUrl) {
			let url = {
				urlId: 666,
				longUrl,
				shortUrl,
				visits: 9,
			};
			urls = [...urls, url];
			return res(ctx.json(urls));
		} else {
			res.status(400).json('Invalid URL');
		}
	}),

	// Handles a GET /shorten request
	rest.get('/shorten', (req, res, ctx) => {
		return res(ctx.json(urls));
	}),
];
