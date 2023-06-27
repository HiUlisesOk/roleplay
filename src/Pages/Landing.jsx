import { Box, Typography, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";
import BG from '../img/bg.jpg'
import React, { useDebugValue, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../redux/actions/userActions'
import { loginSelector } from '../redux/selector/userSelector'

export default function Landing() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { loginInfo } = useSelector(loginSelector);

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch(Login({ email: username, password: password }))
    } catch (error) {
      console.error(error);
      // Maneja los errores de inicio de sesión.
    }
  };

  useEffect(() => {
    const match = loginInfo.passwordsMatch;
    match && navigate('/home');
  }, [loginInfo])

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      setIsLoggedIn(true);
      return navigate('/home');
    }
    setIsLoggedIn(false);
  }
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: theme.palette.primary.main,
        opacity: 0.6,
      }}>
        <Box
          component={'img'}
          src={BG}
          alt="background-image"
          sx={{
            height: '100vh',
            width: '100vw',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Box sx={{
        position: 'absolute',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
        <Box>
          <Typography variant="h1" align='center' color='secondary'>Fiction</Typography>
          <Typography variant="subtitle2" align='center' sx={{ color: '#f5f5f5' }}>Lorem ipsum dolor sit amet consectetur.</Typography>
        </Box>
        <Box component="form" sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          backgroundColor: theme.palette.primary.light,
          borderRadius: '4px',
          padding: '32px',
          width: '400px',
        }}>
          
          <Typography variant="h4" align='center' color='secondary' sx={{mb: '24px'}}>Sign In</Typography>
          <TextField id="username" onChange={(e) => setUsername(e.target.value)} label="Nombre de usario" variant="filled" />
          <TextField id="password" onChange={(e) => setPassword(e.target.value)} label="Contraseña" variant="filled" type="password" />
          {/* <Button component={Link} to="/home" variant="contained" color="primary">
            ENTRAR
          </Button> */}
          <Button onClick={handleLogin} variant="contained" color="secondary">
            ENTRAR
          </Button>
          <Button component={Link} to="/register" size="small" variant="text" color="secondary">
            REGISTRARSE
          </Button>
        </Box>
      </Box>
    </>
  )
}
