import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#6e6e92',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
