import { Email as EmailIcon } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, Link, Stack } from "@mui/material";
import React from "react";

export default function SocialBar() {
  return (
    <Container>
      <Stack direction="row" spacing={1} justifyContent="center" mb={1}>
        <Link
          href="https://github.com/edlopez000/"
          color="inherit"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon fontSize="large" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/edwardlopezramos/"
          color="inherit"
          target="_blank"
          rel="noopener"
        >
          <LinkedInIcon fontSize="large" />
        </Link>
        <Link
          href="mailto:lopez.edward@outlook.com"
          color="inherit"
          target="_blank"
        >
          <EmailIcon fontSize="large" />
        </Link>
      </Stack>
    </Container>
  );
}
