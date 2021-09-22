import styled from 'styled-components';
import Page from '../../components/UI/Page';

export const IndexPage = styled(Page)`
	background-color: var(--color-background);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Title = styled.h1`
	color: var(--color-text);
	font-size: var(--h1-mobile);
	text-align: center;
	margin-bottom: 0.5rem;
	@media (min-width: 1100px) {
		order: 1;
		margin-top: 3rem;
		font-size: var(--h1-desktop);
	}
`;

export const Subtitle = styled.h2`
	color: var(--color-text);
	text-align: center;
	font-size: var(--h2-mobile);
	@media (min-width: 1100px) {
		order: 3;
		font-size: var(--h2-desktop);
		margin-bottom: 3rem;
	}
`;

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 3rem;
	padding: 0 2rem;
	@media (min-width: 1100px) {
		flex-direction: row;
		margin-top: 3rem;
		justify-content: space-evenly;
		order: 2;
	}
`;

export const CardHeader = styled.h3`
	font-weight: bold;
	font-size: 1.3rem;
	text-align: center;
	margin-bottom: 0.6rem;
	color: black;
`;

export const CardBody = styled.p`
	line-height: 1.2em;
	min-height: 60px;
	color: black;
`;
