import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#f50057',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        underlineAlways: {
          textDecoration: 'none',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
