import React from 'react';
import WindowCard from '../components/WindowCard';
import Page from '../components/Page';
import styled from 'styled-components';
import test from '../components/assets/testImg.png';

const IndexPage = styled(Page)`
	background-color: var(--color-background);
	display: flex;
	flex-direction: column;
`;

const Title = styled.h1`
	color: var(--color-text);
	font-size: 2.5rem;
	font-weight: 500;
	text-align: center;
	margin-bottom: 0.5rem;
	@media (min-width: 1100px) {
		order: 1;
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
	}
`;

const MainWrapper = styled.div`
	@media (min-width: 1100px) {
		display: flex;
		flex-direction: column;
		order: 2;
		margin: auto 0 auto 0;
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
		margin-top: 0;
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
`;

const Index = () => {
	return (
		<IndexPage>
			<Title>Backend Demos</Title>
			<MainWrapper>
				<Subtitle>Applications for the purpose of learning</Subtitle>
				<CardWrapper>
					<WindowCard image={test} alt={'test'}>
						<CardHeader>Inventory Management</CardHeader>
						<CardBody>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna
						</CardBody>
					</WindowCard>
					<WindowCard image={test} alt={'test'}>
						<CardHeader>Contact List</CardHeader>
						<CardBody>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna
						</CardBody>
					</WindowCard>
					<WindowCard image={test} alt={'test'}>
						<CardHeader>URL Shortener</CardHeader>
						<CardBody>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna
						</CardBody>
					</WindowCard>
				</CardWrapper>
			</MainWrapper>
		</IndexPage>
	);
};

export default Index;
