import React, { useState } from 'react';
import {
	ComponentWrapper,
	Subtitle,
	Triangle,
	LinksContainer,
	LinkGroup,
} from './style';
import { Url } from '../../../types/types';

interface IProps {
	urls: Url[] | [];
}

const UrlList: React.FC<IProps> = ({ urls }) => {
	const [open, setOpen] = useState(false);

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
