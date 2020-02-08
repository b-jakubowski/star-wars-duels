import React from 'react';
import { makeStyles, Card, CardContent, CardHeader, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface ChooseDuelCardProps {
	title: string;
	background: string;
	route: string;
}

const useStyles = makeStyles({
	link: {
		textDecoration: 'none',
	},
	root: {
		marginTop: 30,
	},
	media: {
		height: 250,
	},
	title: {
		textAlign: 'center',
	},
});

const ChooseDuelCard: React.FC<ChooseDuelCardProps> = ({ title, background, route }: ChooseDuelCardProps) => {
	const classes = useStyles();

	return (
		<Link className={classes.link} to={route}>
			<Card className={classes.root}>
				<CardContent>
					<CardHeader className={classes.title} title={title} />
					<CardMedia className={classes.media} image={background} />
				</CardContent>
			</Card>
		</Link>
	);
};

export default ChooseDuelCard;
