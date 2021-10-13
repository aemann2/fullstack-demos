import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Index from './pages/Index/Index';
import './App.css';
import MenuManager from './pages/MenuManager';
import ContactList from './pages/ContactList/ContactList';
import UrlShortener from './pages/UrlShortener/UrlShortener';

const GlobalStyles = createGlobalStyle`
  html {
    --color-text: #EEEDDD;
    --color-background: #174168;
		--color-button: #EEF08D;
		--color-placeholder: #AEBFCF;
		--h1-mobile: 2rem;
		--h1-desktop: 4rem;
		--h2-mobile: 1.2rem;
		--h2-desktop: 3rem;
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
