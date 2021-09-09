import React from 'react';
import styled from 'styled-components';

interface IProps {
	image: string;
	alt: string;
}

const Wrapper = styled.div`
	@media (max-width: 400px) {
		width: 100px;
		height: 250px;
	}
`;

const Image = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

const TextWrapper = styled.div`
	background-color: white;
`;

const WindowCard: React.FC<IProps> = (props) => {
	return (
		<Wrapper>
			<Image src={props.image} alt={props.alt} />
			<TextWrapper>
				<div>{props.children}</div>
			</TextWrapper>
		</Wrapper>
	);
};

export default WindowCard;
