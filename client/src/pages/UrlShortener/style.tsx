import styled from 'styled-components';
import Modal from '../../components/UI/Modal';
import Page from '../../components/UI/Page';

export const SectionPage = styled(Page)`
	background-color: var(--color-background);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const URLModal = styled(Modal)`
	h2 {
		text-align: center;
		margin-bottom: 1rem;
	}

	a {
		font-size: 0.8rem;
		color: black;
		text-overflow: ellipsis;
	}

	button {
		display: block;
		font-size: 1rem;
		padding: 5px 10px;
		margin: 1rem auto 0 auto;
	}

	@media (min-width: 500px) {
		a {
			font-size: 1rem;
		}
	}
`;
