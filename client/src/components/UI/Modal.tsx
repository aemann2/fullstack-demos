import styled from 'styled-components';

interface IProps {
	children: JSX.Element[];
	className?: string;
}

const ModalWindow = styled.div`
	position: absolute;
	top: 20vh;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	width: 300px;
	background-color: var(--color-text);
	padding: 1rem;
	border-radius: 14px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	z-index: 30;

	@media (min-width: 500px) {
		width: 450px;
	}
`;

const Modal: React.FC<IProps> = ({ className, children }) => (
	<ModalWindow>
		<div className={className}>{children}</div>
	</ModalWindow>
);
export default Modal;
