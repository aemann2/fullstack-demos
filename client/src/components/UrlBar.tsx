import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from './UI/Button';
import { validateUrl } from '../utils/utils';

const UrlInput = styled.input`
	display: block;
	margin: 0 auto 1rem auto;
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

		::placeholder {
			font-size: 1.5rem;
		}
	}
`;

const UrlButton = styled(Button)`
	padding: 1rem;
	font-size: 1.5rem;
	border-radius: 12px;
	display: block;
	margin: 0 auto;

	@media (min-width: 500px) {
		font-size: 2rem;
	}
`;

const UrlBar = () => {
	const [input, setInput] = useState('');
	const [error, setError] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		if (!validateUrl(input)) {
			setError(true);
		} else {
			setError(false);
			axios.post('https://fullstack-demos.herokuapp.com/shorten', {
				longUrl: input,
			});
			setInput('');
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<UrlInput
					type='text'
					name='urlInput'
					id='urlInput'
					placeholder='Enter long URL here...'
					onChange={handleChange}
					value={input}
				/>
				<UrlButton name='button' type='submit'>
					Shorten!
				</UrlButton>
				{error && <label htmlFor='urlInput'>Invalid Input</label>}
			</form>
		</div>
	);
};

export default UrlBar;
