import styled from 'styled-components';
import Page from '../../components/UI/Page';

export const SectionPage = styled(Page)`
	background-color: var(--color-background);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const BackButton = styled.a``;

export const PageTitle = styled.h1`
	color: var(--color-text);
	font-size: var(--h1-mobile);
	margin: 1rem 0;
	text-align: center;
	@media (min-width: 500px) {
		font-size: var(--h1-desktop);
	}
`;
