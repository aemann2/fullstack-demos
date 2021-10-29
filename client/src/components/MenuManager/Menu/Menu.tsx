import React from 'react';
import MenuItem from './MenuItem';
import { Item } from '../../../types/types';

interface IProps {
	menu: Item[];
	removeMenuItem: (id: string) => void;
}

const Menu = ({ menu, removeMenuItem }: IProps) => {
	return (
		<div>
			{menu.map((item: Item) => {
				return (
					<MenuItem
						key={item._id}
						item={item}
						removeMenuItem={removeMenuItem}
					/>
				);
			})}
		</div>
	);
};

export default Menu;
