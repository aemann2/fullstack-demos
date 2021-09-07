import React from 'react';
import Window from '../components/Window';
import Page from '../components/Page';
import styled from 'styled-components';

const IndexPage = styled(Page)`
	background-color: black;
`;

const Index = () => {
	return (
		<IndexPage>
			<Window image={'test'} alt={'test'}>
				Testing
			</Window>
			<Window image={'test'} alt={'test'}>
				Testing
			</Window>
			<Window image={'test'} alt={'test'}>
				Testing
			</Window>
		</IndexPage>
	);
};

export default Index;
