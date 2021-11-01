import React, { useState } from 'react';
import axios from 'axios';
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
	// const [image, setImage] = useState('');
	const [itemName, setItemName] = useState(name);
	const [itemPrice, setItemPrice] = useState(price);
	const [itemDescription, setItemDescription] = useState(description);
	const [isUpdating, setIsUpdating] = useState(false);

	// useEffect(() => {
	// 	const getImage = async () => {
	// 		// custom google image search. see here: https://stackoverflow.com/questions/34035422/google-image-search-says-api-no-longer-available
	// 		const response = await axios.get(
	// 			`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_SEARCH_ENGINE_ID}&q=${name}&searchType=image`
	// 		);
	// 		setImage(response.data.items[0].image.thumbnailLink);
	// 	};
	// 	getImage();
	// }, [name]);

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
					<h2>{itemName}</h2>
					<h2>{itemPrice}</h2>
					<h2>{itemDescription}</h2>
				</div>
			)}

			{isUpdating ? (
				<button onClick={handleModifyEnd}>Done</button>
			) : (
				<button onClick={handleModifyBegin}>Modify</button>
			)}
			<button onClick={() => handleDelete(id!)}>Delete</button>
			<img src={imageUrl} alt={itemName} />
		</>
	);
};

export default MenuItem;
