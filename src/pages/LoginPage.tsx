import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import classes from './styles/loginPage.module.css';
import { useNavigate } from 'react-router-dom';
// import login from '../utils/login/login';

function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
            EduBot
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function LoginPage() {

  const [username , setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

    // useEffect(() => {
    //   console.log(username);
    //   console.log(password)

    // }, [username, password])

    // function mainLogin(e){
    //   e.preventDefault();
    //   try {
    //       login('/api/auth/login', username, password).then(res => {
    //         // console.log(res)
    //           if(res.hasOwnProperty('token')){
    //             localStorage.setItem('token', res.token )
    //             navigate('/')
    //               // setError(true)
    //           } else {
    //               // setError(false)
    //               return
    //           }
    //       })
    //   } catch(e){
    //       console.log(e)
    //   }
    // }

    return (
        <Container component="main" sx={{
          display: 'flex',
          minHeight: '100vh',
          minWidth: '100vw',
          justifyContent: 'center',
          alignItems: 'center',
        }} maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            padding: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 3
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Name"
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            //   onClick={(e) => mainLogin(e)}
            >
              Sign In
            </Button>

          </Box>
          <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 4, mb: 1 }} />
        </Box>
      </Container>
    )
}