import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ProjectCard } from './ProjectCard.js';
import { makeStyles } from '@material-ui/core/styles';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import './carousel-style.css';

const useStyles = makeStyles({
	heading: {
		fontWeight: 'bold',
		backgroundColor: '#333333',
		color: 'white',
        padding: '1% 2%',
        borderRadius: "10px"
	},
	carousel: {
		maxWidth: '80%',
	},
});

export const Projects = () => {
	const classes = useStyles();

	return (
		<Box display='flex' flexDirection='column' height='100vh'>
			<Typography
				variant='h2'
				component='h2'
				align='left'
				className={classes.heading}
			>
				Projects
			</Typography>
			<Box display="flex" justifyContent="center" flexDirection="column" height="100%">
				<Carousel
					plugins={[
						'arrows',
						{
							resolve: slidesToShowPlugin,
							options: {
								numberOfSlides: 2,
							},
						},
                    ]}
				>
					<ProjectCard link='#' img='#' desc='#' iconSet={[]} />
					<ProjectCard link='#' img='#' desc='#' iconSet={[]} />
					<ProjectCard link='#' img='#' desc='#' iconSet={[]} />
					<ProjectCard link='#' img='#' desc='#' iconSet={[]} />
				</Carousel>
			</Box>
		</Box>
	);
};
