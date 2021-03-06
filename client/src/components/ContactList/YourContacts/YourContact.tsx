import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Person } from '../../../types/types';
import { Card, ActionButton } from './style';

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

	console.log(contactEmail);

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
			await axios.put('https://fullstack-demos.herokuapp.com/contacts', {
				id: _id,
				name: {
					first: firstName,
					last: lastName,
				},
				phone: contactPhone,
				email: contactEmail,
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

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		setter: React.Dispatch<React.SetStateAction<string>>
	) => {
		setter(e.target.value);
	};

	return (
		<Card>
			<div className='imageWrapper'>
				<img src={picture.large} alt={name.first} />
			</div>
			<div className='mainContent'>
				<div className='buttons'>
					{isUpdating ? (
						<ActionButton className='--space' primary onClick={handleModifyEnd}>
							Done
						</ActionButton>
					) : (
						<ActionButton
							className='--space'
							primary
							onClick={handleModifyBegin}
						>
							Modify
						</ActionButton>
					)}
					<ActionButton className='--space' onClick={() => deleteContact(_id)}>
						Delete
					</ActionButton>
				</div>
				{isUpdating ? (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							margin: '0 auto',
							width: '250px',
						}}
					>
						<input
							onChange={(e) => handleChange(e, setFullName)}
							value={fullName}
							maxLength={18}
							style={{ padding: '0.1rem', marginTop: '0.5rem' }}
						></input>
						<input
							onChange={(e) => handleChange(e, setContactEmail)}
							value={contactEmail}
							maxLength={25}
							style={{ padding: '0.1rem', marginTop: '0.5rem' }}
						></input>
						<input
							onChange={(e) => handleChange(e, setContactPhone)}
							value={contactPhone}
							maxLength={14}
							style={{ padding: '0.1rem', marginTop: '0.5rem' }}
						></input>
					</div>
				) : (
					<div className='text-wrapper'>
						<h2>{`${name.first} ${name.last}`}</h2>
						<p>{email}</p>
						<p>{phone}</p>
					</div>
				)}
			</div>
		</Card>
	);
};

export default YourContact;
