import { useEffect, useState } from 'react';
import { Person } from '../types/types';
import axios from 'axios';
import NewContactList from '../components/ContactList/NewContacts/NewContactList';
import YourContactsList from '../components/ContactList/YourContacts/YourContactsList';

const ContactList = () => {
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

	const addContact = async (id: string) => {
		const res = await getPerson();

		setPeople((prevState) => {
			return [
				...prevState.filter((person) => id !== person.login.uuid),
				res.data.results[0],
			];
		});
	};

	useEffect(() => {
		getPeople();
	}, []);

	return (
		<div>
			<h1>Contact List</h1>
			<NewContactList people={people} addContact={addContact} />
			<YourContactsList />
		</div>
	);
};

export default ContactList;
