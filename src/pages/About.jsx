import { Container, Typography } from '@mui/material';
import React from 'react';
export default function About() {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Typography variant="h4">About</Typography>
      <Typography>Probably going to add resume here.</Typography>
    </Container>
  );
}
