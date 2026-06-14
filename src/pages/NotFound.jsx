import { Container, Typography, Link as MUILink } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import usePageTitle from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Page Not Found");

  return (
    <Container
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography sx={{ mb: 2 }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </Typography>
      <MUILink component={Link} to="/">
        Go back home
      </MUILink>
    </Container>
  );
}
