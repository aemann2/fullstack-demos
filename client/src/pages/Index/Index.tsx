import React from 'react';
import {
	IndexPage,
	Title,
	Subtitle,
	CardWrapper,
	CardHeader,
	CardBody,
} from './style';
import WindowCard from '../../components/Index/WindowCard/WindowCard';
import test from './assets/testImg.png';
import menuManager from './assets/menuManager.png';
import contactList from './assets/contactList.png';
import urlShortener from './assets/urlShortener.png';

const Index = () => {
	return (
		<IndexPage>
			<Title>Full Stack Demos</Title>
			<Subtitle>Applications for the purpose of learning</Subtitle>
			<CardWrapper>
				<WindowCard
					image={menuManager}
					alt={'Menu Manager'}
					url={'/menuManager'}
				>
					<CardHeader>Menu Manager</CardHeader>
					<CardBody>An interface to manage items on a fictional menu.</CardBody>
				</WindowCard>
				<WindowCard
					image={contactList}
					alt={'Contact List'}
					url={'contactList'}
				>
					<CardHeader>Contact List</CardHeader>
					<CardBody>
						See a list of contacts and add them to a persistent contact list.
					</CardBody>
				</WindowCard>
				<WindowCard
					image={urlShortener}
					alt={'URL Shortener'}
					url={'urlShortener'}
				>
					<CardHeader>URL Shortener</CardHeader>
					<CardBody>
						Long URL? Make it short! With a list of all URLs that have been
						shortened.
					</CardBody>
				</WindowCard>
			</CardWrapper>
		</IndexPage>
	);
};

export default Index;
