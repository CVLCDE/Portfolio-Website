import "./main.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import { SocialMediaCard } from "../Navigation/SocialMediaCard.js";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import FileCopyIcon from '@material-ui/icons/FileCopy';
import  Myself  from '../Assets/myself.png'

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
      color: "#212121",
      fontWeight: "bold"
    },
  }));

  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" margin="3% 0">
      <div className={classes.root}>
        <Avatar className={classes.large} src={Myself} />
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
      {/* <Typography
        className={classes.textColor}
        variant="h2"
        align="center"
        gutterBottom
      >
       Gaming | Software Development | Music 
      </Typography> */}
      <Grid container spacing={3} justify="center">
        <Grid item xs={3}>
          <SocialMediaCard
            icon={<GitHubIcon fontSize="large"/>}
            textColor="#FFFFFF"
            bgColor="#333333"
            link="https://www.github.com/CVLCDE"
            text="GitHub"
          />
        </Grid>

        <Grid item xs={3}>
          <SocialMediaCard
            icon={<LinkedInIcon fontSize="large"/>}
            textColor="#FFFFFF"
            bgColor="#333333"
            link="https://www.linkedin.com/in/justin-john-54ab7a178/"
            text="LinkedIn"
          />
        </Grid>

        <Grid item xs={3}>
          <SocialMediaCard
            icon={<EmailIcon fontSize="large" />}
            textColor="#FFFFFF"
            bgColor="#333333"
            link="mailto:jstnpjohn@gmail.com"
            text="Email"
          />
        </Grid>

        <Grid item xs={3}>
          <SocialMediaCard
            icon={<FileCopyIcon fontSize="large" />}
            textColor="#FFFFFF"
            bgColor="#333333"
            link="https://www.github.com/CVLCDE"
            text="Resume"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
