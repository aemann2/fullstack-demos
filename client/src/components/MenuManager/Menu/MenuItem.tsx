import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MenuItem = ({ item, removeMenuItem }: any) => {
	const { _id: id, name, price, description } = item;
	const [image, setImage] = useState('');

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

	const handleDelete: any = (id: string) => {
		removeMenuItem(id);
	};

	return (
		<>
			<h2>{name}</h2>
			<h2>{price}</h2>
			<h2>{description}</h2>
			<button>Modify</button>
			<button onClick={() => handleDelete(id)}>Delete</button>
			<img src={image} alt={name} />
		</>
	);
};

export default MenuItem;
