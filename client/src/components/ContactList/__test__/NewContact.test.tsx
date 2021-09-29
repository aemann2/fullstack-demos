import { render, screen } from '@testing-library/react';
import ContactList from '../../../pages/ContactList';

describe('New Contact component tests', () => {
	const name = 'John Doe';
	const contact1 = 'john@test.com';
	const contact2 = '555-555-5555';
	test('Contact renders correct content', () => {
		render(<ContactList />);
		const image = screen.getByAltText('test1');
		const heading = screen.getByText(name);
		const email = screen.getByText(contact1);
		const phone = screen.getByText(contact2);
		expect(image).toHaveAttribute('src', 'url');
		expect(heading).toHaveValue(name);
		expect(email).toHaveValue(contact1);
		expect(phone).toHaveValue(contact2);
	});
});
