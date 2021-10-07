import React from 'react';
import axios from 'axios';
import { Person } from '../../../types/types';
import YourContact from './YourContact';

interface IProps {
	yourContacts: Person[] | [];
}

const YourContactsList: React.FC<IProps> = ({ yourContacts }) => {
	const deleteContact = async (id: string) => {
		const res = await axios.delete(
			'https://fullstack-demos.herokuapp.com/contacts',
			{ data: { id } }
		);
		console.log(res);
	};

	return (
		<div>
			{yourContacts.map((contact) => (
				<YourContact key={contact._id} contact={contact} />
			))}
		</div>
	);
};

export default YourContactsList;
