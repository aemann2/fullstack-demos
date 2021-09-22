import { useEffect, useState } from 'react';
import axios from 'axios';
import {
	ComponentWrapper,
	Subtitle,
	Triangle,
	LinksContainer,
	LinkGroup,
} from './style';
import { Url } from '../../types/types';

const UrlList = () => {
	const [urls, setUrls] = useState<Url[] | []>([]);
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
