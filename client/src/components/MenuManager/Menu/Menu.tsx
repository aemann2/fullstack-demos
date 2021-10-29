import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ menu, removeMenuItem }: any) => {
	return (
		<div>
			{menu.map((item: any) => {
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
