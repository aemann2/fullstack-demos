import React from 'react';
import { Person } from '../../../types/types';
import { ContactCard, ActionButton } from './style';

interface IProps {
	person: Person;
	addContact: (id: Person) => void;
}

const NewContact: React.FC<IProps> = ({ person, addContact }) => {
	const { picture, name, email, phone } = person;

	return (
		<ContactCard>
			<img src={picture.medium} alt={`${name.first} ${name.last}`} />
			<h2>
				{name.first} {name.last}
			</h2>
			<p>{email}</p>
			<p>{phone}</p>
			<ActionButton primary onClick={() => addContact(person)}>
				Add Contact
			</ActionButton>
		</ContactCard>
	);
};

export default NewContact;
