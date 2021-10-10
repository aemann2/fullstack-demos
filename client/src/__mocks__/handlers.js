import { rest } from 'msw';
import {
	urlData,
	newContacts1,
	newContacts2,
	yourContacts1,
	yourContacts2,
} from './data/data';
import { validateUrl } from '../utils/utils';

let urls = [...urlData];

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
	rest.get('https://randomuser.me/api/', (req, res, ctx) => {
		const query = req.url.searchParams;
		const results = query.get('results');
		if (results === '3') return res(ctx.json(newContacts1));
		return res(ctx.json(newContacts2));
	}),

	// Handles a GET /contacts request
	rest.get(
		'https://fullstack-demos.herokuapp.com/contacts',
		(req, res, ctx) => {
			return res(ctx.json(yourContacts1));
		}
	),
	rest.post(
		'https://fullstack-demos.herokuapp.com/contacts',
		(req, res, ctx) => {
			return res(ctx.json(yourContacts2));
		}
	),
	rest.put(
		'https://fullstack-demos.herokuapp.com/contacts',
		(req, res, ctx) => {
			return res(ctx.json(yourContacts2));
		}
	),
	// Handles a DELETE /contacts request
	rest.delete(
		'https://fullstack-demos.herokuapp.com/contacts',
		(req, res, ctx) => {
			return res(ctx.json('Successfully deleted'));
		}
	),
];
