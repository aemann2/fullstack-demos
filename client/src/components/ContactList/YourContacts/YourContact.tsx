import React from 'react';
import Button from '../../UI/Button';
import { Person } from '../../../types/types';

interface IProps {
	contact: Person;
}

const YourContact: React.FC<IProps> = ({ contact }) => {
	const { image, name, email, phone } = contact;

	return (
		<div>
			<img src={image} alt={name} />
			<Button>Modify</Button>
			<Button>Delete</Button>
			<h2>{name}</h2>
			<p>{email}</p>
			<p>{phone}</p>
		</div>
	);
};

export default YourContact;
