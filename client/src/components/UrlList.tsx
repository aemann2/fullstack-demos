import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UrlList = () => {
	const [urls, setUrls] = useState<any>([]);

	useEffect(() => {
		axios
			.get('http://fullstack-demos.herokuapp.com/shorten/urls/all')
			.then((res) => setUrls(res.data));
	}, []);

	return (
		<div>
			{urls.map((url: any) => (
				<h1 key={url.urlId}>URL: {url.shortUrl}</h1>
			))}
		</div>
	);
};

export default UrlList;
