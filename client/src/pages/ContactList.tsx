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
	const getNewContact = async () => {
		const response = await axios.get('https://randomuser.me/api/?results=1');
		return response;
	};

	const getYourContacts = () => {
		axios
			.get('https://fullstack-demos.herokuapp.com/contacts')
			.then((res) => setYourContacts(res.data.data));
	};

	const removeContact = (id: string) => {
		setYourContacts((prevState) => {
			return prevState.filter((contact) => contact._id !== id);
		});
	};

	const addContact = async (person: Person) => {
		const { name, phone, email, picture } = person;
		// sending contact to DB
		try {
			await axios.post('https://fullstack-demos.herokuapp.com/contacts', {
				name: {
					first: name.first,
					last: name.last,
				},
				phone: phone,
				email: email,
				picture: {
					large: picture.large,
					medium: picture.medium,
					thumbnail: picture.thumbnail,
				},
			});
		} catch (err) {
			console.log(err);
		}
		// getting a new contact to put in the contact list
		const res = await getNewContact();

		// filtering out the contact we just added to Your Contacts
		setNewContacts((prevState) => {
			return [
				...prevState.filter((p) => p.login.uuid !== person.login.uuid),
				res.data.results[0],
			];
		});

		// refreshing the Your Contacts list
		getYourContacts();
	};

	useEffect(() => {
		getNewContacts();
		getYourContacts();
	}, []);

	return (
		<div>
			<h1>Contact List</h1>
			<NewContactList newContacts={newContacts} addContact={addContact} />
			<YourContactsList
				yourContacts={yourContacts}
				removeContact={removeContact}
			/>
		</div>
	);
};

export default ContactList;
