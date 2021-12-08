import styled from 'styled-components';
import Button from '../../UI/Button';

export const MenuWrapper = styled.div`
	background-color: var(--color-text);
	border-radius: 25px;
	padding: 1rem;
	max-width: 400px;
	margin: auto;

	.loading {
		color: black;
		font-size: 1.5rem;
		text-align: center;
	}

	@media (min-width: 600px) {
		min-width: 500px;
	}

	@media (min-width: 1250px) {
		height: 600px;
		overflow: auto;
	}
`;

export const MenuItemWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	&:not(:last-child) {
		margin-bottom: 2rem;
	}
	.buttons {
		display: flex;
		order: 2;
	}
	.item__left {
		margin: auto 0;
		.itemText {
			font-size: 1rem;
			margin-bottom: 1rem;
		}
	}
	.item__right {
		display: flex;
		flex-direction: column;
	}
	.itemText {
		&:first-child {
			font-weight: 700;
		}
		max-width: 200px;
		font-size: 0.8rem;
	}
	.image {
		width: 100px;
		height: 100px;
		margin: 0 auto 0.5rem auto;
	}

	.--space {
		margin: 0 0.5rem;
		width: 50%;
	}

	@media (min-width: 600px) {
		.item__left {
			.itemText {
				font-size: 1.5rem;
			}
		}
	}
`;

export const Input = styled.input`
	width: 100%;
	height: 2rem;
	border: none;
	padding: 0.5rem;
	margin-bottom: 1rem;
`;

export const TextArea = styled.textarea`
	width: 100%;
	height: 2rem;
	border: none;
	padding: 0.3rem;
	resize: none;
`;

export const ActionButton = styled(Button)`
	font-size: 0.8rem;
	padding: 0.8rem 0.5rem;
	background-color: ${({ primary }) => (primary ? '#174168' : '#F43A3A')};
	color: ${({ primary }) => (primary ? 'white' : 'black')};
`;
