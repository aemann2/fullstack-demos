import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Url } from '../types/types';

const ComponentWrapper = styled.div`
	margin: 0 auto;
`;

const Subtitle = styled.h2`
	color: var(--color-text);
	font-size: 1.5rem;
	@media (min-width: 500px) {
		font-size: var(--h2-desktop);
		margin-bottom: 3rem;
	}
`;

const Triangle = styled.span`
	font-size: 1.2rem;
	margin-left: 0.2rem;
`;

const LinksContainer = styled.div`
	color: var(--color-text);
	margin-top: 1rem;
	overflow-y: scroll;
	height: 150px;

	@media (min-width: 500px) {
		height: 250px;
	}
`;

const LinkGroup = styled.div`
	margin-bottom: 1rem;
	p {
		font-size: 1.2rem;
	}
	@media (min-width: 500px) {
		p {
			font-size: 1.5rem;
		}
	}
`;

const UrlList = () => {
	const [urls, setUrls] = useState<Url[] | []>([]);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		axios
			.get('https://fullstack-demos.herokuapp.com/shorten/urls/all')
			.then((res) => setUrls(res.data));
	}, []);

	console.log(urls);
	const handleClick = () => {
		setOpen((prevState) => !prevState);
	};

	return (
		<ComponentWrapper>
			<Subtitle onClick={handleClick}>
				Link History <Triangle>{open ? '▼' : '▲'}</Triangle>
			</Subtitle>
			<LinksContainer>
				<div>
					{open &&
						urls.map(({ urlId, shortUrl, urlName, visits }: Url) => (
							<LinkGroup key={urlId}>
								<p>
									<a href={shortUrl}>{urlName}</a>
								</p>
								<p>Visits: {visits}</p>
							</LinkGroup>
						))}
				</div>
			</LinksContainer>
		</ComponentWrapper>
	);
};

export default UrlList;
