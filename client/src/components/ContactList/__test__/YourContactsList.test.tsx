import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactList from '../../../pages/ContactList/ContactList';

describe('Tests for Your Contact List component', () => {
	test('Your Contacts displays correct number of contacts', async () => {
		render(<ContactList />);
		const cardsList = await screen.findAllByRole('button', { name: /modify/i });
		expect(cardsList).toHaveLength(3);
	});

	test('Deleting a user works correctly', async () => {
		render(<ContactList />);
		const buttons = await screen.findAllByRole('button', { name: /delete/i });
		// finding first user to delete
		const userToDelete = buttons[0];
		// clicking this user's delete button
		await waitFor(() => userEvent.click(userToDelete));
		const user = await screen.findByText('Bob Rob');
		expect(user).not.toBeInTheDocument();
		const newButtons = screen.getAllByRole('button', {
			name: /delete/i,
		});
		expect(newButtons).toHaveLength(2);
	});

	test('Modifying user button changes when clicked', async () => {
		render(<ContactList />);
		const startingModifyButtons = await screen.findAllByRole('button', {
			name: /modify/i,
		});
		userEvent.click(startingModifyButtons[0]);
		const doneButton = screen.getAllByRole('button', { name: /done/i });
		expect(doneButton).toHaveLength(1);
		userEvent.click(doneButton[0]);
	});

	test('Modifying info for a user works correctly', async () => {
		const newName = 'Eli Mcdonald';
		render(<ContactList />);
		const buttons = await screen.findAllByRole('button', { name: /modify/i });
		userEvent.click(buttons[0]);
		const inputs = screen.getAllByRole('textbox');
		userEvent.clear(inputs[0]);
		userEvent.type(inputs[0], newName);
		const submitButton = screen.getByRole('button', { name: /done/i });
		await userEvent.click(submitButton);
		const newUser = await waitFor(() => screen.getByText(newName));
		expect(newUser).toBeInTheDocument();
	});
});

describe('Integration tests for New Contacts and Your Contacts List', () => {
	test('Added contact from New Contacts appears in Your Contacts', async () => {
		const contactName = 'Ron Doe';
		render(<ContactList />);
		// getting add contact buttons
		const buttons = await screen.findAllByRole('button', {
			name: /add contact/i,
		});
		const contactToAdd = buttons[0];
		// clicking the Add Contact button for the first contact in the contact list
		await waitFor(() => userEvent.click(contactToAdd));
		// looking for the added user in the returned users
		const addedUser = screen.getByText(contactName);
		expect(addedUser).toBeInTheDocument();
	});
});
