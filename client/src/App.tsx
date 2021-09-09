import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Index from './pages/Index';
import './App.css';

const GlobalStyles = createGlobalStyle`
  html {
    --color-text: #EEEDDD;
    --color-background: #174168;
  }
`;

function App() {
	return (
		<Router>
			<GlobalStyles />
			<Switch>
				<Route path='/'>
					<Index />
				</Route>
				<Route path='/page1'>{/* page */}</Route>
				<Route path='/page2'>{/* page */}</Route>
				<Route path='/page3'>{/* page */}</Route>
			</Switch>
		</Router>
	);
}

export default App;
