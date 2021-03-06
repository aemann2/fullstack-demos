import React from 'react';
import { ComponentWrapper, Subtitle, LinksContainer, LinkGroup } from './style';
import { Url } from '../../../types/types';

interface IProps {
	urls: Url[] | null;
}

const UrlList: React.FC<IProps> = ({ urls }) => {
	return (
		<ComponentWrapper>
			<Subtitle>Link History</Subtitle>
			<LinksContainer>
				<div>
					{urls ? (
						urls.map(({ urlId, shortUrl, urlName, visits }: Url) => (
							<LinkGroup key={urlId}>
								<p>
									<a href={shortUrl}>{urlName}</a>
								</p>
								<p>Visits: {visits}</p>
							</LinkGroup>
						))
					) : (
						<p>Loading</p>
					)}
				</div>
			</LinksContainer>
		</ComponentWrapper>
	);
};

export default UrlList;
