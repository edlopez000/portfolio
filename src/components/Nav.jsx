import { Link, Stack } from '@mui/material';
import React from 'react';

export default function Nav() {
  return (
    <Stack direction="row" spacing={2}>
      <Link>Home</Link>
      <Link>About Me</Link>
      <Link>Projects</Link>
    </Stack>
  );
}
