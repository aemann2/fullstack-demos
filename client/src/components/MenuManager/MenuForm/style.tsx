import styled from 'styled-components';
import Button from '../../UI/Button';

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const InputWrapper = styled.input`
	display: block;
	margin: 0 0 2rem 0;
	background: transparent;
	border: none;
	width: 200px;
	padding: 0.5rem 0rem;
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

export const FormTitle = styled.h2`
	font-size: 1.2rem;
	margin: 0 0 1rem 0;
	color: var(--color-text);
`;

export const TextArea = styled.textarea`
	height: 100px;
	width: 100%;
`;

export const Label = styled.label`
	display: block;
	color: var(--color-placeholder);
	opacity: 0.8;
	font-size: 1.1rem;
	margin-bottom: 0.5rem;

	@media (min-width: 500px) {
		width: clamp(400px, 50vw, 600px);
		font-size: 2rem;
	}
`;

export const SubmitButton = styled(Button)`
	padding: 1rem;
	font-size: 1.5rem;
	border-radius: 12px;
	display: block;
	margin: 2rem auto;
	background-color: var(--color-button);

	@media (min-width: 500px) {
		font-size: 2rem;
	}
`;
