import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Image, TextWrapper } from './style';

interface IProps {
	image: string;
	alt: string;
	url: string;
}
const WindowCard: React.FC<IProps> = ({ image, alt, url, children }) => {
	return (
		<Wrapper>
			<Link to={url}>
				<Image src={image} alt={alt} />
				<TextWrapper>
					<div>{children}</div>
				</TextWrapper>
			</Link>
		</Wrapper>
	);
};

export default WindowCard;
