import { ThemeProvider, CssBaseline, Typography } from '@mui/material';
import theme from './theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography>Hello World!</Typography>
    </ThemeProvider>
  );
}

export default App;
