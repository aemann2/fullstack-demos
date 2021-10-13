import React from 'react';
import styled from 'styled-components';

interface IProps {
	className?: string;
}

const Title = styled.h1`
	color: var(--color-text);
	font-size: var(--h1-mobile);
	margin: 1rem 0;
	text-align: center;
	@media (min-width: 500px) {
		font-size: var(--h1-desktop);
	} ;
`;

const PageTitle: React.FC<IProps> = ({ children, className }) => {
	return (
		<>
			<Title className={className}>{children}</Title>
		</>
	);
};

export default PageTitle;
