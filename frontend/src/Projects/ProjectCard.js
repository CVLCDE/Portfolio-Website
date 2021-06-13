import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    card: {
        maxWidth: "90%",
    },
    image: {
        width: "100%",
        height: 240,
    },
    icons: {
        display: "flex",
        justifyContent: "space-between",
    },
    actionArea: {
        display: "flex",
        alignItems: "center"
    }
});

export const ProjectCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.image}
                image={props.img}
                title={props.title}
            ></CardMedia>

            <CardContent>
                <CardActionArea className={classes.actionArea}>
                    <Typography variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <CardActions>
                        <Button
                            variant="outlined"
                            size="medium"
                            color="default"
                        >
                            App
                        </Button>
                        <Button
                            variant="outlined"
                            size="medium"
                            color="default"
                        >
                            Code
                        </Button>
                    </CardActions>
                </CardActionArea>

                <Typography variant="body2" color="textSecondary" component="p">
                    {props.desc}
                </Typography>
            </CardContent>

            <CardContent className={classes.icons}>
                {
                    //props.iconSet.map( iconComp => (iconComp))
                    [...props.iconSet]
                }
            </CardContent>
        </Card>
    );
};
