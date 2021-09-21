import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from './UI/Button';
import { validateUrl } from '../utils/utils';

const UrlInput = styled.input`
	display: block;
	margin-bottom: 1rem;
	background: transparent;
	border: none;
	width: 200px;
	padding: 0.5rem;
	color: #fff;
	opacity: 0.8;
	font-size: 0.8rem;
	border-bottom: 1px solid var(--color-text);
`;

const UrlButton = styled(Button)`
	padding: 1rem;
	font-size: 3rem;
	border-radius: 20px;
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
