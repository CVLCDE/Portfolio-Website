import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';
import { faReact } from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles({
	heading: {
		fontWeight: 'bold',
		backgroundColor: '#333333',
		color: 'white',
        padding: '1% 2%',
        borderRadius: "10px",
	},
    box: {
        width: "45%",
        marginTop: "1%"
    }
});

export const Exp = () => {
    const classes = useStyles();
    return (
        <Box className={classes.box}>
            <Typography variant="h5" className={classes.heading}>Programming Languages</Typography>
            <div>

            </div>
        </Box>
    );
};
