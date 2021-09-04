import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	min-height: 100vh;
`;

interface IProps {
	className?: string;
}

const Page: React.FC<IProps> = ({ className, children }) => {
	return <Wrapper className={className}>{children}</Wrapper>;
};

export default Page;
