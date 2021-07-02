import React from "react";
import { Particles } from "react-tsparticles";
import particlesJSON from "./particles.js";

import { Main } from "./Main/Main.js";
import { Projects } from "./Projects/Projects.js";
import Container from "@material-ui/core/Container";
import { Navbar } from "./Navigation/Navbar.js";
import { Blogs } from "./Blogs/Blogs.js";
import { About } from "./AboutMe/About.js";
import { EduExp } from "./EducationExperience/EduExp.js";

import Grid from "@material-ui/core/Grid";

import "./app.css";

function App() {
    return (
        <div className="App">
            <Particles id="bg" options={particlesJSON} />
            <Grid container justify="space-around">
                <Grid container item xs={1} justify="center">
                    <Navbar />
                </Grid>
                <Grid item justify="center" xs={11}>
                    <Container>
                        <Main />
                        <hr />
                        <Projects />
                        <hr />
                        <EduExp />
                    </Container>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
