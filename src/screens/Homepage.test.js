import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Duel from './Duel';
import { ContestantType } from '../types/types';

const componentDuelHeroes = (
	<Router>
		<Duel type={ContestantType.HEROES} />
	</Router>
);

const componentDuelStarships = (
	<Router>
		<Duel type={ContestantType.STARSHIPS} />
	</Router>
);

it('Duel renders correctly "heroes" props', () => {
	const tree = renderer.create(componentDuelHeroes).toJSON();
	expect(tree).toMatchSnapshot();
});

it('Duel renders correctly "starships" props', () => {
	const tree = renderer.create(componentDuelStarships).toJSON();
	expect(tree).toMatchSnapshot();
});
