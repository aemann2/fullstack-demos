import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages/Index';

function App() {
	return (
		<Router>
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
