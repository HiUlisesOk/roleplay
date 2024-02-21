'use client'
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Login } from '../../redux/Features/users/Actions/usersActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { redirect, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { inputStyle } from '../utils/constants/styles';
import { ErrorMessage, InfoMessage } from '../utils/Messages';
import Link from 'next/link';


const schema = z.object({
	email: z.string().max(32, { message: "Email must be 32 characters or less" }),
	password: z.string()
		.min(8, { message: "Password must be at least 8 characters" })
		.refine(password => /(?=.*[0-9])/.test(password), {
			message: "Password must contain at least one number",
		}),
});

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
	const router = useRouter();

	const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
		resolver: zodResolver(schema)
	});

	const dispatch = useDispatch<AppDispatch>();
	const { userInfo, error } = useSelector((state: RootState) => state.Login);


	const loginCookies = Cookies.get('Login');
	useEffect(() => {
		if (userInfo?.passwordsMatch) {
			redirect('/home');
		}
	}, [userInfo, router]);

	useEffect(() => {
		if (loginCookies) {
			redirect('/home');
		}
	}, [loginCookies])

	const onSubmit = async (data: FormData) => {
		dispatch(Login(data));

	};


	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">

			<input
				type="text" {...register('email')}
				placeholder="Email or Username"
				className={inputStyle}
			/>

			{errors.email && <span className="text-accent-error text-bold my-2 border border-bottom">{errors.email.message}</span>}

			<input
				type="password"
				{...register('password')}
				placeholder="Password"
				className={inputStyle}
			/>

			{errors.password && <span className="text-accent-error text-bold my-2 border border-bottom">{errors.password.message}</span>}

			<input
				type="submit"
				className="bg-primary text-neutrals-onPrimary px-4 py-2 rounded-md cursor-pointer w-full max-w-64"
			/>

			{error && <ErrorMessage message={error} />}
			{error && <Link href="/register" passHref> <InfoMessage message="No tienes una cuenta? Haz click aquí para registrarte." /></Link>}

		</form>
	);
};

export default LoginForm;