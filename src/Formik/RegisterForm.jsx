import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Typography, TextField, Button, ThemeProvider, createTheme } from '@mui/material';
import BG from '../img/medieval_street.jpg'
const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			dark: '#171312',
			main: '#1F1B1A',
			light: '#312E2D',
			contrastText: '#f5f5f5',
		},
		secondary: {
			main: '#1CB251',
			contrastText: '#f5f5f5',
		},
		background: {
			default: '#171312',
			paper: '#1f1b1a',
		},
		text: {
			primary: '#F5F5F5',
			secondary: '#ECEBEB',
			disabled: '#DCDCDC',
		},
	},
	typography: {
		fontFamily: 'Poppins',
	},
});

const RegistrationForm = () => {
	const initialValues = {
		username: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	const validationSchema = Yup.object().shape({
		username: Yup.string().required('Username is required'),
		email: Yup.string().email('Invalid email').required('Email is required'),
		password: Yup.string()
			.min(6, 'Password must be at least 6 characters')
			.required('Password is required'),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password'), null], 'Passwords must match')
			.required('Confirm Password is required')
	});

	const handleSubmit = (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 400);
	};

	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					display: 'flex',
					height: '100vh',
					backgroundColor: 'rgba(255,255,255,0.8)',
				}}
			>
				<Box
					sx={{
						flex: 1,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: 'primary.main',
						color: 'text.primary',
						padding: '2rem',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${BG})`,

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
						backgroundColor: 'background.default',
					}}
				>
					<Box
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
							Sign Up
						</Typography>

						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}
						>
							<Form>
								<Box sx={{ mb: 2 }}>
									<Field
										as={TextField}
										id="username"
										name="username"
										label="Username"
										variant="filled"
										fullWidth
										sx={{ '& .MuiFilledInput-root': { borderRadius: '4px' } }}
									/>
									<ErrorMessage
										name="username"
										component={Typography}
										color="error"
										sx={{ mt: 1 }}
									/>
								</Box>

								<Box sx={{ mb: 2 }}>
									<Field
										as={TextField}
										id="email"
										name="email"
										label="Email"
										variant="filled"
										fullWidth
										sx={{ '& .MuiFilledInput-root': { borderRadius: '4px' } }}
									/>
									<ErrorMessage
										name="email"
										component={Typography}
										color="error"
										sx={{ mt: 1 }}
									/>
								</Box>

								<Box sx={{ mb: 2 }}>
									<Field
										as={TextField}
										id="password"
										name="password"
										label="Password"
										variant="filled"
										type="password"
										fullWidth
										sx={{ '& .MuiFilledInput-root': { borderRadius: '4px' } }}
									/>
									<ErrorMessage
										name="password"
										component={Typography}
										color="error"
										sx={{ mt: 1 }}
									/>
								</Box>

								<Box sx={{ mb: 2 }}>
									<Field
										as={TextField}
										id="confirmPassword"
										name="confirmPassword"
										label="Confirm Password"
										variant="filled"
										type="password"
										fullWidth
										sx={{ '& .MuiFilledInput-root': { borderRadius: '4px' } }}
									/>
									<ErrorMessage
										name="confirmPassword"
										component={Typography}
										color="error"
										sx={{ mt: 1 }}
									/>
								</Box>

								<Button type="submit" variant="contained" color="secondary" fullWidth>
									Register
								</Button>
							</Form>
						</Formik>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default RegistrationForm;
