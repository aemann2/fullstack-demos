import styled from 'styled-components';
import Page from '../../components/UI/Page';

export const SectionPage = styled(Page)`
	background-color: var(--color-background);
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (min-width: 1250px) {
		display: block;
		position: relative;
	}
`;

export const ContentWrapper = styled.div`
	@media (min-width: 1250px) {
		display: flex;
		justify-content: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		.page__left {
			margin-right: 2rem;
		}
	}
`;
