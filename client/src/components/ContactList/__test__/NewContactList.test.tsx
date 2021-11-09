import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import ContactList from '../../../pages/ContactList/ContactList';

describe('New Contact List component tests', () => {
	test('Correct number of contacts are present in list', async () => {
		render(
			<Router>
				<ContactList />
			</Router>
		);
		const cardsList = await screen.findAllByRole('button', {
			name: /add contact/i,
		});
		expect(cardsList).toHaveLength(3);
	});

	test('Add contact button removes that contact from the list and replaces with a new contact', async () => {
		const contactName = 'Jane Doe';

		render(
			<Router>
				<ContactList />
			</Router>
		);
		const buttons = await screen.findAllByRole('button', {
			name: /add contact/i,
		});
		const contact = screen.getByText(contactName);
		// clicking the Add Contact button for the second user
		await userEvent.click(buttons[1]);
		// contact should not be present in the list
		await waitFor(() => expect(contact).not.toBeInTheDocument());
		const newCardsList = await screen.findAllByRole('button', {
			name: /add contact/i,
		});
		expect(newCardsList).toHaveLength(3);
	});
});
