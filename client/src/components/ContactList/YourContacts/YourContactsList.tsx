import React from 'react';
import axios from 'axios';
import { Person } from '../../../types/types';
import YourContact from './YourContact';

interface IProps {
	yourContacts: Person[] | [];
	removeContact: (id: string) => void;
}

const YourContactsList: React.FC<IProps> = ({
	removeContact,
	yourContacts,
}) => {
	const deleteContact = async (id: string) => {
		try {
			await axios.delete('https://fullstack-demos.herokuapp.com/contacts', {
				data: { id },
			});
			removeContact(id);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<h1>Your Contacts</h1>
			{yourContacts.map((contact) => (
				<YourContact
					key={contact._id}
					contact={contact}
					deleteContact={deleteContact}
				/>
			))}
		</div>
	);
};

export default YourContactsList;
