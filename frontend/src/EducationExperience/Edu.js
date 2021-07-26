import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";

import UALogo from "../Assets/ua_brand.png"

const useStyles = makeStyles({
	heading: {
		fontWeight: 'bold',
		backgroundColor: '#333333',
		color: 'white',
        padding: '1% 2%',
        borderRadius: "10px"
	},
    subHeading:{
        backgroundColor: '#222222',
        color:'white',
        borderRadius: "10px",
        marginTop:"1%",
        padding: "1% 2%"
    },
    card:{
        width:"45%",
        textAlign: "center",
        minHeight: "100%",
        marginTop: "1%",
        marginRight: "2.5%"
    },
    image:{
        width:"100%",
        height: 400
    },
    cardHeader:{
        backgroundColor: "#333333",
        color:"white"
    },
    cardContent: {
        backgroundColor: "#333333",
        color:"white"
    }
});

export const Edu = () => {
    const classes = useStyles();

    return (
           
            <Card className={classes.card}>
                <CardHeader title="Univeristy of Arizona" className={classes.cardHeader}/>
                <CardMedia image={UALogo} className={classes.image}/>
                <CardContent className={classes.cardContent}>
                    <Typography>
                        Bachelor's of Science in Information Science & Technology
                    </Typography>
                    <Typography>
                        Magna Cum Laude
                    </Typography>
                </CardContent>
            </Card>

   
    );
};
