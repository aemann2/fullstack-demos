import { render, screen } from '@testing-library/react';
import ContactList from '../../../pages/ContactList';

describe('Your Contact List component tests', () => {
	const name = 'Don Hudson';
	const contact1 = 'don@test.com';
	const contact2 = '555-555-1111';
	test('Contact renders correct content', () => {
		render(<ContactList />);
		const image = screen.getByAltText('test2');
		const heading = screen.getByText(name);
		const email = screen.getByText(contact1);
		const phone = screen.getByText(contact2);
		expect(image).toHaveAttribute('src', 'url');
		expect(heading).toHaveValue(name);
		expect(email).toHaveValue(contact1);
		expect(phone).toHaveValue(contact2);
	});
});
