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

const Index = () => {
	return (
		<IndexPage>
			<Title>Backend Demos</Title>
			<Subtitle>Applications for the purpose of learning</Subtitle>
			<div>
				<WindowCard image={test} alt={'test'}>
					Testing
				</WindowCard>
				<WindowCard image={test} alt={'test'}>
					Testing
				</WindowCard>
				<WindowCard image={test} alt={'test'}>
					Testing
				</WindowCard>
			</div>
		</IndexPage>
	);
};

export default Index;
