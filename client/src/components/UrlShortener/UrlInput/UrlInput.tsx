import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InputWrapper, NameInput, UrlButton } from './style';
import { validateUrl } from '../../../utils/utils';

interface IProps {
	getUrls: () => void;
	toggleModal: () => void;
	getURLForModal: (url: string) => void;
}

const UrlInput: React.FC<IProps> = ({
	getUrls,
	toggleModal,
	getURLForModal,
}) => {
	const [urlInput, setUrlInput] = useState('');
	const [nameInput, setNameInput] = useState('');
	const [error, setError] = useState<boolean | string>(false);

	useEffect(() => {
		// Cleanup fixes React testing error: "Can't perform a React state update on an unmounted component"
		return () => {
			setUrlInput('');
		};
	}, []);

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
			setError('Invalid Input -- must include http://');
		} else {
			setError(false);
			await axios
				.post('https://fullstack-demos.herokuapp.com/shorten', {
					longUrl: urlInput,
					urlName: nameInput,
				})
				.then((res) => getURLForModal(res.data.shortUrl));
			toggleModal();
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
				<InputWrapper
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
				{error && (
					<label
						style={{ color: 'red', display: 'block', textAlign: 'center' }}
						htmlFor='urlInput'
					>
						{error}
					</label>
				)}
			</form>
		</div>
	);
};

export default UrlInput;
