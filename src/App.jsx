import { ThemeProvider } from '@emotion/react';
import { Container, CssBaseline } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import theme from './theme';

export default function App() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </ThemeProvider>
    </Container>
  );
}
