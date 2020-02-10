import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import duelPic from '../images/duel-pic.jpg';
import starshipsPic from '../images/starships-pic.jpg';
import ChooseDuelCard from './ChooseDuelCard';

const componentHeroesProp = (
	<Router>
		<ChooseDuelCard route="/heroes" title="Hero vs. Hero" background={duelPic} />
	</Router>
);

const componentStarshipsProp = (
	<Router>
		<ChooseDuelCard route="/starships" title="Starship vs. Starship" background={starshipsPic} />
	</Router>
);

it('ChooseDuelCard renders correctly with heroes props', () => {
	const tree = renderer.create(componentHeroesProp).toJSON();
	expect(tree).toMatchSnapshot();
});

it('ChooseDuelCard renders correctly with starships props', () => {
	const tree = renderer.create(componentStarshipsProp).toJSON();
	expect(tree).toMatchSnapshot();
});
