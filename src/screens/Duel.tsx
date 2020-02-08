import React from 'react';
import { Button, Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import ContestantCard from '../components/ContestantCard';
import useContestants from '../hooks/useContestants';

interface DuelProps {
	type: string;
}

const styles = {
	buttonContainer: {
		display: 'flex',
		justifyContent: 'center',
		padding: 14,
	},
};

const Duel: React.FC<DuelProps> = ({ type }: DuelProps) => {
	const { contestant1, contestant2, fightUnit } = useContestants(type);
	const contestant1Unit = `${fightUnit}: ${contestant1[fightUnit]}`;
	const contestant2Unit = `${fightUnit}: ${contestant2[fightUnit]}`;

	return (
		<Layout>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<ContestantCard name={contestant1.name} unit={contestant1Unit} image={contestant1.img} />
				</Grid>
				<Grid item xs={12} md={6}>
					<ContestantCard name={contestant2.name} unit={contestant2Unit} image={contestant2.img} />
				</Grid>
			</Grid>
			<div style={styles.buttonContainer}>
				<Button variant="contained" color="primary">
					Fight Again!
				</Button>
			</div>
		</Layout>
	);
};

export default Duel;
