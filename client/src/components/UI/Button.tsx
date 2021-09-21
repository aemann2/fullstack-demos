import React from 'react';
import styled from 'styled-components';

interface IProps {
	className?: string;
	name?: string;
	type?: string;
}

const MainButton = styled.button`
	background-color: var(--color-button);
	color: var(--color-background);
	border: none;
`;

const Button: React.FC<IProps> = ({ children, className }) => {
	return (
		<>
			<MainButton className={className}>{children}</MainButton>
		</>
	);
};

export default Button;
