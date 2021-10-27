import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ menu }: any) => {
	return (
		<div>
			{menu.map((item: any, index: number) => {
				return <MenuItem key={index} item={item} />;
			})}
		</div>
	);
};

export default Menu;
