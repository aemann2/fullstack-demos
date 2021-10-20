import React from 'react';
import NewContact from './NewContact';
import { Person } from '../../../types/types';
import { SectionHeader } from '../style';
import { ContactList } from './style';

interface IProps {
	addContact: (id: Person) => Promise<void>;
	newContacts: Person[] | [];
}

const NewContactList: React.FC<IProps> = ({ newContacts, addContact }) => {
	return (
		<div>
			<SectionHeader>People you may know</SectionHeader>
			<ContactList>
				{newContacts.map((person: Person) => (
					<NewContact
						key={person.login.uuid}
						person={person}
						addContact={addContact}
					/>
				))}
			</ContactList>
		</div>
	);
};

export default NewContactList;
