import React from 'react';

const MenuItem = ({ item }: any) => {
	return (
		<div>
			<h2>{item.name}</h2>
			<h2>{item.price}</h2>
			<h2>{item.description}</h2>
			<button>Modify</button>
			<button>Delete</button>
		</div>
	);
};

export default MenuItem;
