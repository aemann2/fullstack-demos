import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import MenuManager from '../../../pages/MenuManager/MenuManager';

describe('Tests for item name input', () => {
	const passingText = 'Steak';
	const passingPrice = '$10';
	const passingDescription = 'Tasty';
	const failingText = '';

	test('Name input shows input', () => {
		render(
			<Router>
				<MenuManager />
			</Router>
		);
		const nameInput = screen.getByPlaceholderText('Item name');
		userEvent.type(nameInput, passingText);
		expect(nameInput).toHaveValue(passingText);
	});

	test('Name input accepts valid input', async () => {
		render(
			<Router>
				<MenuManager />
			</Router>
		);
		const nameInput = screen.getByPlaceholderText('Item name');
		const priceInput = screen.getByPlaceholderText('Item price');
		const descInput = screen.getByLabelText('Item description');
		const submitBtn = screen.getByRole('button', { name: 'Submit' });
		userEvent.type(nameInput, passingText);
		userEvent.type(priceInput, passingPrice);
		userEvent.type(descInput, passingDescription);
		await userEvent.click(submitBtn);
		const errorMsg = screen.queryByText('Please enter a name');
		expect(errorMsg).not.toBeInTheDocument();
	});

	test('Name input rejects invalid input', async () => {
		render(
			<Router>
				<MenuManager />
			</Router>
		);
		const nameInput = screen.getByPlaceholderText('Item name');
		const priceInput = screen.getByPlaceholderText('Item price');
		const descInput = screen.getByLabelText('Item description');
		const submitBtn = screen.getByRole('button', { name: 'Submit' });
		userEvent.type(nameInput, failingText);
		userEvent.type(priceInput, passingPrice);
		userEvent.type(descInput, passingDescription);
		await userEvent.click(submitBtn);
		const errorMsg = screen.queryByText('Please enter a name');
		expect(errorMsg).toBeInTheDocument();
	});
});

describe('Tests for item price input', () => {
	const passingText = 'Steak';
	const passingPrice = '10';
	const passingDescription = 'Tasty';
	const failingPrice = '';

	test('Price input shows input', () => {
		render(
			<Router>
				<MenuManager />
			</Router>
		);
		const priceInput = screen.getByPlaceholderText('Item price');
		userEvent.type(priceInput, passingPrice);
		expect(priceInput).toHaveValue(10);
	});

	test('Price input accepts valid input', async () => {
		render(
			<Router>
				<MenuManager />
			</Router>
		);
		const nameInput = screen.getByPlaceholderText('Item name');
		const priceInput = screen.getByPlaceholderText('Item price');
		const descInput = screen.getByLabelText('Item description');
		const submitBtn = screen.getByRole('button', { name: 'Submit' });
		userEvent.type(nameInput, passingText);
		userEvent.type(priceInput, passingPrice);
		userEvent.type(descInput, passingDescription);
		await userEvent.click(submitBtn);
		const errorMsg = screen.queryByText('Please enter a price');
		expect(errorMsg).not.toBeInTheDocument();
	});

	test('Price input rejects invalid input', async () => {
		render(
			<Router>
				<MenuManager />
			</Router>
		);
		const nameInput = screen.getByPlaceholderText('Item name');
		const priceInput = screen.getByPlaceholderText('Item price');
		const descInput = screen.getByLabelText('Item description');
		const submitBtn = screen.getByRole('button', { name: 'Submit' });
		userEvent.type(nameInput, passingText);
		userEvent.type(priceInput, failingPrice);
		userEvent.type(descInput, passingDescription);
		await userEvent.click(submitBtn);
		const errorMsg = screen.queryByText('Please enter a price');
		expect(errorMsg).toBeInTheDocument();
	});
});

describe('Tests for item description input', () => {
	const passingText = 'Steak';
	const passingPrice = '$10';
	const passingDescription = 'Tasty';
	const failingDescription = '';

	test('Description input shows input', () => {
		render(
			<Router>
				<MenuManager />
			</Router>
		);
		const descInput = screen.getByLabelText('Item description');
		userEvent.type(descInput, passingDescription);
		expect(descInput).toHaveValue(passingDescription);
	});

	test('Description input accepts valid input', async () => {
		render(
			<Router>
				<MenuManager />
			</Router>
		);
		const nameInput = screen.getByPlaceholderText('Item name');
		const priceInput = screen.getByPlaceholderText('Item price');
		const descInput = screen.getByLabelText('Item description');
		const submitBtn = screen.getByRole('button', { name: 'Submit' });
		userEvent.type(nameInput, passingText);
		userEvent.type(priceInput, passingPrice);
		userEvent.type(descInput, passingDescription);
		await userEvent.click(submitBtn);
		const errorMsg = screen.queryByText('Please enter a price');
		expect(errorMsg).not.toBeInTheDocument();
	});

	test('Description input rejects invalid input', async () => {
		render(
			<Router>
				<MenuManager />
			</Router>
		);
		const nameInput = screen.getByPlaceholderText('Item name');
		const priceInput = screen.getByPlaceholderText('Item price');
		const descInput = screen.getByLabelText('Item description');
		const submitBtn = screen.getByRole('button', { name: 'Submit' });
		userEvent.type(nameInput, passingText);
		userEvent.type(priceInput, passingPrice);
		userEvent.type(descInput, failingDescription);
		await userEvent.click(submitBtn);
		const errorMsg = screen.queryByText('Please enter a description');
		expect(errorMsg).toBeInTheDocument();
	});
});

describe('Tests for all fields', () => {
	const passingText = 'Steak';
	const passingPrice = '$10';
	const passingDescription = 'Tasty';
	const failingDescription = '';

	test('Submitting clears fields on valid input', async () => {
		render(
			<Router>
				<MenuManager />
			</Router>
		);
		const nameInput = screen.getByPlaceholderText('Item name');
		const priceInput = screen.getByPlaceholderText('Item price');
		const descInput = screen.getByLabelText('Item description');
		const submitBtn = screen.getByRole('button', { name: 'Submit' });
		userEvent.type(nameInput, passingText);
		userEvent.type(priceInput, passingPrice);
		userEvent.type(descInput, passingDescription);
		await userEvent.click(submitBtn);
		expect(nameInput).toHaveValue('');
		expect(priceInput).toHaveValue(null);
		expect(descInput).toHaveValue('');
	});

	test('Submitting does not clear fields on invalid input', async () => {
		render(
			<Router>
				<MenuManager />
			</Router>
		);
		const nameInput = screen.getByPlaceholderText('Item name');
		const priceInput = screen.getByPlaceholderText('Item price');
		const descInput = screen.getByLabelText('Item description');
		const submitBtn = screen.getByRole('button', { name: 'Submit' });
		userEvent.type(nameInput, passingText);
		userEvent.type(priceInput, passingPrice);
		userEvent.type(descInput, failingDescription);
		await userEvent.click(submitBtn);
		expect(nameInput).toHaveValue(passingText);
		expect(priceInput).toHaveValue(10);
	});
});
