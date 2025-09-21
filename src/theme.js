import { createTheme, responsiveFontSizes } from "@mui/material";

export const createAppTheme = (mode) => {
  let theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: mode === "dark" ? "#ffffff" : "#000000",
      },
      secondary: {
        main: "#f50057",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#ffffff",
        paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#000000",
        secondary: mode === "dark" ? "#b3b3b3" : "#666666",
      },
    },
    components: {
      MuiLink: {
        styleOverrides: {
          underlineAlways: {
            textDecoration: "none",
          },
        },
      },
    },
  });

  return responsiveFontSizes(theme);
};

const defaultTheme = createAppTheme("light");
export default defaultTheme;
