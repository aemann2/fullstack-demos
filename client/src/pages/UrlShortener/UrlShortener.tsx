import { useEffect, useState } from 'react';
import { SectionPage, BackButton, PageTitle } from './style';
import axios from 'axios';
import UrlInput from '../../components/UrlShortener/UrlInput/UrlInput';
import UrlList from '../../components/UrlShortener/UrlList/UrlList';
import { Url } from '../../types/types';

const UrlShortener = () => {
	const [urls, setUrls] = useState<Url[] | []>([]);

	const getUrls = () => {
		axios
			.get('https://fullstack-demos.herokuapp.com/shorten/urls/all')
			.then((res) => setUrls(res.data));
	};

	useEffect(() => {
		getUrls();
	}, []);

	return (
		<SectionPage>
			<BackButton href='/'>Go Back</BackButton>
			<PageTitle>URL Shortener</PageTitle>
			<UrlInput getUrls={getUrls} />
			<UrlList urls={urls} />
		</SectionPage>
	);
};

export default UrlShortener;
