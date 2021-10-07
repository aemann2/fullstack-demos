import { useEffect, useState } from 'react';
import { Person } from '../types/types';
import axios from 'axios';
import NewContactList from '../components/ContactList/NewContacts/NewContactList';
import YourContactsList from '../components/ContactList/YourContacts/YourContactsList';

const ContactList = () => {
	const [newContacts, setNewContacts] = useState<[] | Person[]>([]);
	const [yourContacts, setYourContacts] = useState<[] | Person[]>([]);

	const getNewContacts = () => {
		axios
			.get('https://randomuser.me/api/?results=3')
			.then((res) => setNewContacts(res.data.results));
	};

	const getYourContacts = () => {
		axios
			.get('https://fullstack-demos.herokuapp.com/contacts')
			.then((res) => setYourContacts(res.data.data));
	};

	const getContact = async () => {
		const response = await axios.get('https://randomuser.me/api/?results=1');
		return response;
	};

	const addContact = async (id: string) => {
		const res = await getContact();

		setNewContacts((prevState) => {
			return [
				...prevState.filter((person) => id !== person.login.uuid),
				res.data.results[0],
			];
		});
	};

	useEffect(() => {
		getNewContacts();
		getYourContacts();
	}, []);

	console.log(yourContacts);
	return (
		<div>
			<h1>Contact List</h1>
			<NewContactList newContacts={newContacts} addContact={addContact} />
			<YourContactsList yourContacts={yourContacts} />
		</div>
	);
};

export default ContactList;
