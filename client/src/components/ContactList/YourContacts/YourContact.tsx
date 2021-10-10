import React, { useState, useEffect } from 'react';
import Button from '../../UI/Button';
import axios from 'axios';
import { Person } from '../../../types/types';

interface IProps {
	contact: Person;
	deleteContact: (id: string) => Promise<void>;
	getYourContacts: () => void;
}

const YourContact: React.FC<IProps> = ({
	contact,
	deleteContact,
	getYourContacts,
}) => {
	const { _id, picture, name, email, phone } = contact;
	const [isUpdating, setIsUpdating] = useState(false);
	const [fullName, setFullName] = useState('');
	const [contactEmail, setContactEmail] = useState(email);
	const [contactPhone, setContactPhone] = useState(phone);

	useEffect(() => {
		setFullName(`${name.first} ${name.last}`);
	}, [name.first, name.last]);

	const handleModifyBegin = () => {
		setIsUpdating((prevState) => !prevState);
	};

	const handleModifyEnd = async () => {
		const names = fullName.split(' ');
		const firstName = names[0];
		const lastName = names[1];
		try {
			await axios.patch('https://fullstack-demos.herokuapp.com/contacts', {
				id: _id,
				name: {
					first: firstName,
					last: lastName,
				},
				phone: contactEmail,
				email: contactPhone,
				picture: {
					large: picture.large,
					medium: picture.medium,
					thumbnail: picture.thumbnail,
				},
			});
			await getYourContacts();
			setIsUpdating((prevState) => !prevState);
		} catch (err) {
			console.log(err);
		}
	};

	const handleChange = (e: any, setter: any) => {
		setter(e.target.value);
	};

	return (
		<div>
			<img src={picture.medium} alt={name.first} />
			{isUpdating ? (
				<Button onClick={handleModifyEnd}>Done</Button>
			) : (
				<Button onClick={handleModifyBegin}>Modify</Button>
			)}
			<Button onClick={() => deleteContact(_id)}>Delete</Button>
			{isUpdating ? (
				<input
					onChange={(e) => handleChange(e, setFullName)}
					value={fullName}
				></input>
			) : (
				<h2>{`${name.first} ${name.last}`}</h2>
			)}
			{isUpdating ? (
				<input
					onChange={(e) => handleChange(e, setContactEmail)}
					value={contactEmail}
				></input>
			) : (
				<p>{email}</p>
			)}
			{isUpdating ? (
				<input
					onChange={(e) => handleChange(e, setContactPhone)}
					value={contactPhone}
				></input>
			) : (
				<p>{phone}</p>
			)}
		</div>
	);
};

export default YourContact;
