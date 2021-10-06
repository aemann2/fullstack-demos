export interface Url {
	urlId: string;
	shortUrl: string;
	urlName: string;
	visits: number;
}

export interface Person {
	login: {
		uuid: string;
	};
	image: string;
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
