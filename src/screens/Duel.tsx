// @ts-nocheck
import React, { useEffect, useState } from 'react';
import {Box, Button, CircularProgress, Grid, Typography} from '@material-ui/core';
import Layout from '../components/Layout';
import ContestantCard from '../components/ContestantCard';
import useContestants from '../hooks/useContestants';
import { getRandomNumber } from '../helpers/getRandomNumber';
import starship1 from '../images/millennium-falcon-011.jpg';
import hero1 from '../images/stormtrooper.png';
import starship2 from '../images/starship3.png';
import hero2 from '../images/mandalorian.png';
import { isStarshipsDuel } from '../helpers/isStarshipsDuel';
import { Contestant, ContestantType, DuelProps, DuelUnit, Hero, Starship } from '../types/types';

const getRandomContestant = (contestantType: ContestantType, contestants: Hero[] | Starship[]) => {
	const randomContestantsNumber = getRandomNumber(contestants.length);

	return isStarshipsDuel(contestantType)
		? {
				name: contestants[randomContestantsNumber].name,
				crew: contestants[randomContestantsNumber].crew,
		  }
		: {
				name: contestants[randomContestantsNumber].name,
				mass: contestants[randomContestantsNumber].mass,
		  };
};

const getRandomPlayers = (contestants: Hero[] | Starship[], type: ContestantType) => {
	const player1 = getRandomContestant(type, contestants);
	let player2: Contestant = getRandomContestant(type, contestants);

	if (player1.name === player2.name) {
		player2 = { ...player2, ...getRandomContestant(type, contestants) };
	}

	return { player1, player2 };
};

const Duel: React.FC<DuelProps> = ({ type }: DuelProps) => {
	const [contestants, loading] = useContestants(type);
	const [players, setPlayers] = useState<{ player1?: Hero | Starship; player2?: Hero | Starship }>({});
	const [loadingPlayers, setLoadingPlayers] = useState(false);
	const [player1Points, setPlayer1Points] = useState<number>(0);
	const [player2Points, setPlayer2Points] = useState<number>(0);
	const [winner, setWinner] = useState('');

	const playerUnit = isStarshipsDuel(type) ? DuelUnit.CREW : DuelUnit.MASS;
	const image1 = isStarshipsDuel(type) ? starship1 : hero1;
	const image2 = isStarshipsDuel(type) ? starship2 : hero2;

	useEffect(() => {
		setLoadingPlayers(true);

		if (!loading) {
			setPlayers(getRandomPlayers(contestants as any, type));
			setLoadingPlayers(false);
		}
	}, [loading, contestants, type]);

	useEffect(() => {
		if (!(loadingPlayers || loading)) {
			if (isStarshipsDuel(type)) {
				if (players.player1.crew > players.player2.crew) {
					setPlayer1Points(player1Points + 1);
					setWinner(players.player1.name);
				} else {
					setPlayer2Points(player2Points + 1);
					setWinner(players.player2.name);
				}
			} else {
				if (players.player1.mass > players.player2.mass) {
					setPlayer1Points(player1Points + 1);
					setWinner(players.player1.name);
				} else {
					setPlayer2Points(player2Points + 1);
					setWinner(players.player2.name);
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loadingPlayers, loading, players]);

	return (
		<Layout>
			{loadingPlayers || loading ? (
				<Box display="flex" justifyContent="center">
					<CircularProgress />
				</Box>
			) : (
				<>
					{players.player1 && players.player2 && (
						<>
							<Box display="flex" justifyContent="center">
								<Typography variant="h3" component="h5">
									Winner: {winner}
								</Typography>
							</Box>
							<Grid container spacing={2}>
								<Grid item xs={12} md={6}>
									<ContestantCard
										name={players.player1.name}
										unit={`${playerUnit}: ${players.player1[playerUnit]}`}
										image={image1}
									/>
								</Grid>
								<Grid item xs={12} md={6}>
									<ContestantCard
										name={players.player2.name}
										unit={`${playerUnit}: ${players.player2[playerUnit]}`}
										image={image2}
									/>
								</Grid>
								<Grid item xs={12} md={6}>
									<Box display="flex" justifyContent="center">
										Points: {player1Points}
									</Box>
								</Grid>
								<Grid item xs={12} md={6}>
									<Box display="flex" justifyContent="center">
										Points: {player2Points}
									</Box>
								</Grid>
							</Grid>
						</>
					)}
					<Box display="flex" justifyContent="center">
						<Button variant="contained" color="primary" onClick={() => setPlayers(getRandomPlayers(contestants, type))}>
							Fight Again!
						</Button>
					</Box>
				</>
			)}
		</Layout>
	);
};

export default Duel;
