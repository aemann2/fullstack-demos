import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import UrlBar from '../components/UrlBar';
import UrlList from '../components/UrlList';

const SectionPage = styled(Page)``;

const PageTitle = styled.h1`
	color: var(--color-text);
	font-weight: 400;
`;

const UrlShortener = () => {
	return (
		<SectionPage>
			<PageTitle>URL Shortener</PageTitle>
			<UrlBar />
			<UrlList />
		</SectionPage>
	);
};

export default UrlShortener;
