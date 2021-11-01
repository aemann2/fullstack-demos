export interface Url {
	urlId: string;
	shortUrl: string;
	urlName: string;
	visits: number;
}

export interface Person {
	_id: string;
	login: {
		uuid: string;
	};
	name: {
		first: string;
		last: string;
	};
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	};
	email: string;
	phone: string;
}

export interface Item {
	_id?: string;
	name: string;
	price: string;
	description: string;
}
