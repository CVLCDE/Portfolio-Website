import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import { ProjectCard } from "./ProjectCard.js"

export const Project = () => {
    return (
        <Box>
            <Typography>Projects</Typography>
            <ProjectCard link="#" img="#" desc="#" iconSet={[]} />
            <ProjectCard link="#" img="#" desc="#" iconSet={[]} />
            <ProjectCard link="#" img="#" desc="#" iconSet={[]} />
            <ProjectCard link="#" img="#" desc="#" iconSet={[]} />
        </Box>
    )
}