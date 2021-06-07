import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
	root: {
		display: "flex",
		backgroundColor: (props) => props.bgColor,
	},
	textWrapper: {
		display: "flex",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		color: (props) => props.textColor,
	},
	paper: {
		display: "flex",
		padding: "3%",
	},
});

export const SocialMediaCard = (props) => {
	const classes = useStyles(props);

	return (
		<Link href={props.link} target="_blank" rel="noreferrer">
			<Card className={classes.root}>
				<Paper elevation={2} className={classes.paper}>
					{ props.icon }
				</Paper>
				<div className={classes.textWrapper}>
					<Typography variant="h6">{ props.text }</Typography>
				</div>
			</Card>
		</Link>
	);
};
