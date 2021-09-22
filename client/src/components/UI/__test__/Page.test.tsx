import { render, screen } from '@testing-library/react';
import Page from '../Page';

describe('UI component tests', () => {
	test('Page displays correct child', () => {
		const testElement = <h1>Test</h1>;
		render(<Page>{testElement}</Page>);
		const heading = screen.getByText('Test');
		expect(heading).toHaveTextContent('Test');
	});
});
