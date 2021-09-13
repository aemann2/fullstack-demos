import React from 'react';
import WindowCard from '../components/WindowCard';
import Page from '../components/Page';
import styled from 'styled-components';
import test from '../components/assets/testImg.png';

const IndexPage = styled(Page)`
	background-color: var(--color-background);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Title = styled.h1`
	color: var(--color-text);
	font-size: 2.5rem;
	font-weight: 500;
	text-align: center;
	margin-bottom: 0.5rem;
	@media (min-width: 1100px) {
		order: 1;
		margin-top: 3rem;
		font-size: 4rem;
	}
`;

const Subtitle = styled.h2`
	color: var(--color-text);
	text-align: center;
	font-size: 1.2rem;
	font-weight: 400;
	@media (min-width: 1100px) {
		order: 3;
		font-size: 3rem;
		margin-bottom: 3rem;
	}
`;

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 3rem;
	padding: 0 2rem;
	@media (min-width: 1100px) {
		flex-direction: row;
		margin-top: 3rem;
		justify-content: space-evenly;
		order: 2;
	}
`;

const CardHeader = styled.h3`
	font-weight: bold;
	font-size: 1.3rem;
	text-align: center;
	margin-bottom: 0.6rem;
`;

const CardBody = styled.p`
	line-height: 1.2em;
	min-height: 60px;
`;

const Index = () => {
	return (
		<IndexPage>
			<Title>Backend Demos</Title>
			<Subtitle>Applications for the purpose of learning</Subtitle>
			<CardWrapper>
				<WindowCard image={test} alt={'test'} url={'/menuManager'}>
					<CardHeader>Menu Manager</CardHeader>
					<CardBody>
						An interface to manage items on a restaurant menu.
					</CardBody>
				</WindowCard>
				<WindowCard image={test} alt={'test'} url={'contactList'}>
					<CardHeader>Contact List</CardHeader>
					<CardBody>
						See a list of contacts and add them to a persistent contact list.
					</CardBody>
				</WindowCard>
				<WindowCard image={test} alt={'test'} url={'urlShortener'}>
					<CardHeader>URL Shortener</CardHeader>
					<CardBody>
						Long URL? Make it short! With a list of all URLs you've shortened.
					</CardBody>
				</WindowCard>
			</CardWrapper>
		</IndexPage>
	);
};

export default Index;
