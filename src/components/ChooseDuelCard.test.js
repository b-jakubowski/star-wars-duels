import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter as Router } from "react-router-dom";

import duelPic from '../images/duel-pic.jpg';
import ChooseDuelCard from './ChooseDuelCard';

test('ChooseDuelCard receives props and renders title text', () => {
	const { getByTestId } = render(
    <Router>
	    <ChooseDuelCard route="/heroes" title="Hero vs. Hero" background={duelPic} />
    </Router>
	  );

	expect(getByTestId('card-title')).toHaveTextContent('Hero vs. Hero');
});
