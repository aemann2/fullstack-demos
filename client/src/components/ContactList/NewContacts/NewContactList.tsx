import React from 'react';
import NewContact from './NewContact';
import { Person } from '../../../types/types';
interface IProps {
	addContact: (id: string) => void;
	people: Person[] | [];
}

const NewContactList: React.FC<IProps> = ({ people, addContact }) => {
	return (
		<div>
			{people.map((person: Person) => (
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
