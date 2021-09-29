import styled from 'styled-components';

export const Wrapper = styled.div`
	width: clamp(250px, 40vw, 400px);
	border-radius: 12px;
	margin-bottom: 6rem;
	box-shadow: 6px 9px 60px 8px rgba(255, 222, 173, 0.9);

	&:hover {
		cursor: pointer;
	}

	@media (min-width: 1100px) {
		width: 20vw;
		max-width: 450px;
	}
`;

export const Image = styled.img`
	width: 100%;
	max-height: 100%;
	border-radius: 12px 12px 0 0;
`;

export const TextWrapper = styled.div`
	background-color: white;
	border-radius: 0 0 12px 12px;
	padding: 1rem 2rem;
`;
