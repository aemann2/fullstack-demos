import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ComponentWrapper = styled.div`
	margin: 0 auto;
`;

const Subtitle = styled.h2`
	color: var(--color-text);
	font-size: 1.5rem;
	@media (min-width: 1100px) {
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
	height: 250px;
`;

const LinkGroup = styled.div`
	margin-bottom: 1rem;
`;

const UrlList = () => {
	const [urls, setUrls] = useState<any>([]);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		axios
			.get('https://fullstack-demos.herokuapp.com/shorten/urls/all')
			.then((res) => setUrls(res.data));
	}, []);

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
						urls.map((url: any) => (
							<LinkGroup key={url.urlId}>
								<p>
									<a href={url.shortUrl}>{url.urlName}</a>
								</p>
								<p>Visits: {url.visits}</p>
							</LinkGroup>
						))}
				</div>
			</LinksContainer>
		</ComponentWrapper>
	);
};

export default UrlList;
