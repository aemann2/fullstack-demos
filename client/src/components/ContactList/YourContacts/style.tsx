import styled from 'styled-components';
import Button from '../../UI/Button';

export const ActionButton = styled(Button)`
	font-size: 0.8rem;
	padding: 0.8rem 0.5rem;
	background-color: ${({ primary }) => (primary ? '#174168' : '#F43A3A')};
	color: ${({ primary }) => (primary ? 'white' : 'black')};
`;

export const Cards = styled.div`
	height: 575px;
	width: clamp(275px, 80vw, 500px);
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

	.imageWrapper {
		flex: 1;
		img {
			width: 100%;
			border-radius: 50%;
			margin: 0rem 1rem;
		}
		margin-right: 1rem;
	}

	.buttons {
		display: flex;
		justify-content: center;
	}

	.mainContent {
		flex: 2;
	}

	.text-wrapper {
		margin: 1rem 0.8rem;
	}

	h2 {
		font-size: 1rem;
	}

	p {
		font-size: 0.7rem;
	}

	:not(:last-child) {
		padding-bottom: 1rem;
		border-bottom: 1px solid silver;
	}

	.--space {
		margin: 0 0.5rem;
		width: 50%;
	}

	@media (min-width: 400px) {
		h2 {
			font-size: clamp(1rem, 4vw, 2.2rem);
		}
		p {
			font-size: clamp(0.7rem, 2vw, 1.5rem);
		}
	}
`;
