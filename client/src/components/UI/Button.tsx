import React from 'react';
import styled from 'styled-components';

interface IProps {
	className?: string;
	name?: string;
	type?: string;
	onClick?: any;
}

const MainButton = styled.button`
	background-color: var(--color-button);
	color: var(--color-background);
	border: none;
`;

const Button: React.FC<IProps> = ({ children, className, onClick }) => {
	return (
		<>
			<MainButton onClick={onClick} className={className}>
				{children}
			</MainButton>
		</>
	);
};

export default Button;
