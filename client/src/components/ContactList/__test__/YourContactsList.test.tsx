import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactList from '../../../pages/ContactList';

describe('Tests for Your Contact List component', () => {
	test('Your Contacts displays correct number of contacts', () => {
		render(<ContactList />);
		const cardsList = screen.getAllByRole('button', { name: /modify/i });
		expect(cardsList).toHaveLength(3);
	});

	test('Modifying info for a user works correctly', async () => {
		const oldName = 'Don Hudson';
		const newName = 'Eli Mcdonald';
		render(<ContactList />);
		const user = screen.getByText(oldName);
		const modifyButton = screen.getByRole('button', { name: /modify/i });
		userEvent.click(modifyButton);
		const nameInput = screen.getByRole('input');
		userEvent.type(nameInput, newName);
		const submitButton = screen.getByRole('button', { name: /submit/i });
		await userEvent.click(submitButton);
		const newUser = screen.getByText(newName);
		expect(newUser).toBeInTheDocument();
	});

	test('Deleting a user works correctly', async () => {
		render(<ContactList />);
		const users = screen.getAllByRole('button', { name: /modify/i });
		// finding first user to delete
		const userToDelete = users[1];
		const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
		// clicking this user's delete button
		await userEvent.click(deleteButtons[1]);
		expect(userToDelete).not.toBeInTheDocument();
		expect(users).toHaveLength(2);
	});
});

describe('Integration tests for New Contacts and Your Contacts List', () => {
	test('Added contact from New Contacts appears in Your Contacts', async () => {
		const contactName = 'John Doe';

		render(<ContactList />);
		const button = screen.getByRole('button', { name: /add contact/i });
		// clicking the Add Contact button for the second user
		await userEvent.click(button);
		const addedUser = screen.getByText(contactName);
		expect(addedUser).toBeInTheDocument();
	});
});
