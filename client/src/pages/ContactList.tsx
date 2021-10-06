import NewContactList from '../components/ContactList/NewContacts/NewContactList';
import YourContactsList from '../components/ContactList/YourContacts/YourContactsList';

const ContactList = () => {
	return (
		<div>
			<h1>Contact List</h1>
			<NewContactList />
			<YourContactsList />
		</div>
	);
};

export default ContactList;
