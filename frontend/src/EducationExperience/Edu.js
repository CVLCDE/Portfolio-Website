import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box'


import UALogo from "../Assets/ua_brand.png"

const useStyles = makeStyles({
	heading: {
		fontWeight: 'bold',
		backgroundColor: '#333333',
		color: 'white',
        padding: '1% 2%',
        borderRadius: "10px"
	},
});

export const Edu = () => {
    const classes = useStyles();

    return (
        <Box display="flex" justifyContent="center" flexDirection="column" height="100%">
            <Typography variant="h3" component="h2" align="left">
                Education
            </Typography>
        </Box>
    );
};
