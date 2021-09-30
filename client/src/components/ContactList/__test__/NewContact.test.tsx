import { render, screen } from '@testing-library/react';
import NewContact from '../NewContacts/NewContact';

const person = {
	id: '123',
	image: 'url',
	name: 'John Doe',
	email: 'john@test.com',
	phone: '555-555-5555',
};

describe('New Contact component tests', () => {
	const name = 'John Doe';
	const contact1 = 'john@test.com';
	const contact2 = '555-555-5555';
	test('Contact renders correct content', () => {
		render(<NewContact person={person} />);
		const image = screen.getByAltText('test');
		const heading = screen.getByText(name);
		const email = screen.getByText(contact1);
		const phone = screen.getByText(contact2);
		expect(image).toHaveAttribute('src', 'url');
		expect(heading).toHaveTextContent(name);
		expect(email).toHaveTextContent(contact1);
		expect(phone).toHaveTextContent(contact2);
	});
});
