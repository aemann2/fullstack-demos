import React from 'react';
import MenuItem from './MenuItem';
import { Item } from '../../../types/types';

interface IProps {
	menu: Item[];
	removeMenuItem: (id: string) => void;
	getMenuItems: () => void;
}

const Menu = ({ menu, removeMenuItem, getMenuItems }: IProps) => {
	return (
		<div>
			{menu.map((item: Item) => {
				return (
					<MenuItem
						key={item._id}
						item={item}
						removeMenuItem={removeMenuItem}
						getMenuItems={getMenuItems}
					/>
				);
			})}
		</div>
	);
};

export default Menu;
