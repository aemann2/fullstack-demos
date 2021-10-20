import styled from 'styled-components';

interface IProps {
	children: JSX.Element[];
}

const ModalWindow = styled.div`
	position: fixed;
	top: 20vh;
	left: 5%;
	width: 90%;
	background-color: white;
	padding: 1rem;
	border-radius: 14px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	z-index: 30;
	animation: slide-down 300ms ease-out forwards;
`;

const Modal: React.FC<IProps> = ({ children }) => (
	// This portal takes us through to the top node of the DOM. If I wanted to, I could actually do createPortal here and just not have a Portal component. But I like having that component, so I'm going to leave it like this
	<ModalWindow>
		<div>{children}</div>
	</ModalWindow>
);
export default Modal;
