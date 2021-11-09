import { render, screen } from '@testing-library/react';
import ContactList from '../../../pages/ContactList/ContactList';
import { BrowserRouter as Router } from 'react-router-dom';

describe('New Contact component tests', () => {
	const name = 'John Doe';
	const contact1 = 'john@test.com';
	const contact2 = '555-555-5555';
	const src = '123';
	test('Contact renders correct content', async () => {
		render(
			<Router>
				<ContactList />
			</Router>
		);
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
