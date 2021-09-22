import React from 'react';
import { SectionPage, BackButton, PageTitle } from './style';
import UrlBar from '../../components/UrlBar/UrlBar';
import UrlList from '../../components/UrlList/UrlList';

const UrlShortener = () => {
	return (
		<SectionPage>
			<BackButton href='/'>Go Back</BackButton>
			<PageTitle>URL Shortener</PageTitle>
			<UrlBar />
			<UrlList />
		</SectionPage>
	);
};

export default UrlShortener;
