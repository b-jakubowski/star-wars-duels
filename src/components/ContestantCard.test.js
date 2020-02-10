import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import ContestantCard from './ContestantCard';
import starship1 from '../images/millennium-falcon-011.jpg';

test('ContestantCard receives props, renders title text and unit', () => {
	const { getByTestId } = render(
		<Router>
			<ContestantCard name={'Death Star'} unit={`mass: 73228`} image={starship1} />
		</Router>,
	);

	expect(getByTestId('contestant-card-title')).toHaveTextContent('Death Star');
	expect(getByTestId('contestant-card-unit')).toHaveTextContent('mass: 73228');
});

it('ContestantCard renders correctly', () => {
	const tree = renderer.create(<ContestantCard name={'Death Star'} unit={`mass: 73228`} image={starship1} />).toJSON();
	expect(tree).toMatchSnapshot();
});
