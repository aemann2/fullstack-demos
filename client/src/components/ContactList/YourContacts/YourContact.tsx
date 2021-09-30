import React from 'react';
import Button from '../../UI/Button';
import { Person } from '../../../types/types';

interface IProps {
	person: Person;
}

const YourContact: React.FC<IProps> = ({ person }) => {
	const { image, name, email, phone } = person;

	return (
		<div>
			<img src={image} alt='test' />
			<Button>Modify</Button>
			<Button>Delete</Button>
			<h2>{name}</h2>
			<p>{email}</p>
			<p>{phone}</p>
		</div>
	);
};

export default YourContact;
