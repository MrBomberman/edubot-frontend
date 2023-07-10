import Avatar from '@mui/material/Avatar';
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
import { useState } from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import routerUrls from '../constants/routerUrls';
import inputValidator from '../utils/common/inputValidator';
import Cookies from 'js-cookie';
import authentication from '../api/post-data/authentication';
import LoadingButton from '@mui/lab/LoadingButton';
import ModalWindow from '../shared/common/ModalWindow';
import { Button } from '@mui/material';
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
  const [submitClick, setSubmitClick] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  // for modal window
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleClose = () => setOpenModal(false)

  // const dispatch = useDispatch();

  // const navigate = useNavigation();

    function mainLogin(e : any){
      e.preventDefault();
      setSubmitClick(1)
      if(login.length != 0 && password.length != 0) {
        setLoading(true)
        try {
          const objLogin = {
            login: login,
            password: password
          }
          authentication("http://localhost:8000/api/v1/auth/login", objLogin)
            .then(res => {
              if(Boolean(res.status_code) && res.status_code !== 200){
                setErrorMessage(res.msg)
              } else {
                setErrorMessage('');
                Cookies.set('access_token', res.msg.access_token);
                Cookies.set('refresh_token', res.msg.refresh_token);
                navigate('/home')
              }
              setLoading(false)
            })
            .catch((err) => {        
              console.log(err)
              setLoading(false);
              setOpenModal(true)
              setErrorMessage(err.message)
            })
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
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              loading={loading}
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => mainLogin(e)}
            >
              Sign In
            </LoadingButton>
          {/* <Typography sx={{marginBottom: '10px', textAlign: 'center'}} color="red" >{errorMessage}</Typography> */}
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
      <ModalWindow openModal={openModal} handleClose={handleClose} textTitle={errorMessage}
        buttonElem={<Button onClick={handleClose} color="error" variant="contained">Close</Button>}/>
      </Container>
    )
}