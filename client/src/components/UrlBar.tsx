import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from './UI/Button';
import { validateUrl } from '../utils/utils';

const UrlInput = styled.input`
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

		::placeholder {
			font-size: 1.5rem;
		}
	}
`;

const NameInput = styled(UrlInput)`
	margin-bottom: 2rem;
`;

const UrlButton = styled(Button)`
	padding: 1rem;
	font-size: 1.5rem;
	border-radius: 12px;
	display: block;
	margin: 0 auto 2rem auto;

	@media (min-width: 500px) {
		font-size: 2rem;
	}
`;

const UrlBar = () => {
	const [urlInput, setUrlInput] = useState('');
	const [nameInput, setNameInput] = useState('');
	const [error, setError] = useState<boolean | string>(false);

	const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUrlInput(e.target.value);
	};

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNameInput(e.target.value);
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		if (!nameInput) {
			setError('Please name your URL');
		} else if (!validateUrl(urlInput)) {
			setError('Invalid Input');
		} else {
			setError(false);
			axios.post('https://fullstack-demos.herokuapp.com/shorten', {
				longUrl: urlInput,
				urlName: nameInput,
			});
			setUrlInput('');
			setNameInput('');
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<NameInput
					type='text'
					name='nameInput'
					id='nameInput'
					placeholder='Name your URL...'
					maxLength={20}
					onChange={handleNameChange}
					value={nameInput}
				/>
				<UrlInput
					type='text'
					name='urlInput'
					id='urlInput'
					placeholder='Enter URL here...'
					onChange={handleUrlChange}
					value={urlInput}
				/>
				<UrlButton name='button' type='submit'>
					Shorten!
				</UrlButton>
				{error && <label htmlFor='urlInput'>{error}</label>}
			</form>
		</div>
	);
};

export default UrlBar;
