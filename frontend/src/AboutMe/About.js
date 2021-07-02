import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Carousel, { slidesToShowPlugin, autoplayPlugin } from "@brainhubeu/react-carousel";


const useStyles = makeStyles({
    heading: {
        fontWeight: "bold",
        backgroundColor: "#333333",
        color: "white",
        padding: "1% 2%",
        borderRadius: "10px",
    },
    paper: {
        backgroundColor: "#FFFFFF",
        color: "#757575"
    }
});

export const About = () => {
    const classes = useStyles();

    return (
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            height="100%"
        >
            <Typography
                variant="h2"
                component="h2"
                align="left"
                className={classes.heading}
            >
                About Me
            </Typography>

            <Box elevation={3} >
                <Typography variant="h3">
                    I am a recent college grad with a Bachelor's of Science in
                    Information Science & Technology from the Unviversity of
                    Arizona.

                    I enjoy gaming, programming, music, excercise, and tennis.
                </Typography>


                <Typography variant="h4">
                    Skills
                </Typography>

            </Box>
        </Box>
    );
};
