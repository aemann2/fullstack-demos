import { render, screen } from '@testing-library/react';
import ContactList from '../../../pages/ContactList';

describe('Your Contact component tests', () => {
	const name = 'Bob';
	const contact1 = 'bob@test.com';
	const contact2 = '555-555-1245';
	const src = 'http://www.test4.com';
	test('Contact renders correct content', async () => {
		render(<ContactList />);
		const image = await screen.findByAltText(name);
		const heading = screen.getByText(name);
		const email = screen.getByText(contact1);
		const phone = screen.getByText(contact2);
		expect(image).toHaveAttribute('src', src);
		expect(heading).toHaveTextContent(name);
		expect(email).toHaveTextContent(contact1);
		expect(phone).toHaveTextContent(contact2);
	});
});
