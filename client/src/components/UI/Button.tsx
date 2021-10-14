import React from 'react';
import styled from 'styled-components';

interface IProps {
	className?: string;
	name?: string;
	type?: string;
	onClick?: any;
	primary?: boolean;
}

const MainButton = styled.button<IProps>`
	border-radius: 10px;
	border: none;
	font-size: 1.3rem;
	padding: 1.2rem 1rem;
	background-color: ${({ primary }) => (primary ? '#174168' : '#F43A3A')};
	color: ${({ primary }) => (primary ? 'white' : 'black')};
	/* background-color: var(--color-button);
	color: var(--color-background);
	/* border: none; */
`;

const Button: React.FC<IProps> = ({
	children,
	className,
	onClick,
	primary,
}) => {
	return (
		<>
			<MainButton primary={primary} onClick={onClick} className={className}>
				{children}
			</MainButton>
		</>
	);
};

export default Button;
