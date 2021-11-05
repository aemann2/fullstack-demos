import styled from 'styled-components';
import Button from '../../UI/Button';

export const MenuWrapper = styled.div`
	background-color: var(--color-text);
	border-radius: 10px;
	padding: 1rem;
`;

export const MenuItemWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	margin-bottom: 2rem;
	.buttons {
		display: flex;
		order: 2;
	}
	.item__right {
		display: flex;
		flex-direction: column;
	}
	.itemText {
		font-size: 0.8rem;
	}
	.image {
		width: 100px;
		height: 100px;
	}

	.--space {
		margin: 0 0.5rem;
		width: 50%;
	}
`;

export const ActionButton = styled(Button)`
	font-size: 0.8rem;
	padding: 0.8rem 0.5rem;
	background-color: ${({ primary }) => (primary ? '#174168' : '#F43A3A')};
	color: ${({ primary }) => (primary ? 'white' : 'black')};
`;
