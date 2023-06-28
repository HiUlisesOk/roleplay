import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { Box, Typography, TextField, Button, InputAdornment } from '@mui/material';
import BG from '../img/medieval_street.jpg'
import { useDispatch } from 'react-redux';
import { Register } from '../redux/actions/userActions';


const RegistrationForm = () => {
	const dispatch = useDispatch()
	const initialValues = {
		username: '',
		email: '',
		password: '',
	};

	const validationSchema = Yup.object().shape({
		username: Yup.string().required('Username is required')
			.min(3, 'Username must have at least 1 character')
			.max(20, 'Username can have at most 20 characters'),
		email: Yup.string().email('Invalid email').required('Email is required'),
		password: Yup.string()
			.min(6, 'Password must be at least 6 characters')
			.required('Password is required'),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password'), null], 'Passwords must match')
			.required('Confirm Password is required')
	});

	const handleSubmit = (values, { setSubmitting }) => {
		dispatch(Register(values))
		setSubmitting(false)
	};



	return (
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
					{({ errors, touched }) => (
						<Form>
							<Box sx={{ mb: 2 }}>
								<Field
									as={TextField}
									id="username"
									name="username"
									label={touched.username && errors.username ? (
										<Typography variant="caption" color="error" sx={{ mt: 1 }}>
											{errors.username}
										</Typography>
									) : 'Username'}
									variant="filled"
									fullWidth
									sx={{ 
										'& .MuiFilledInput-root': { borderRadius: '4px' },
									}}
									error={touched.username && errors.username}
								/>

							</Box>

							<Box sx={{ mb: 2 }}>
								<Field
									as={TextField}
									id="email"
									name="email"
									label={touched.email && errors.email ? (
										<Typography variant="caption" color="error" sx={{ mt: 1 }}>
											{errors.email}
										</Typography>
									) : 'Email'}
									variant="filled"
									fullWidth
									sx={{ '& .MuiFilledInput-root': { borderRadius: '4px' } }}
									error={touched.email && errors.email}
								/>

							</Box>

							<Box sx={{ mb: 2 }}>
								<Field
									as={TextField}
									id="password"
									name="password"
									label={touched.password && errors.password ? (
										<Typography variant="caption" color="error" sx={{ mt: 1 }}>
											{errors.password}
										</Typography>
									) : 'Password'}
									variant="filled"
									type="password"
									fullWidth
									sx={{ '& .MuiFilledInput-root': { borderRadius: '4px' } }}
									error={touched.password && errors.password}
								/>
							</Box>

							<Box sx={{ mb: 2 }}>
								<Field
									as={TextField}
									id="confirmPassword"
									name="confirmPassword"
									label={touched.confirmPassword && errors.confirmPassword ? (
										<Typography variant="caption" color="error" sx={{ mt: 1 }}>
											{errors.confirmPassword}
										</Typography>
									) : 'Confirm Password'}
									variant="filled"
									type="password"
									fullWidth
									sx={{ '& .MuiFilledInput-root': { borderRadius: '4px' } }}
									error={touched.confirmPassword && errors.confirmPassword}
								/>

							</Box>

							<Button type="submit" variant="contained" color="secondary" fullWidth sx={{mb: 2}}>
								Register
							</Button>
							<Button component={Link} to="/login" variant="text" color="secondary" fullWidth>
            				LOGIN
          					</Button>
						</Form>
					)}
				</Formik>

			</Box>
	);
};

export default RegistrationForm;
