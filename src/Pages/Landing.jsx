import { Box, Typography, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";
import BG from '../img/bg.jpg'
import React, { useDebugValue, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../redux/actions/userActions'
import { loginSelector } from '../redux/selector/userSelector'

export default function Landing() {
  const dispatch = useDispatch();
  const { loginInfo } = useSelector(loginSelector);

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch(Login({ email: 'uesquivel95@gmail.com', password: 'Pass.001' }))
      console.log(loginInfo)
      // const response = await axios.post('/api/login', { username, password });
      // localStorage.setItem('token', response.data.token);
      // Redirige a la página de inicio.
      // response && navigate('/home');
    } catch (error) {
      console.error(error);
      // Maneja los errores de inicio de sesión.
    }
  };


  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#1CB251',
      }}>
        <Box
          component={'img'}
          src={BG}
          alt="background-image"
          sx={{
            height: '100vh',
            width: '100vw',
            objectFit: 'cover',
            opacity: 0.8,
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
          <Typography variant="h3" align='center' sx={{ color: '#f5f5f5' }}>ROLEPLAY</Typography>
          <Typography variant="subtitle2" align='center' sx={{ color: '#f5f5f5' }}>Lorem ipsum dolor sit amet consectetur.</Typography>
        </Box>
        <Box component="form" sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1
        }}>
          <TextField id="username" label="Nombre de usario" variant="filled" />
          <TextField id="password" label="Contraseña" variant="filled" />
          {/* <Button component={Link} to="/home" variant="contained" color="primary">
            ENTRAR
          </Button> */}
          <Button onClick={handleLogin} variant="contained" color="primary">
            ENTRAR
          </Button>
          <Button component={Link} to="/register" size="small" variant="text" color="primary">
            REGISTRARSE
          </Button>
        </Box>
      </Box>
    </>
  )
}
