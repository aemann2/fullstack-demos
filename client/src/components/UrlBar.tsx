import React, { useState } from 'react';

const UrlBar = () => {
	const [input, setInput] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	return (
		<div>
			<form>
				<input type='text' onChange={handleChange} value={input} />
				<button type='submit'>Shorten!</button>
			</form>
		</div>
	);
};

export default UrlBar;
