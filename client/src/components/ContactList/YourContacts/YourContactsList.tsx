import React from 'react';
import axios from 'axios';
import { Person } from '../../../types/types';
import YourContact from './YourContact';
import { SectionHeader } from '../style';
import { Cards } from './style';

interface IProps {
	yourContacts: Person[] | [];
	removeContact: (id: string) => void;
	getYourContacts: () => void;
}

const YourContactsList: React.FC<IProps> = ({
	removeContact,
	yourContacts,
	getYourContacts,
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
			<SectionHeader>Your Contacts</SectionHeader>
			<Cards>
				{yourContacts.map((contact) => (
					<YourContact
						key={contact._id}
						contact={contact}
						deleteContact={deleteContact}
						getYourContacts={getYourContacts}
					/>
				))}
			</Cards>
		</div>
	);
};

export default YourContactsList;
