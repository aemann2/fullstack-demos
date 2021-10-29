import React from 'react';
import MenuItem from './MenuItem';
import axios from 'axios';
import { Item } from '../../../types/types';

interface IProps {
	menu: Item[];
	removeMenuItem: (id: string) => void;
	getMenuItems: () => void;
}

const Menu = ({ menu, removeMenuItem, getMenuItems }: IProps) => {
	const deleteItem = async (id: string) => {
		try {
			await axios.delete('https://fullstack-demos.herokuapp.com/items', {
				data: { id },
			});
			removeMenuItem(id);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div>
			{menu.map((item: Item) => {
				return (
					<MenuItem
						key={item._id}
						item={item}
						removeMenuItem={removeMenuItem}
						getMenuItems={getMenuItems}
						deleteItem={deleteItem}
					/>
				);
			})}
		</div>
	);
};

export default Menu;
