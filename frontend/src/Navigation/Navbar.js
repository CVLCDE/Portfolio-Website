import React from 'react'
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import CodeIcon from "@material-ui/icons/Code";
import InfoIcon from "@material-ui/icons/Info";
import CreateIcon from "@material-ui/icons/Create";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	paper: {
		margin: "20% 0",
		display: "flex",
		justifyContent: "center",
		padding: "20%"
	}
}));


export const Navbar = () => {
	const classes = useStyles()

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			maxHeight="100vh"
			maxWidth="100%"
			width="50%"
			position="sticky"
			top="0"
		>
			<Paper className={classes.paper} elevation={3}>
				<InfoIcon fontSize="large" />
			</Paper>
			<Paper className={classes.paper} elevation={3}>
				<CodeIcon fontSize="large" />
			</Paper>
			<Paper className={classes.paper} elevation={3}>
				<CreateIcon fontSize="large" />
			</Paper>
		</Box>
	);
};
