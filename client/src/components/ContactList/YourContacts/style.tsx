import styled from 'styled-components';

export const SectionHeader = styled.h2`
	color: var(--color-text);
	font-size: 2rem;
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

export const Card = styled.div`
	display: flex;
	align-items: center;

	img {
		height: 7rem;
		border: 1px solid silver;
		border-radius: 50%;
		margin: 1rem 2rem auto 1rem;
	}

	:not(:last-child) {
		border-bottom: 1px solid silver;
	}

	/* &__mainText {
		margin: 0rem 0rem 1rem 1rem;
	}

	&__button {
		margin: 1rem 1rem 0 auto;

		&__mod {
			padding: 0;
			border: none;
			background: none;
			font-size: 3rem;
			color: gray;
		}
	}

	&__grades {
		margin-top: 1rem;
	}

	&__tags {
		margin: 1rem 0;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	} */
`;
