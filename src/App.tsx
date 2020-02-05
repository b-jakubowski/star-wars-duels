import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './screens/Homepage';
import Duel from './screens/Duel';
import PageNotFound from './screens/PageNotFound';

const App: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Homepage />
				</Route>
				<Route path="/heroes">
					<Duel unit={'heroes'} />
				</Route>
				<Route path="/starships">
					<Duel unit={'starships'} />
				</Route>
				<Route path="*">
					<PageNotFound />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
