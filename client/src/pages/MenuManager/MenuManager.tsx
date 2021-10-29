import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from '../../components/MenuManager/Menu/Menu';
import MenuForm from '../../components/MenuManager/MenuForm/MenuForm';
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

	useEffect(() => {
		getMenuItems();
	}, []);

	return (
		<div>
			<h1>Menu manager...coming soon!</h1>
			<MenuForm />
			<Menu menu={menu} removeMenuItem={removeMenuItem} />
		</div>
	);
};

export default MenuManager;
