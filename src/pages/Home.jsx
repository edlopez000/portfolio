import { Container, Typography } from '@mui/material';
import React from 'react';
export default function Home() {
  return (
    <Container
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" align="center">
        Hi, I'm <b>Edward</b>.
      </Typography>
      <Typography align="center">
        I'm a developer focusing on building platforms and products that
        deliver.
      </Typography>
    </Container>
  );
}
