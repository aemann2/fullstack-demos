import React from 'react';
import Button from '../../UI/Button';
import { Person } from '../../../types/types';

interface IProps {
	person: Person;
}

const NewContact: React.FC<IProps> = ({ person }) => {
	const { picture, name, email, phone } = person;

	return (
		<div>
			<img src={picture.medium} alt='test' />
			<h2>
				{name.first} {name.last}
			</h2>
			<p>{email}</p>
			<p>{phone}</p>
			<Button>Add Contact</Button>
		</div>
	);
};

export default NewContact;
