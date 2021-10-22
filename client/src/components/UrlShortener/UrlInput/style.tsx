import styled from 'styled-components';
import Button from '../../UI/Button';

export const InputWrapper = styled.input`
	display: block;
	margin: 0 auto 2rem auto;
	background: transparent;
	border: none;
	width: 200px;
	padding: 0.5rem;
	color: #fff;
	opacity: 0.8;
	font-size: 0.8rem;
	border-bottom: 2px solid var(--color-text);

	::placeholder {
		font-size: 1.1rem;
		color: var(--color-placeholder);
	}

	@media (min-width: 500px) {
		width: clamp(400px, 50vw, 600px);
		font-size: 2rem;

		::placeholder {
			font-size: 1.5rem;
		}
	}
`;

export const NameInput = styled(InputWrapper)`
	margin-bottom: 2rem;
`;

export const UrlButton = styled(Button)`
	padding: 1rem;
	font-size: 1.5rem;
	border-radius: 12px;
	display: block;
	margin: 0 auto 2rem auto;
	background-color: var(--color-button);

	@media (min-width: 500px) {
		font-size: 2rem;
	}
`;
