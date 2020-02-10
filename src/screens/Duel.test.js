import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Duel from './Duel';
import { ContestantType } from '../types/types';

const componentHeroes = (
	<Router>
		<Duel type={ContestantType.HEROES} />
	</Router>
);

const componentStarships = (
	<Router>
		<Duel type={ContestantType.STARSHIPS} />
	</Router>
);

it('Duel renders correctly "heroes" props', () => {
	const tree = renderer.create(componentHeroes).toJSON();
	expect(tree).toMatchSnapshot();
});

it('Duel renders correctly "starships" props', () => {
	const tree = renderer.create(componentStarships).toJSON();
	expect(tree).toMatchSnapshot();
});
