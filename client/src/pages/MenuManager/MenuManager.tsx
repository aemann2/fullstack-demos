import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from '../../components/MenuManager/Menu/Menu';
import MenuForm from '../../components/MenuManager/MenuForm/MenuForm';

const MenuManager = () => {
	const [menu, setMenu] = useState<any | []>([]);

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

	useEffect(() => {
		getMenuItems();
	}, []);

	return (
		<div>
			<h1>Menu manager...coming soon!</h1>
			<MenuForm />
			<Menu menu={menu} />
		</div>
	);
};

export default MenuManager;
