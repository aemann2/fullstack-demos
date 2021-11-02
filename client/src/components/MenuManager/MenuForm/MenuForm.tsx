import React, { useState } from 'react';
import { Item } from '../../../types/types';
interface IProps {
	addItem: (item: Item) => void;
}

const MenuForm = ({ addItem }: IProps) => {
	const [item, setItem] = useState({
		name: '',
		price: '',
		description: '',
	});
	const [error, setError] = useState('');
	const { name, price, description } = item;

	const handleChange = (e: any) => {
		setItem({
			...item,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!name) {
			setError('Please enter a name');
			return;
		}
		if (!price) {
			setError('Please enter a price');
			return;
		}
		if (!description) {
			setError('Please enter a description');
			return;
		}
		addItem({
			name,
			price,
			description,
		});
		setItem({
			name: '',
			price: '',
			description: '',
		});
	};

	return (
		<div>
			<h2>Enter a new menu item:</h2>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					type='text'
					name='name'
					placeholder='Item name'
					value={name}
				/>
				<input
					onChange={handleChange}
					type='text'
					name='price'
					placeholder='Item price'
					value={price}
				/>
				<label htmlFor='description'>Item description:</label>
				<textarea
					onChange={handleChange}
					id='description'
					name='description'
					value={description}
				/>
				<button type='submit'>Submit</button>
				{error && (
					<label
						style={{ color: 'red', display: 'block', textAlign: 'center' }}
						htmlFor='name'
					>
						{error}
					</label>
				)}
			</form>
		</div>
	);
};

export default MenuForm;
