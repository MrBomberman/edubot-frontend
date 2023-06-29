import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import { Link, useNavigation } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import classes from './styles/loginPage.module.css';
import { useNavigate } from 'react-router-dom';
import routerUrls from '../constants/routerUrls';
import inputValidator from '../utils/common/inputValidator';
import { useDispatch } from 'react-redux';
import { AUTH_TOKEN } from '../store/authentication/authReducer';
import Cookies from 'js-cookie';
// import login from '../utils/login/login';

function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" to="https://mui.com/">
            EduBot
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function LoginPage() {

  const [login , setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [submitClick, setSubmitClick] = useState<number>(0)
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const navigate = useNavigation();

    function mainLogin(e:any){
      e.preventDefault();
      setSubmitClick(1)
      if(login.length != 0 && email.length != 0) {
        try {
          const token = 'rjjgkbnlrrtn';
          Cookies.set('authToken', token);
  
  
          setTimeout(() => navigate('/home'), 500)
            // login('/api/auth/login', username, password).then(res => {
            //   // console.log(res)
            //     if(res.hasOwnProperty('token')){
            //       localStorage.setItem('token', res.token )
            //       navigate('/')
            //         // setError(true)
            //     } else {
            //         // setError(false)
            //         return
            //     }
            // })
        } catch(e){
            console.log(e)
        }
      }
    }

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
            boxShadow: 3,
            maxWidth: '500px'
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
              error={submitClick == 0 || login.length != 0 ? false : true}
              required
              fullWidth
              id="login"
              label="Login"
              autoFocus
              onChange={(e) => setLogin(e.target.value)}
              helperText={submitClick == 0 ? '' : inputValidator(login)}
            />
            <TextField
              margin="normal"
              error={submitClick == 0 || password.length != 0 ? false : true}
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              helperText={submitClick == 0 ? '' : inputValidator(password)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => mainLogin(e)}
            >
              Sign In
            </Button>

          </Box>
          <Grid container>
              <Grid item xs>
                <Link to="#">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to={routerUrls.authRegistration}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 4, mb: 1 }} />
        </Box>
      </Container>
    )
}