import React from 'react';
import styled from 'styled-components';

interface IProps {
	image: string;
	alt: string;
}

const Wrapper = styled.div`
	width: clamp(300px, 40vw, 600px);
	height: 250px;
	border-radius: 12px;
	margin-bottom: 2rem;
	@media (min-width: 400px) {
	}
`;

const Image = styled.img`
	max-width: 100%;
	max-height: 100%;
	border-radius: 12px 12px 0 0;
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
