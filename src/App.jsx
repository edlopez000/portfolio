import { ThemeProvider } from '@emotion/react';
import { Container, CssBaseline, Divider } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import SocialBar from './components/SocialBar';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import theme from './theme';

export default function App() {
  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        <Divider />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <SocialBar />
      </ThemeProvider>
    </Container>
  );
}
