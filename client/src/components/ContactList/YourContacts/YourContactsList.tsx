import React from 'react';
import { Person } from '../../../types/types';
import YourContact from './YourContact';

interface IProps {
	yourContacts: Person[] | [];
}

const YourContactsList: React.FC<IProps> = ({ yourContacts }) => {
	return (
		<div>
			{yourContacts.map((contact) => (
				<YourContact key={contact._id} contact={contact} />
			))}
		</div>
	);
};

export default YourContactsList;
