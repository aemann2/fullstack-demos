import styled from 'styled-components';

export const MenuWrapper = styled.div`
	background-color: var(--color-text);
	border-radius: 10px;
	padding: 1rem;
`;

export const MenuItemWrapper = styled.div`
	display: flex;
	justify-content: space-around;
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
`;
