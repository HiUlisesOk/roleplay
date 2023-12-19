import RegistrationForm from "../Formik/RegisterForm";
import React, { useEffect, useState } from 'react';
import { Box, Typography, ThemeProvider, createTheme, } from '@mui/material';
import BG from '../img/13.jpg';
import { registerSelector } from "../redux/selector/userSelector";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Home() {
    const navigate = useNavigate();

    const { registerState } = useSelector(registerSelector);
    const [message, setMessage] = useState('');
    // console.log(registerState?.message);

    useEffect(() => {
        registerState?.message && setMessage(registerState?.message);
        if (registerState?.message) {
            setTimeout(() => {
                navigate('/home');
                window.location.reload();
            }, 2500);
        }
    }, [registerState?.message]);


    return (
        <Box
            sx={{
                display: 'flex',
                height: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${BG})`,
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'text.primary',
                    padding: '2rem',
                }}
            >
                <Box>
                    <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
                        Welcome to	<span style={{ color: '#1CB251', fontWeight: 'bold' }}>Fiction</span>
                    </Typography>
                    <Typography variant="body1">
                        A unique and immersive role-playing experience that combines elements of fantasy, literature, games, manga, music, and anime to create a one-of-a-kind journey through enchanted lands.
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {message ? <Box
                    sx={{
                        width: '400px',
                        p: 4,
                        backgroundColor: 'primary.main',
                        borderRadius: '4px',
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                        textAlign: 'center'
                    }}
                >
                    <Typography variant="h4" align="center" sx={{ color: 'secondary.main', mb: 3 }}>
                        {message}
                    </Typography>
                </Box> : <RegistrationForm />}

            </Box>
        </Box>


    );
}