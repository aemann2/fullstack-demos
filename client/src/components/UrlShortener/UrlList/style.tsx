import styled from 'styled-components';

export const ComponentWrapper = styled.div`
	margin: 0 auto;
`;

export const Subtitle = styled.h2`
	color: var(--color-text);
	font-size: 1.5rem;
	@media (min-width: 500px) {
		font-size: var(--h2-desktop);
		margin-bottom: 3rem;
	}
`;

export const Triangle = styled.span`
	font-size: 1.2rem;
	margin-left: 0.2rem;
`;

export const LinksContainer = styled.div`
	color: var(--color-text);
	margin-top: 1rem;
	overflow-y: auto;
	height: 150px;

	p {
		font-size: 2rem;
	}

	@media (min-width: 500px) {
		height: 250px;
	}
`;

export const LinkGroup = styled.div`
	margin-bottom: 1rem;
	p {
		font-size: 1.2rem;
	}
	@media (min-width: 500px) {
		p {
			font-size: 1.5rem;
		}
	}
`;
