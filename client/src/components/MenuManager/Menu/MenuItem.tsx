import React, { useState } from 'react';
import axios from 'axios';
import { MenuItemWrapper, ActionButton } from './style';
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
	const [itemName, setItemName] = useState(name);
	const [itemPrice, setItemPrice] = useState(price);
	const [itemDescription, setItemDescription] = useState(description);
	const [isUpdating, setIsUpdating] = useState(false);

	const handleDelete = (id: string) => {
		removeMenuItem(id);
		deleteItem(id);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		setter: React.Dispatch<React.SetStateAction<string>>
	) => {
		setter(e.target.value);
	};

	const handleModifyEnd = async () => {
		try {
			await axios.put('https://fullstack-demos.herokuapp.com/items', {
				id: id,
				name: itemName,
				price: itemPrice,
				description: itemDescription,
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
				<div>
					<input
						onChange={(e) => handleChange(e, setItemName)}
						value={itemName}
					></input>
					<input
						onChange={(e) => handleChange(e, setItemPrice)}
						value={itemPrice}
					></input>
					<input
						onChange={(e) => handleChange(e, setItemDescription)}
						value={itemDescription}
					></input>
				</div>
			) : (
				<div className='item__left'>
					<h2 className='itemText'>{itemName}</h2>
					<h2 className='itemText'>${itemPrice}</h2>
					<h2 className='itemText'>{itemDescription}</h2>
				</div>
			)}
			<div className='item__right'>
				<div className='buttons'>
					{isUpdating ? (
						<ActionButton className='--space' primary onClick={handleModifyEnd}>
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
				<img className='image' src={imageUrl} alt={itemName} />
			</div>
		</MenuItemWrapper>
	);
};

export default MenuItem;
