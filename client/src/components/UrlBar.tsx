import React, { useState } from 'react';
import axios from 'axios';
import validateUrl from '../utils/utils';

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
			axios.post('http://localhost:5000/shorten', {
				longUrl: input,
			});
			setInput('');
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='urlInput'
					id='urlInput'
					placeholder='Enter long URL here...'
					onChange={handleChange}
					value={input}
				/>
				<button name='button' type='submit'>
					Shorten!
				</button>
				{error && <label htmlFor='urlInput'>Invalid Input</label>}
			</form>
		</div>
	);
};

export default UrlBar;
