import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	min-height: 100vh;
	min-width: 320px;
	padding: 2rem 2rem;
	background-color: var(--color-background);
`;

interface IProps {
	className?: string;
}

const Page: React.FC<IProps> = ({ className, children }) => {
	return <Wrapper className={className}>{children}</Wrapper>;
};

export default Page;
