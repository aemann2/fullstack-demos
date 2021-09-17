import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UrlList = () => {
	const [urls, setUrls] = useState<any>([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/shorten/urls/all')
			.then((res) => setUrls(res.data));
	}, []);

	return (
		<div>
			{urls.map((url: any) => (
				<h1>URL: {url.visits}</h1>
			))}
		</div>
	);
};

export default UrlList;
