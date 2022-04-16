import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ProjectCard from '../components/ProjectCard';
export default function Projects() {
  return (
    <>
      <Typography variant="h4">Projects</Typography>
      <Container
        sx={{
          flexGrow: 1,
          display: 'flex',
        }}
      >
        {/* <Typography>
        Projects that will go here: Hopeworks Cert Generator (for the lessons
          learned), ShelterApp, another Fullstack App, and this portfolio site.
          <br />
          <br />
          Each project will have a modal that appears with some of the built-in
          MUI motion animation for it and have a .md file which will be read
          through the mdx file format and plugin.
        </Typography> */}
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <ProjectCard title="Project #1" />
          </Grid>
          <Grid item>
            <ProjectCard title="Project #2" />
          </Grid>
          <Grid item>
            <ProjectCard title="Project #3" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
