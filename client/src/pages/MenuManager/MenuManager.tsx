import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from '../../components/MenuManager/Menu/Menu';
import MenuForm from '../../components/MenuManager/MenuForm/MenuForm';
import { SectionPage } from './style';
import { Item } from '../../types/types';

const MenuManager = () => {
	const [menu, setMenu] = useState<Item[] | []>([]);

	const getMenuItems = async () => {
		try {
			const res = await axios.get(
				'https://fullstack-demos.herokuapp.com/items'
			);
			setMenu(res.data.data);
		} catch (err) {
			console.log(err);
		}
	};

	const removeMenuItem = (id: string) => {
		setMenu((prevState) => {
			return prevState!.filter((item: Item) => item._id !== id);
		});
	};

	const addItem = async (item: Item) => {
		const { name, price, description } = item;
		try {
			await axios.post('https://fullstack-demos.herokuapp.com/items', {
				name: name,
				price: price,
				description: description,
			});
		} catch (err) {
			console.log(err);
		}
		getMenuItems();
	};

	useEffect(() => {
		getMenuItems();
	}, []);

	return (
		<SectionPage>
			<h1>Menu manager...coming soon!</h1>
			<MenuForm addItem={addItem} />
			<Menu
				menu={menu}
				removeMenuItem={removeMenuItem}
				getMenuItems={getMenuItems}
			/>
		</SectionPage>
	);
};

export default MenuManager;
