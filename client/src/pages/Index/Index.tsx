import React from 'react';
import {
	IndexPage,
	Title,
	Subtitle,
	CardWrapper,
	CardHeader,
	CardBody,
} from './style';
import WindowCard from '../../components/WindowCard/WindowCard';
import test from './assets/testImg.png';

const Index = () => {
	return (
		<IndexPage>
			<Title>Full Stack Demos</Title>
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
