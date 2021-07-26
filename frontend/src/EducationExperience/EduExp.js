import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box'
import { Edu } from "./Edu.js"
import { Exp } from "./Exp.js"

const useStyles = makeStyles({
	heading: {
		fontWeight: 'bold',
		backgroundColor: '#333333',
		color: 'white',
        padding: '1% 2%',
        borderRadius: "10px"
	},
});

export const EduExp = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h2" component="h2" align="left" className={classes.heading}>
            Education and Experience 
            </Typography>
            <Box display="flex" justifyContent="center" flexDirection="row" height="100%">
                <Edu />
                <Exp />
            </Box>
        </div>

    );
};

