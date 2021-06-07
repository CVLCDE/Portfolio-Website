import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import DescriptionIcon from "@material-ui/icons/Description";
import { makeStyles } from "@material-ui/core/styles";

export const Navbar = () => {
	const useStyles = makeStyles((theme) => ({}));

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			height="100%"
		>
			<Paper>
				<HomeIcon fontSize="large" />
			</Paper>
			<Paper>
				<InfoIcon fontSize="large" />
			</Paper>
			<Paper>
				<DescriptionIcon fontSize="large" />
			</Paper>
		</Box>
	);
};
