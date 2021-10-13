import React from 'react';
import styled from 'styled-components';

interface IProps {
	className?: string;
	href: string;
}

const BackButton = styled.a`
	display: flex;
	justify-content: flex-start;
`;

const Back: React.FC<IProps> = ({ children, className, href }) => {
	return (
		<>
			<BackButton href={href} className={className}>
				{children}
			</BackButton>
		</>
	);
};

export default Back;
