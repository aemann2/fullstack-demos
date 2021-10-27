import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Menu from '../Menu/Menu';
import MenuManager from '../../../pages/MenuManager/MenuManager';

describe('Tests for menu component', () => {
	test('Should render menu', () => {
		render(<Menu />);
		expect(screen.getByRole('button')).toBeInTheDocument();
	});
	test('Correct items are rendered in menu', async () => {
		render(<Menu />);
		const name = await screen.findByText('Steak');
		const price = await screen.findByText('$10');
		const description = await screen.findByText('A tasty steak');
		expect(name).toBeInTheDocument();
		expect(price).toBeInTheDocument();
		expect(description).toBeInTheDocument();
	});
	test('Menu renders images', async () => {
		render(<Menu />);
		const image = await screen.findByAltText('Steak');
		expect(image).toBeInTheDocument();
	});
	test('Clicking delete removes item from menu', async () => {
		render(<Menu />);
		const deleteBtns = await screen.findAllByRole('button', { name: 'Delete' });
		await userEvent.click(deleteBtns[0]);
		const deleteBtnsNew = await screen.findAllByRole('button', {
			name: 'Delete',
		});
		expect(deleteBtnsNew).toHaveLength(1);
	});
	test('Clicking modify allows item to be modified', async () => {
		render(<Menu />);
		const modifyBtn = await screen.findByRole('button', { name: 'Modify' });
		await userEvent.click(modifyBtn);
		userEvent.type(screen.getByLabelText('Price'), '59.99');
		await userEvent.click(modifyBtn);
		const price = await screen.findByText('$59.99');
		expect(price).toBeInTheDocument();
	});
});

describe('Integration test for Menu and Menuform', () => {
	test('Submitting a new form item adds the item to the menu', () => {
		render(<MenuManager />);
	});
});
