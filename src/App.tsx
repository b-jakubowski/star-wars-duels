import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './screens/Homepage';
import Duel from './screens/Duel';
import PageNotFound from './screens/PageNotFound';
import { ContestantType } from './types/types';

const App: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Homepage />
				</Route>
				<Route path="/heroes">
					<Duel type={ContestantType.HEROES} />
				</Route>
				<Route path="/starships">
					<Duel type={ContestantType.STARSHIPS} />
				</Route>
				<Route path="*">
					<PageNotFound />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
