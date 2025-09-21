import { Container, Typography } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <Container
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" align="center">
        Hi, I&apos;m <b>Edward</b>.
      </Typography>
      <Typography align="center">
        I&apos;m a Production Support Engineer focusing on cloud infrastructure,
        monitoring, and building reliable distributed systems.
      </Typography>
    </Container>
  );
}
