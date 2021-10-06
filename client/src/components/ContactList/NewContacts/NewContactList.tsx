import { useEffect, useState } from 'react';
import NewContact from './NewContact';
import { Person } from '../../../types/types';
import axios from 'axios';

const NewContactList = () => {
	const [people, setPeople] = useState<[] | Person[]>([]);

	const getPeople = () => {
		axios
			.get('https://randomuser.me/api/?results=3')
			.then((res) => setPeople(res.data.results));
	};

	const getPerson = async () => {
		const response = await axios.get('https://randomuser.me/api/?results=1');
		return response;
	};

	useEffect(() => {
		getPeople();
	}, []);

	const addContact = async (id: string) => {
		const res = await getPerson();
		console.log(res.data.results);

		setPeople((prevState) => {
			return [
				...prevState.filter((person) => id !== person.login.uuid),
				res.data.results[0],
			];
		});
	};

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
