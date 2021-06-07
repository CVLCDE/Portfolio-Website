import "./main.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import { SocialMediaCard } from "../Navigation/SocialMediaCard.js";
import Grid from "@material-ui/core/Grid";

export const Main = () => {
	const useStyles = makeStyles((theme) => ({
		root: {
			display: "flex",
			justifyContent: "center",
			"& > *": {
				margin: theme.spacing(1),
			},
		},
		small: {
			width: theme.spacing(3),
			height: theme.spacing(3),
		},
		large: {
			width: theme.spacing(50),
			height: theme.spacing(50),
		},
		textColor: {
			color: "white",
		},
	}));

	const classes = useStyles();
	return (
		<Box
			display="flex"
			flexDirection="column"
			height="100vh"
			paddingTop="5%"
		>
			<div className={classes.root}>
				<Avatar className={classes.large}>H</Avatar>
			</div>
			<Typography
				className={classes.textColor}
				variant="h1"
				component="h2"
				align="center"
				gutterBottom
			>
				Justin John
			</Typography>
			<Typography
				className={classes.textColor}
				variant="h2"
				align="center"
				gutterBottom
			>
				Security | Software Dev | a real cool dood
			</Typography>
			<Grid container spacing={3} justify="center">
				<Grid item xs={3}>
					<SocialMediaCard
						textColor="#FFFFFF"
						bgColor="#333333"
						link="https://www.github.com/CVLCDE"
					/>
				</Grid>

				<Grid item xs={3}>
					<SocialMediaCard
						textColor="#FFFFFF"
						bgColor="#333333"
						link="https://www.github.com/CVLCDE"
					/>
				</Grid>

				<Grid item xs={3}>
					<SocialMediaCard
						textColor="#FFFFFF"
						bgColor="#333333"
						link="https://www.github.com/CVLCDE"
					/>
				</Grid>

				<Grid item xs={3}>
					<SocialMediaCard
						textColor="#FFFFFF"
						bgColor="#333333"
						link="https://www.github.com/CVLCDE"
					/>
				</Grid>

				<Grid item xs={3}>
					<SocialMediaCard
						textColor="#FFFFFF"
						bgColor="#333333"
						link="https://www.github.com/CVLCDE"
					/>
				</Grid>

				<Grid item xs={3}>
					<SocialMediaCard
						textColor="#FFFFFF"
						bgColor="#333333"
						link="https://www.github.com/CVLCDE"
					/>
				</Grid>
			</Grid>
		</Box>
	);
};
