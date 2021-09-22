import React from 'react';
import styled from 'styled-components';
import Page from '../components/UI/Page';
import UrlBar from '../components/UrlBar';
import UrlList from '../components/UrlList';

const SectionPage = styled(Page)`
	background-color: var(--color-background);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const PageTitle = styled.h1`
	color: var(--color-text);
	font-size: var(--h1-mobile);
	margin-top: 1rem;
	text-align: center;
	@media (min-width: 500px) {
		font-size: var(--h1-desktop);
	}
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
