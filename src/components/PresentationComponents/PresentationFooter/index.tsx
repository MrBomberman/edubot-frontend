import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center', 
    fontFamily: 'Dm Sans',}}>
      {' © '}
      {new Date().getFullYear()}
        {' '}
      <Link color="inherit" href={`${window.location.origin}`}>
        Boston the Edubot
      </Link>{'. '}
      {' All rights reserved.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function PresentationFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}