import { Container, Typography } from '@mui/material';
import React from 'react';
export default function Projects() {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Typography variant="h4">Projects Page</Typography>
      <Typography>
        Projects that will go here: Hopeworks Cert Generator, ShelterApp,
        another Fullstack App
      </Typography>
    </Container>
  );
}
