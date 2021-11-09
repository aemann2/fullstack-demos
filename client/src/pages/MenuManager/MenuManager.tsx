import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from '../../components/MenuManager/Menu/Menu';
import MenuForm from '../../components/MenuManager/MenuForm/MenuForm';
import { SectionPage, ContentWrapper } from './style';
import PageTitle from '../../components/UI/PageTitle';
import Back from '../../components/UI/Back';
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
			<Back>Go Back</Back>
			<ContentWrapper>
				<div className='page__left'>
					<PageTitle>Menu manager</PageTitle>
					<MenuForm addItem={addItem} />
				</div>
				<div className='page__right'>
					<Menu
						menu={menu}
						removeMenuItem={removeMenuItem}
						getMenuItems={getMenuItems}
					/>
				</div>
			</ContentWrapper>
		</SectionPage>
	);
};

export default MenuManager;
