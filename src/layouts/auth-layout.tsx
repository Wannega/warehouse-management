import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import Box from '@mui/material/Box';
import { Link, useLocation } from 'react-router-dom';
import { Routes } from 'src/routes';

interface Props {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<Props> = ({ children }) => {
    const location = useLocation()
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={8}
        sx={{
          backgroundImage: 'url(https://img.freepik.com/free-photo/landmarks-of-modern-city_1359-338.jpg?w=1380&t=st=1682156343~exp=1682156943~hmac=40bfbe38266480cd077bb862b22d73bf4874b50c61555a904bb8567d8724b4cf)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={4}
        component={Paper}
        elevation={6}
        square
        position={'relative'}
      >
        {location.pathname !== Routes.SIGN_IN && (
          <Link to={Routes.SIGN_IN}>
            <Box
              sx={{
                m: 3,
                position: 'absolute',
              }}
            >
              <ArrowBackIosNewSharpIcon  />
            </Box>
          </Link>
        )}
        {children}
      </Grid>
    </Grid>
  );
};
