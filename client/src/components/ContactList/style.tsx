import styled from 'styled-components';

export const SectionHeader = styled.h2`
	color: var(--color-text);
	font-size: 1.3rem;
	margin: 2rem 0;
	text-align: center;
`;

export const Cards = styled.div`
	height: 575px;
	width: 700px;
	overflow: scroll;
	background-color: white;
	border-radius: 10px;
	-webkit-box-shadow: 2px 2px 0px 1px rgba(0, 0, 0, 0.2);
	box-shadow: 2px 2px 0px 1px rgba(0, 0, 0, 0.2);

	&::-webkit-scrollbar {
		display: none;
	}
`;
