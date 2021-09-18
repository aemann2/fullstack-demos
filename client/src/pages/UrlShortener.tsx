import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import UrlBar from '../components/UrlBar';
import UrlList from '../components/UrlList';

const SectionPage = styled(Page)``;

const UrlShortener = () => {
	return (
		<SectionPage>
			<h1>URL Shortener</h1>
			<UrlBar />
			<UrlList />
		</SectionPage>
	);
};

export default UrlShortener;
