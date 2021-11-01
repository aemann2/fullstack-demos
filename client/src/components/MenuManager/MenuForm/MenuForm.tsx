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
	const { name, price, description } = item;

	const handleChange = (e: any) => {
		setItem({
			...item,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addItem({
			name,
			price,
			description,
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
				<label>Price:</label>
				<input
					onChange={handleChange}
					type='text'
					name='price'
					placeholder='Item price'
					value={price}
				/>
				<label>Item description:</label>
				<textarea
					onChange={handleChange}
					name='description'
					value={description}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default MenuForm;
