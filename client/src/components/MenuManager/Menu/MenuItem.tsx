import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Item } from '../../../types/types';
interface IProps {
	item: Item;
	removeMenuItem: (id: string) => void;
	getMenuItems: () => void;
}

const MenuItem = ({ item, removeMenuItem, getMenuItems }: IProps) => {
	const { _id: id, name, price, description } = item;
	const [image, setImage] = useState('');
	const [itemName, setItemName] = useState(name);
	const [itemPrice, setItemPrice] = useState(price);
	const [itemDescription, setItemDescription] = useState(description);
	const [isUpdating, setIsUpdating] = useState(false);

	useEffect(() => {
		const getImage = async () => {
			// custom google image search. see here: https://stackoverflow.com/questions/34035422/google-image-search-says-api-no-longer-available
			const response = await axios.get(
				`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_SEARCH_ENGINE_ID}&q=${name}&searchType=image`
			);
			setImage(response.data.items[0].image.thumbnailLink);
		};
		getImage();
	}, [name]);

	const handleDelete = (id: string) => {
		removeMenuItem(id);
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
				name: name,
				price: price,
				description: description,
			});
			await getMenuItems();
			setIsUpdating((prevState) => !prevState);
		} catch (err) {
			console.log(err);
		}
	};

	const handleModifyBegin = () => {
		setIsUpdating((prevState) => !prevState);
	};

	return (
		<>
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
				<div>
					<h2>{name}</h2>
					<h2>{price}</h2>
					<h2>{description}</h2>
				</div>
			)}

			{isUpdating ? (
				<button onClick={handleModifyEnd}>Done</button>
			) : (
				<button onClick={handleModifyBegin}>Modify</button>
			)}
			<button onClick={() => handleDelete(id)}>Delete</button>
			<img src={image} alt={name} />
		</>
	);
};

export default MenuItem;