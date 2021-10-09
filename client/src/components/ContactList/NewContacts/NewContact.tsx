import React from 'react';
import Button from '../../UI/Button';
import { Person } from '../../../types/types';

interface IProps {
	person: Person;
	addContact: (id: Person) => void;
}

const NewContact: React.FC<IProps> = ({ person, addContact }) => {
	const { picture, name, email, phone } = person;

	console.log(person);
	return (
		<div>
			<img src={picture.medium} alt={`${name.first} ${name.last}`} />
			<h2>
				{name.first} {name.last}
			</h2>
			<p>{email}</p>
			<p>{phone}</p>
			<Button onClick={() => addContact(person)}>Add Contact</Button>
		</div>
	);
};

export default NewContact;
