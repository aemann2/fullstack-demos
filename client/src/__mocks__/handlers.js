import { rest } from 'msw';
import { urlData, peopleData } from './data/data';
import { validateUrl } from '../utils/utils';

let urls = [...urlData];

let people = [
	{
		id: {
			name: 'abc',
			value: '1234354',
		},
		image: 'http://www.test.com',
		name: {
			first: 'John',
			last: 'Doe',
		},
		picture: {
			large: '123',
			medium: '123',
			thumbnail: '123',
		},
		email: 'john@test.com',
		phone: '555-555-5555',
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

	// Handles a GET request to external API
	rest.get('https://randomuser.me/api/?results=3', (req, res, ctx) => {
		return res(ctx.json(people));
	}),
];
