import styled from 'styled-components';
import Button from '../../UI/Button';

export const ContactList = styled.div`
	display: flex;
	width: 300px;
	overflow-x: scroll;

	@media (min-width: 400px) {
		width: 350px;
	}

	@media (min-width: 520px) {
		width: 500px;
	}
`;

export const ContactCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 200px;
	padding: 1rem;
	margin-bottom: 2rem;
	margin-right: 2rem;
	background-color: white;
	border-radius: 10px;
`;

export const ActionButton = styled(Button)`
	font-size: 0.8rem;
	padding: 0.8rem 0.5rem;
	background-color: var(--color-background);
	color: white;
`;
