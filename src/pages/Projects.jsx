import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import HopeworksCert from '../projectsInfo/HopeworksCert.mdx';
import ShelterApp from '../projectsInfo/ShelterApp.mdx';

export default function Projects() {
  return (
    <>
      <Typography variant="h4">Projects</Typography>
      <Container
        sx={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
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
          alignItems="stretch"
        >
          <Grid item sx={{ display: 'flex' }}>
            <ProjectCard
              title="Hopeworks Certificate Generator"
              project={<HopeworksCert />}
            />
          </Grid>
          <Grid item sx={{ display: 'flex' }}>
            <ProjectCard title="ShelterApp" project={<ShelterApp />} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
