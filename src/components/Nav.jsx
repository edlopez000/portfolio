import { Link as MUILink, Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <MUILink component={Link} to="/">
        Home
      </MUILink>
      <MUILink component={Link} to="about">
        About Me
      </MUILink>
      <MUILink component={Link} to="projects">
        Projects
      </MUILink>
    </Stack>
  );
}
