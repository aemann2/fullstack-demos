import styled from 'styled-components';
import Page from '../../components/UI/Page';

export const SectionPage = styled(Page)`
	background-color: var(--color-background);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const PageContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
