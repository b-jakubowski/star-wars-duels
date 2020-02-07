import React from 'react';
import Layout from '../components/Layout';
import ChooseDuelCard from '../components/ChooseDuelCard';
import duelPic from '../images/duel-pic.jpg';
import starshipsPic from '../images/starships-pic.jpg';

const Homepage: React.FC = () => (
	<Layout>
		<ChooseDuelCard route="/heroes" title="Hero vs. Hero" background={duelPic} />
		<ChooseDuelCard route="/starships" title="Starship vs. Starship" background={starshipsPic} />
	</Layout>
);

export default Homepage;
