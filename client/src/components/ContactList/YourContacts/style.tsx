import styled from 'styled-components';
import Button from '../../UI/Button';

export const SectionHeader = styled.h2`
	color: var(--color-text);
	font-size: 2rem;
`;

export const ActionButton = styled(Button)`
	font-size: 0.8rem;
	padding: 0.8rem 0.5rem;
	background-color: ${({ primary }) => (primary ? '#174168' : '#F43A3A')};
	color: ${({ primary }) => (primary ? 'white' : 'black')};
`;

export const Cards = styled.div`
	height: 575px;
	width: clamp(275px, 80vw, 600px);
	margin: 1rem auto;
	overflow: scroll;
	background-color: white;
	border-radius: 10px;
	-webkit-box-shadow: 2px 2px 0px 1px rgba(0, 0, 0, 0.2);
	box-shadow: 2px 2px 0px 1px rgba(0, 0, 0, 0.2);

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const Card = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 1rem 0;

	img {
		height: 5rem;
		border: 1px solid silver;
		border-radius: 50%;
		margin: 1rem 1rem auto 1rem;
	}

	.buttons {
		display: flex;
		justify-content: center;
	}

	.mainContent {
		flex: 1;
	}

	:not(:last-child) {
		padding-bottom: 1rem;
		border-bottom: 1px solid silver;
	}

	.--space {
		margin: 0 0.5rem;
		width: 50%;
	}

	/* &__mainText {
		margin: 0rem 0rem 1rem 1rem;
	}

	&__button {
		margin: 1rem 1rem 0 auto;

		&__mod {
			padding: 0;
			border: none;
			background: none;
			font-size: 3rem;
			color: gray;
		}
	}

	&__grades {
		margin-top: 1rem;
	}

	&__tags {
		margin: 1rem 0;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	} */
`;
