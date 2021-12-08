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

	&:hover {
		opacity: 0.9;
	}
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
