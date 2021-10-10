import React from 'react';
import Button from '../../UI/Button';
import { Person } from '../../../types/types';

interface IProps {
	contact: Person;
	deleteContact: (id: string) => Promise<void>;
}

const YourContact: React.FC<IProps> = ({ contact, deleteContact }) => {
	const { _id, picture, name, email, phone } = contact;

	return (
		<div>
			<img src={picture.medium} alt={name.first} />
			<Button>Modify</Button>
			<Button onClick={() => deleteContact(_id)}>Delete</Button>
			<h2>{`${name.first} ${name.last}`}</h2>
			<p>{email}</p>
			<p>{phone}</p>
		</div>
	);
};

export default YourContact;
