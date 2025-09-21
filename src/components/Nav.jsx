import { Link as MUILink, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Nav() {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack direction="row" spacing={2}>
        <MUILink component={Link} to="/">
          Home
        </MUILink>
        <MUILink component={Link} to="about">
          About Me
        </MUILink>
        {/* <MUILink component={Link} to="projects">
          Projects
        </MUILink> */}
      </Stack>
      <DarkModeToggle />
    </Stack>
  );
}
