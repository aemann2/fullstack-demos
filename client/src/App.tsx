import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Index from './pages/Index';
import './App.css';
import MenuManager from './pages/MenuManager';
import ContactList from './pages/ContactList';
import UrlShortener from './pages/UrlShortener';

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
				<Route exact path='/'>
					<Index />
				</Route>
				<Route path='/menuManager'>
					<MenuManager />
				</Route>
				<Route path='/contactList'>
					<ContactList />
				</Route>
				<Route path='/urlShortener'>
					<UrlShortener />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
