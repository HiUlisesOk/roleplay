'use client'
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Login, Register } from '../../redux/Features/users/Actions/usersActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { inputStyle } from '../utils/constants/styles';
import { selectRegister } from '@/redux/Features/users/Selectors/userSelectors';
import { ErrorMessage, SuccessMessage } from '../utils/Messages';
import { redirect } from 'next/navigation';
import { failed, loading, success } from '@/redux/constantRedux';
import { LoadingMessage } from '../components/Loading/Loading';



const schema = z.object({
	username: z.string().max(32, { message: "Username must be 32 characters or less" }),
	email: z.string().email().max(32, { message: "Email must be 32 characters or less" }),
	password: z.string()
		.min(8, { message: "Password must be at least 8 characters" })
		.refine(password => /(?=.*[0-9])/.test(password), {
			message: "Password must contain at least one number",
		}),
});

type FormData = z.infer<typeof schema>;


const RegisterForm = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
		resolver: zodResolver(schema)
	});
	const registerInfo = useSelector(selectRegister);
	// console.log(registerInfo);

	const dispatch = useDispatch<AppDispatch>();
	const response = useSelector((state: RootState) => state.Login);
	const [data, setData] = React.useState({ email: "", password: "" });

	const onSubmit = async (data: FormData) => {
		dispatch(Register(data));
		setData(data);
	};


	useEffect(() => {
		if (registerInfo?.status === "succeeded") {
			const { email, password } = { ...data };
			// console.log("Login", { email, password })
			dispatch(Login({ email, password }));
			redirect("/home");
		}
	}, [registerInfo?.status, data, dispatch])


	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col items-center"
		>

			<input
				type="text"
				placeholder="Username"
				className={inputStyle}
				{...register('username')}
				required
			/>


			<input
				type="text"
				placeholder="Email"
				className={inputStyle}
				{...register('email')}
				required
			/>


			<input
				type="password"
				placeholder="Password"
				className={inputStyle}
				{...register('password')}
				required
			/>

			<input
				type="submit"
				className="bg-primary text-neutrals-onPrimary px-4 py-2 rounded-md cursor-pointer w-full max-w-64"
			/>

			{errors.username && <span className="text-accent-error">{errors.username.message}</span>}
			{errors.email && <span className="text-accent-error">{errors.email.message}</span>}
			{errors.password && <span className="text-accent-error">{errors.password.message}</span>}
			{registerInfo?.status === failed && <ErrorMessage message={registerInfo.error} />}
			{registerInfo?.status === success && <SuccessMessage message={registerInfo.error} />}
			{registerInfo?.status === loading && <LoadingMessage />}
		</form>
	);
};

export default RegisterForm;

