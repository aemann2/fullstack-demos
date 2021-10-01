import { useEffect, useState } from 'react';
import NewContact from './NewContact';
import { Person } from '../../../types/types';
import axios from 'axios';

const NewContactList = () => {
	const [people, setPeople] = useState<[]>([]);

	useEffect(() => {
		axios
			.get('https://randomuser.me/api/?results=3')
			.then((res) => setPeople(res.data.results));
	}, []);

	console.log(people);

	return (
		<div>
			{people.map((person: Person) => (
				<NewContact key={person.id.value} person={person} />
			))}
		</div>
	);
};

export default NewContactList;
