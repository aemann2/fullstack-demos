import React from 'react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';
import styled from 'styled-components';

interface IProps {
	className?: string;
	history: History;
}

const BackButton = styled.a`
	display: flex;
	justify-content: flex-start;
`;

const Back: React.FC<IProps> = ({ history, children, className }) => {
	return (
		<>
			<BackButton onClick={() => history.goBack()} className={className}>
				{children}
			</BackButton>
		</>
	);
};

export default withRouter(Back);
