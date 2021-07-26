import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ProjectCard } from "./ProjectCard.js";
import { makeStyles } from "@material-ui/core/styles";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "./carousel-style.css";

// ICON IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

// IMAGES IMPORTS
import PortfolioWebsitePic from "../Assets/portfolio-website-screenshot.png";
import PlaceholderPic from "../Assets/project_placeholder_img.jpg";

const useStyles = makeStyles({
    heading: {
        fontWeight: "bold",
        backgroundColor: "#333333",
        color: "white",
        padding: "1% 2%",
        borderRadius: "10px",
    },
    carousel: {
        maxWidth: "80%",
    },
});

export const Projects = () => {
    const classes = useStyles();

    // Portfolio Assets
    const portfolioDesc =
        "A custom portofolio site made with React to show off my projects and blogs. Blogs are stored in a PSQL database and content is added to the site from a back-end admin page (served with NodeJS).";
    const portfolioLink = "#";
    const portfolioIcons = [
        <FontAwesomeIcon icon={faReact} size="4x" />,
        <FontAwesomeIcon icon={faJs} size="4x" />,
        <FontAwesomeIcon icon={faHtml5} size="4x" />,
        <FontAwesomeIcon icon={faCss3Alt} size="4x" />,
        <FontAwesomeIcon icon={faDatabase} size="4x" />,
    ];

    // Placeholder Assets
    const placeholderDesc = "Project coming soon!";
    const placeholderLink = "#";
    const placeholderIcons = [
        <FontAwesomeIcon icon={faQuestionCircle} size="4x" />,
    ];

    return (
        <Box display="flex" flexDirection="column" height="100vh" id="Projects">
            <Typography
                variant="h2"
                component="h2"
                align="left"
                className={classes.heading}
            >
                Projects
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                height="100%"
            >
                <Carousel
                    plugins={[
                        "arrows",
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 2,
                            },
                        },
                    ]}
                >
                    <ProjectCard
                        title="Portfolio Website"
                        link={portfolioLink}
                        img={PortfolioWebsitePic}
                        desc={portfolioDesc}
                        iconSet={portfolioIcons}
                    />
                    <ProjectCard
                        title="Placeholder"
                        link={placeholderLink}
                        img={PlaceholderPic}
                        desc={placeholderDesc}
                        iconSet={placeholderIcons}
                    />
                    <ProjectCard
                        title="Placeholder"
                        link={placeholderLink}
                        img={PlaceholderPic}
                        desc={placeholderDesc}
                        iconSet={placeholderIcons}
                    />
                    <ProjectCard
                        title="Placeholder"
                        link={placeholderLink}
                        img={PlaceholderPic}
                        desc={placeholderDesc}
                        iconSet={placeholderIcons}
                    />
                    <ProjectCard
                        title="Placeholder"
                        link={placeholderLink}
                        img={PlaceholderPic}
                        desc={placeholderDesc}
                        iconSet={placeholderIcons}
                    />
                </Carousel>
            </Box>
        </Box>
    );
};
