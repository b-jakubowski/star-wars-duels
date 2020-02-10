import React from 'react';
import { Card, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core';

interface ContestantCardProps {
	name: string;
	unit: string;
	image: string;
}

const useStyles = makeStyles({
	link: {
		textDecoration: 'none',
	},
	card: {
		marginTop: 36,
	},
	content: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		width: '100%',
	},
	img: {
		height: 220,
		width: 'auto',
	},
	title: {
		textAlign: 'center',
	},
});

const ContestantCard: React.FC<ContestantCardProps> = ({ name, unit, image }: ContestantCardProps) => {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardContent className={classes.content}>
				<CardHeader data-testid="contestant-card-title" className={classes.title} title={name} />
				<img className={classes.img} src={image} alt={image} />
				<Typography data-testid="contestant-card-unit" color="textSecondary">
					{unit}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ContestantCard;
