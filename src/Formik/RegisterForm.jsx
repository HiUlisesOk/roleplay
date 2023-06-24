import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
		<div>
			<h1>Registration Form</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form>
					<div>
						<label htmlFor="username">Username:</label>
						<Field type="text" name="username" />
						<ErrorMessage name="username" component="div" />
					</div>

					<div>
						<label htmlFor="email">Email:</label>
						<Field type="email" name="email" />
						<ErrorMessage name="email" component="div" />
					</div>

					<div>
						<label htmlFor="password">Password:</label>
						<Field type="password" name="password" />
						<ErrorMessage name="password" component="div" />
					</div>

					<div>
						<label htmlFor="confirmPassword">Confirm Password:</label>
						<Field type="password" name="confirmPassword" />
						<ErrorMessage name="confirmPassword" component="div" />
					</div>

					<button type="submit">Register</button>
				</Form>
			</Formik>
		</div>
	);
};

export default RegistrationForm;
