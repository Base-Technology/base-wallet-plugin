import { Link, Outlet } from 'umi';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#eb5c20',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
  typography: {
    h2: {
      fontWeight: '600',
      fontSize: '32px',
      textAlign: 'center'
    },
    subtitle2: {
      color: '#88888a',
      fontSize: '12px',
    },
    subtitle1: {
      color: '#88888a'
    }
  }
});
export default function Layout() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{
        width: '360px',
        height: '600px',
        overflow: 'hidden',
      }}>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}
