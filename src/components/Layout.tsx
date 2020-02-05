import React from 'react';
import { makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	container: {
		padding: '2rem',
	},
}));

const Layout: React.FC = ({ children }) => {
	const classes = useStyles();

	return (
		<Container className={classes.container} maxWidth="md">
			{children}
		</Container>
	);
};

export default Layout;
