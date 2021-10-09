import React from 'react';
import NewContact from './NewContact';
import { Person } from '../../../types/types';
interface IProps {
	addContact: (id: Person) => Promise<void>;
	newContacts: Person[] | [];
}

const NewContactList: React.FC<IProps> = ({ newContacts, addContact }) => {
	return (
		<div>
			{newContacts.map((person: Person) => (
				<NewContact
					key={person.login.uuid}
					person={person}
					addContact={addContact}
				/>
			))}
		</div>
	);
};

export default NewContactList;
