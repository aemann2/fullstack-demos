import React, { useState } from 'react';
import axios from 'axios';
import { Input, TextArea, MenuItemWrapper, ActionButton } from './style';
import { Item } from '../../../types/types';
interface IProps {
	item: Item;
	removeMenuItem: (id: string) => void;
	getMenuItems: () => void;
	deleteItem: (id: string) => void;
}

const MenuItem = ({
	item,
	removeMenuItem,
	getMenuItems,
	deleteItem,
}: IProps) => {
	const { _id: id, name, price, description, imageUrl } = item;
	const [isUpdating, setIsUpdating] = useState(false);
	const [newItem, setNewItem] = useState({
		newName: name,
		newPrice: price,
		newDescription: description,
	});
	const { newName, newPrice, newDescription } = newItem;

	const handleDelete = (id: string) => {
		removeMenuItem(id);
		deleteItem(id);
	};

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setNewItem({
			...newItem,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await axios.put('https://fullstack-demos.herokuapp.com/items', {
				id: id,
				name: newName,
				price: newPrice,
				description: newDescription,
			});
			setIsUpdating((prevState) => !prevState);
			await getMenuItems();
		} catch (err) {
			console.log(err);
		}
	};

	const handleModifyBegin = () => {
		setIsUpdating((prevState) => !prevState);
	};

	return (
		<MenuItemWrapper>
			{isUpdating ? (
				<form onSubmit={handleSubmit}>
					<Input
						onChange={(e) => handleChange(e)}
						maxLength={30}
						name='newName'
						value={newName}
					></Input>
					<Input
						type='number'
						name='newPrice'
						min='0.00'
						max='10000.00'
						step='0.01'
						maxLength={4}
						onChange={(e) => handleChange(e)}
						value={newPrice}
					></Input>
					<TextArea
						onChange={(e) => handleChange(e)}
						name='newDescription'
						value={newDescription}
						maxLength={75}
					></TextArea>
				</form>
			) : (
				<div className='item__left'>
					<h2 className='itemText'>{newName}</h2>
					<h2 className='itemText'>Price: ${newPrice}</h2>
					<h2 className='itemText'>Description: {newDescription}</h2>
				</div>
			)}
			<div className='item__right'>
				<div className='buttons'>
					{isUpdating ? (
						<ActionButton className='--space' primary onClick={handleSubmit}>
							Done
						</ActionButton>
					) : (
						<ActionButton
							className='--space'
							primary
							onClick={handleModifyBegin}
						>
							Modify
						</ActionButton>
					)}
					<ActionButton className='--space' onClick={() => handleDelete(id!)}>
						Delete
					</ActionButton>
				</div>
				<img className='image' src={imageUrl} alt={newName} />
			</div>
		</MenuItemWrapper>
	);
};

export default MenuItem;
