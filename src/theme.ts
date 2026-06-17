import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1565C0' },     // corporate blue
    secondary: { main: '#0C2D52' },   // dark navy
    background: { default: '#F3F7FB', paper: '#ffffff' },
    text: { primary: '#1a1c24', secondary: '#6b7280' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: { fontFamily: '"Outfit", sans-serif', fontWeight: 800 },
    h2: { fontFamily: '"Outfit", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Outfit", sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"Outfit", sans-serif', fontWeight: 600 },
  },
  shape: { borderRadius: 2 },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: 'none', fontWeight: 700, borderRadius: 2 } } },
    MuiTextField: { defaultProps: { variant: 'outlined' } },
  }
});

export default theme;
