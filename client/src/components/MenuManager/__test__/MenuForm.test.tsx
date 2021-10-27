import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MenuForm from '../MenuForm/MenuForm';

describe('Tests for item name input', () => {
	const passingText = 'Steak';
	const failingText = '';

	test('Name input shows input', () => {
		render(<MenuForm />);
		const nameInput = screen.getByPlaceholderText('Item name');
		userEvent.type(nameInput, passingText);
		expect(nameInput).toHaveValue(passingText);
	});

	test('Name input accepts valid input', async () => {
		render(<MenuForm />);
		const nameInput = screen.getByPlaceholderText('Item name');
		const submitBtn = screen.getByRole('button', { name: 'Submit' });
		const errorMsg = screen.queryByText('You must enter a name');
		userEvent.type(nameInput, passingText);
		await userEvent.click(submitBtn);
		expect(errorMsg).not.toBeInTheDocument();
	});
});

describe('Tests for item price input', () => {
	const passingPrice = '10.00';
	const failingPrice = '';

	test('Price input shows input', () => {
		render(<MenuForm />);
		const priceInput = screen.getByPlaceholderText('Item price');
		userEvent.type(priceInput, passingPrice);
		expect(priceInput).toHaveValue(passingPrice);
	});

	test('Price input accepts valid input', async () => {
		render(<MenuForm />);
		const priceInput = screen.getByPlaceholderText('Item price');
		const submitBtn = screen.getByRole('button', { name: 'Submit' });
		const errorMsg = screen.queryByText('You must enter a price');
		userEvent.type(priceInput, passingPrice);
		await userEvent.click(submitBtn);
		expect(errorMsg).not.toBeInTheDocument();
	});

	test('Price input rejects invalid input', async () => {
		render(<MenuForm />);
		const priceInput = screen.getByPlaceholderText('Item price');
		const submitBtn = screen.getByRole('button', { name: 'Submit' });
		const errorMsg = screen.queryByText('You must enter a price');
		userEvent.type(priceInput, failingPrice);
		await userEvent.click(submitBtn);
		expect(errorMsg).toBeInTheDocument();
	});
});

describe('Tests for item description input', () => {
	const passingDesc = 'Tasty';
	const failingDesc = '';

	test('Description input shows input', () => {
		render(<MenuForm />);
		const descInput = screen.getByLabelText('Item description');
		userEvent.type(descInput, passingDesc);
		expect(descInput).toHaveValue(passingDesc);
	});

	test('Description input accepts valid input', async () => {
		render(<MenuForm />);
		const descInput = screen.getByLabelText('Item description');
		const submitBtn = screen.getByRole('button', { name: 'Submit' });
		const errorMsg = screen.queryByText('You must enter a description');
		userEvent.type(descInput, passingDesc);
		await userEvent.click(submitBtn);
		expect(errorMsg).not.toBeInTheDocument();
	});

	test('Description input rejects invalid input', async () => {
		render(<MenuForm />);
		const descInput = screen.getByLabelText('Item description');
		const submitBtn = screen.getByRole('button', { name: 'Submit' });
		const errorMsg = screen.queryByText('You must enter a description');
		userEvent.type(descInput, failingDesc);
		await userEvent.click(submitBtn);
		expect(errorMsg).toBeInTheDocument();
	});
});

describe('Tests for all fields', () => {
	const passingText = 'Steak';
	const passingPrice = '10.00';
	const passingDesc = 'Tasty';
	const failingText = '';

	test('Submitting clears fields on valid input', async () => {
		render(<MenuForm />);
		const nameInput = screen.getByPlaceholderText('Item name');
		const priceInput = screen.getByPlaceholderText('Item price');
		const descriptionInput = screen.getByLabelText('Item description');
		const submitBtn = screen.getByRole('button', { name: 'Submit' });
		userEvent.type(nameInput, passingText);
		userEvent.type(priceInput, passingPrice);
		userEvent.type(descriptionInput, passingDesc);
		userEvent.click(submitBtn);
		await waitFor(() => expect(nameInput).toHaveValue(''));
	});

	test('Submitting does not clear fields on invalid input', async () => {
		render(<MenuForm />);
		const nameInput = screen.getByPlaceholderText('Item name');
		const priceInput = screen.getByPlaceholderText('Item price');
		const descriptionInput = screen.getByLabelText('Item description');
		const submitBtn = screen.getByRole('button', { name: 'Submit' });
		userEvent.type(nameInput, failingText);
		userEvent.type(priceInput, passingPrice);
		userEvent.type(descriptionInput, passingDesc);
		userEvent.click(submitBtn);
		await waitFor(() => expect(priceInput).toHaveValue(passingPrice));
	});
});
