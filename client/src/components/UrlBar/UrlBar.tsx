import React, { useState } from 'react';
import axios from 'axios';
import { UrlInput, NameInput, UrlButton } from './style';
import { validateUrl } from '../../utils/utils';

interface IProps {
	getUrls: () => void;
}

const UrlBar: React.FC<IProps> = ({ getUrls }) => {
	const [urlInput, setUrlInput] = useState('');
	const [nameInput, setNameInput] = useState('');
	const [error, setError] = useState<boolean | string>(false);

	const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUrlInput(e.target.value);
	};

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNameInput(e.target.value);
	};

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		if (!nameInput) {
			setError('Please name your URL');
		} else if (!validateUrl(urlInput)) {
			setError('Invalid Input');
		} else {
			setError(false);
			await axios.post('https://fullstack-demos.herokuapp.com/shorten', {
				longUrl: urlInput,
				urlName: nameInput,
			});
			setUrlInput('');
			setNameInput('');
			getUrls();
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