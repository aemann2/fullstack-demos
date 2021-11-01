import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MenuManager from '../../../pages/MenuManager/MenuManager';

describe('Tests for menu component', () => {
	test('Should render menu', async () => {
		render(<MenuManager />);
		const button = await screen.findAllByRole('button', { name: 'Delete' });
		expect(button).toHaveLength(2);
	});
	test('Correct items are rendered in menu', async () => {
		render(<MenuManager />);
		const name = await screen.findByText('Steak');
		const price = await screen.findByText('$39.99');
		const description = await screen.findByText('A tasty steak');
		expect(name).toBeInTheDocument();
		expect(price).toBeInTheDocument();
		expect(description).toBeInTheDocument();
	});
	test('Menu renders images', async () => {
		render(<MenuManager />);
		const image = await screen.findByAltText('Steak');
		expect(image).toBeInTheDocument();
	});
	test('Clicking delete removes item from menu', async () => {
		render(<MenuManager />);
		const deleteBtns = await screen.findAllByRole('button', { name: 'Delete' });
		await userEvent.click(deleteBtns[0]);
		const deleteBtnsNew = await screen.findAllByRole('button', {
			name: 'Delete',
		});
		expect(deleteBtnsNew).toHaveLength(1);
	});

	test('Modifying item button changes when clicked', async () => {
		render(<MenuManager />);
		const startingModifyButtons = await screen.findAllByRole('button', {
			name: /modify/i,
		});
		userEvent.click(startingModifyButtons[0]);
		const doneButton = screen.getAllByRole('button', { name: /done/i });
		expect(doneButton).toHaveLength(1);
		userEvent.click(doneButton[0]);
	});

	test('Modifying info for an item works correctly', async () => {
		const newPrice = '$59.99';
		render(<MenuManager />);
		const buttons = await screen.findAllByRole('button', { name: /modify/i });
		userEvent.click(buttons[0]);
		const inputs = screen.getAllByRole('textbox');
		userEvent.clear(inputs[1]);
		userEvent.type(inputs[1], newPrice);
		const submitButton = screen.getByRole('button', { name: /done/i });
		await userEvent.click(submitButton);
		const updatedPrice = await waitFor(() => screen.getByText(newPrice));
		expect(updatedPrice).toBeInTheDocument();
	});
});

describe('Integration test for Menu and Menuform', () => {
	test('Submitting a new form item adds the item to the menu', () => {
		render(<MenuManager />);
	});
});
