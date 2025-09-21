import { ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline, Divider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import SocialBar from "./components/SocialBar";
import About from "./pages/About";
import Home from "./pages/Home";
import { ThemeContextProvider, useTheme } from "./contexts/ThemeContext";
import React from "react";

function AppContent() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Nav />
        <Divider />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <SocialBar />
      </Container>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}
