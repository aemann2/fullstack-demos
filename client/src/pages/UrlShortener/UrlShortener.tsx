import { useEffect, useState } from 'react';
import { SectionPage } from './style';
import PageTitle from '../../components/UI/PageTitle';
import Back from '../../components/UI/Back';
import axios from 'axios';
import UrlInput from '../../components/UrlShortener/UrlInput/UrlInput';
import UrlList from '../../components/UrlShortener/UrlList/UrlList';
import { Url } from '../../types/types';

const UrlShortener = () => {
	const [urls, setUrls] = useState<Url[] | []>([]);

	const getUrls = async () => {
		try {
			const res = await axios.get(
				'https://fullstack-demos.herokuapp.com/shorten/urls/all'
			);
			setUrls(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUrls();
	}, []);

	return (
		<SectionPage>
			<Back href='/'>Go Back</Back>
			<PageTitle>URL Shortener</PageTitle>
			<UrlInput getUrls={getUrls} />
			<UrlList urls={urls} />
		</SectionPage>
	);
};

export default UrlShortener;
