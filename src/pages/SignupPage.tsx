import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import classes from './styles/loginPage.module.css';
import { useNavigate } from 'react-router-dom';
import routerUrls from '../constants/routerUrls';
import inputValidator from '../utils/common/inputValidator';
import Cookies from 'js-cookie';
import LoadingButton from '@mui/lab/LoadingButton';
import authentication from '../api/post-data/authentication';
import ModalWindow from '../shared/common/ModalWindow';

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

export default function SignupPage() {

  const [login , setLogin] = useState<string>('');
  const [name , setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [submitClick, setSubmitClick] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false);
  const [loginLoading, setLoginLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();
  // for modal window
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false)

    function signUP(e:any){
      e.preventDefault();
      setSubmitClick(1)
      if(login.length != 0 && email.length != 0 && password.length != 0 && name.length !== 0){
        setLoading(true)
        try {
          const objSignUP = {
            login: login,
            name: name,
            email: email,
            password: password
          }
          authentication("http://localhost:8000/api/v1/auth/signup", objSignUP)
            .then(res => {
              if(Boolean(res.status_code) && res.status_code !== 201){
                setErrorMessage(res.msg)
              } else {
                setErrorMessage('');
                setOpenModal(true)
                // navigate('/login')
              }
              setLoading(false)
            })
            .catch((e) => console.log(e))
          }
          catch(e){
            console.log(e)
        }
      }
    }

    function mainLogin(e:any){
      e.preventDefault();
      setSubmitClick(1)
      if(login.length != 0 && password.length != 0) {
        setLoginLoading(true)
        try {
          const objLogin = {
            login: login,
            password: password
          }
          authentication("http://localhost:8000/api/v1/auth/login", objLogin)
            .then(res => {
              if(Boolean(res.status_code) && (res.status_code !== 200)){
                setErrorMessage(res.msg)
              } else {
                setErrorMessage('');
                Cookies.set('access_token', res.msg.access_token);
                Cookies.set('refresh_token', res.msg.refresh_token);
                navigate('/home')
              }
              setLoginLoading(false)
            })
            .catch((e) => console.log(e))
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
            Sign up
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
              error={submitClick == 0 || name.length != 0 ? false : true}
              required
              fullWidth
              id="name"
              label="Name"
              autoFocus
              onChange={(e) => setName(e.target.value)}
              helperText={submitClick == 0 ? '' : inputValidator(name)}
            />
            <TextField
              margin="normal"
              error={submitClick == 0 || email.length != 0 ? false : true}
              required
              fullWidth
              id="email"
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              helperText={submitClick == 0 ? '' : inputValidator(email)}
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
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              loading={loading}
              onClick={(e) => signUP(e)}
            >
              Sign Up
            </LoadingButton>
            <Typography sx={{marginBottom: '10px', textAlign: 'center'}} color="red" >{errorMessage}</Typography>
          </Box>
          <Grid container>
              <Grid item xs>
                <Link to="#">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to={routerUrls.authLogin}>
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 4, mb: 1 }} />
        </Box>
      {/* TODO - functionality to relocate user to home page and automatic login after signup successfully  */}
        <ModalWindow textTitle="Ypu successfully sign up!" 
        mainText="Let's begin studying!"
        openModal={openModal}
        handleClose={handleClose}
        buttonElem={<LoadingButton 
        loading={loginLoading}
        onClick={(e) => {
          mainLogin(e)
        }}
        variant="contained"
        >GO</LoadingButton>}/>
      </Container>
    )
}