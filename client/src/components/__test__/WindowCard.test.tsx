import { screen, render } from '@testing-library/react';
import WindowCard from '../WindowCard';
import testImage from './testImg.png';

describe('tests for window component', () => {
	test('window component displays correct input text', () => {
		const testText = 'This is a test';
		render(
			<WindowCard image={'test'} alt='test'>
				{testText}
			</WindowCard>
		);
		const text = screen.getByText(testText);
		expect(text).toBeInTheDocument();
	});
	test('window component displays correct image', () => {
		const altText = 'test image';
		render(<WindowCard image={testImage} alt={altText}></WindowCard>);
		const image = screen.getByAltText(altText);
		expect(image).toBeInTheDocument();
	});
});
