import { screen, render } from '@testing-library/react';
import WindowCard from '../WindowCard/WindowCard';
import testImage from './assets/testImg.png';
import { BrowserRouter as Router } from 'react-router-dom';

describe('tests for window component', () => {
	test('Window component displays correct input text', () => {
		const testText = 'This is a test';
		render(
			<Router>
				<WindowCard image={'test'} alt='test' url='test'>
					{testText}
				</WindowCard>
			</Router>
		);
		const text = screen.getByText(testText);
		expect(text).toBeInTheDocument();
	});
	test('Window component displays correct image', () => {
		const altText = 'test image';
		render(
			<Router>
				<WindowCard image={testImage} alt={altText} url='test'></WindowCard>
			</Router>
		);
		const image = screen.getByAltText(altText);
		expect(image).toBeInTheDocument();
	});
	test('Window has correct url', () => {
		const testText = 'This is a test';
		render(
			<Router>
				<WindowCard image={testImage} alt={'test'} url='/test'>
					{testText}
				</WindowCard>
			</Router>
		);
		const link = screen.getByText(testText);
		expect(link.closest('a')).toHaveAttribute('href', '/test');
	});
});
