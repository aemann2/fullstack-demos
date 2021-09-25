import { rest } from 'msw';
import { validateUrl } from '../utils/utils';
// import { urls } from './urls';

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

export const handlers = [
	// Handles a POST /shorten request
	rest.post(
		'https://fullstack-demos.herokuapp.com/shorten',
		(req, res, ctx) => {
			const { longUrl, urlName } = req.body;
			const base = 'http://www.baseUrl.com';
			const shortUrl = `${base}/shorten/${123}`;

			if (validateUrl) {
				let url = {
					urlId: 666,
					longUrl,
					shortUrl,
					urlName,
					visits: 9,
				};
				urls = [...urls, url];
				return res(ctx.json(urls));
			} else {
				res.status(400).json('Invalid URL');
			}
		}
	),

	// Handles a GET /shorten request
	rest.get(
		'https://fullstack-demos.herokuapp.com/shorten/urls/all',
		(req, res, ctx) => {
			return res(ctx.json(urls));
		}
	),
];
