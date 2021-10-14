import React from 'react';
import { ComponentWrapper, Subtitle, LinksContainer, LinkGroup } from './style';
import { Url } from '../../../types/types';

interface IProps {
	urls: Url[] | [];
}

const UrlList: React.FC<IProps> = ({ urls }) => {
	// const [open, setOpen] = useState(false);

	return (
		<ComponentWrapper>
			<Subtitle>Link History</Subtitle>
			<LinksContainer>
				<div>
					{urls.map(({ urlId, shortUrl, urlName, visits }: Url) => (
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
