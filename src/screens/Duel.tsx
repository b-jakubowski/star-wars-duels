import React from 'react';
import Layout from '../components/Layout';

interface DuelProps {
	unit: string;
}

const Duel: React.FC<DuelProps> = ({ unit }: DuelProps) => (
	<Layout>
		<p>{unit}</p>
	</Layout>
);

export default Duel;
