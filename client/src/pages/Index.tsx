import React from 'react';
import WindowCard from '../components/WindowCard';
import Page from '../components/Page';
import styled from 'styled-components';
import test from '../components/assets/testImg.png';

const IndexPage = styled(Page)`
	background-color: var(--color-background);
`;

const Title = styled.h1`
	color: var(--color-text);
`;

const Subtitle = styled(Title)`
	font-size: 1.2rem;
`;

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 3rem;
	padding: 0 2rem;
`;

const CardHeader = styled.h3`
	font-weight: bold;
`;

const CardBody = styled.p``;

const Index = () => {
	return (
		<IndexPage>
			<Title>Backend Demos</Title>
			<Subtitle>Applications for the purpose of learning</Subtitle>
			<CardWrapper>
				<WindowCard image={test} alt={'test'}>
					<CardHeader>Application name</CardHeader>
					<CardBody>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna
					</CardBody>
				</WindowCard>
				<WindowCard image={test} alt={'test'}>
					<CardHeader>Application name</CardHeader>
					<CardBody>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna
					</CardBody>
				</WindowCard>
				<WindowCard image={test} alt={'test'}>
					<CardHeader>Application name</CardHeader>
					<CardBody>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna
					</CardBody>
				</WindowCard>
			</CardWrapper>
		</IndexPage>
	);
};

export default Index;
