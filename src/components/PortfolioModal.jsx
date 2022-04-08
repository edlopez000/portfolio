import { Container } from '@mui/material';
import React, { useState } from 'react';
import TestProject from '../projectsInfo/TestProject.mdx';

export default function PortfolioModal() {
  const [content, setContent] = useState('');

  return (
    <Container>
      <TestProject />
    </Container>
  );
}
