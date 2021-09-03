import { screen, render } from '@testing-library/react';
import Window from '../Window';
import testImage from './testImg.png';

describe('tests for window component', () => {
	test('window component displays correct input text', () => {
		const testText = 'This is a test';
		render(
			<Window image={'test'} alt='test'>
				{testText}
			</Window>
		);
		const text = screen.getByText(testText);
		expect(text).toBeInTheDocument();
	});
	test('window component displays correct image', () => {
		const altText = 'test image';
		render(<Window image={testImage} alt={altText}></Window>);
		const image = screen.getByAltText(altText);
		expect(image).toBeInTheDocument();
	});
});
