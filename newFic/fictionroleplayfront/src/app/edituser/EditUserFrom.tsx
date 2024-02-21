'use client'
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectRegister } from '@/redux/Features/users/Selectors/userSelectors';
import { redirect, useParams } from 'next/navigation';
import { failed, loading, success } from '@/redux/constantRedux';
import { AppDispatch, RootState } from '@/redux/store';
import { inputStyle } from '../utils/constants/styles';
import { ErrorMessage, SuccessMessage } from '@/app/utils/Messages';
import { LoadingMessage } from '@/app/components/Loading/Loading';
import useGetMyInfo from '@/app/utils/Hooks/FetchDataHooks/FetchMyInfo';
import useGetUserById from '@/app/utils/Hooks/FetchDataHooks/FetchOthersUserInfo';
import { updateUser } from '@/redux/Features/users/Actions/usersActions';
import { updateUserType } from '@/types/userTypes';


const EditUserForm = () => {

	const { id: routeParamId } = useParams();

	const { ID: loggedInUserId } = useGetMyInfo();

	const userProfile = (loggedInUserId == routeParamId) ? useGetMyInfo() : useGetUserById(routeParamId);


	const { ID: userId, username, firstName, lastName, birthDate, email, bio, } = userProfile;

	const dispatch = useDispatch<AppDispatch>();

	const [data, setData] = React.useState<updateUserType>({
		ID: userId,
		username: username,
		firstName: firstName || '',
		lastName: lastName || '',
		birthDate: birthDate || '',
		email: email || '',
		bio: bio || '',
	})


	const schema = z.object({
		ID: z.number(),
		username: z.string().max(32, { message: "Username must be 32 characters or less" }),
		firstName: z.string().max(32, { message: "firstName must be 32 characters or less" }),
		lastName: z.string().max(32, { message: "lastName must be 32 characters or less" }),
		birthDate: z.string(),
		email: z.string().email().max(32, { message: "Email must be 32 characters or less" }),
		bio: z.string().max(1000, { message: "Biography must be 1000 characters or less" }),
	});

	type FormData = z.infer<typeof schema>;

	const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	useEffect(() => {
		setValue('ID', userId);
		setValue('username', username);
		setValue('firstName', firstName || '');
		setValue('lastName', lastName || '');
		setValue('birthDate', birthDate || '');
		setValue('email', email || '');
		setValue('bio', bio || '');
	}, [userProfile]);


	const onSubmit = async (data: FormData) => {
		dispatch(updateUser(data));
		setData(data);
		// console.log(data)
	};



	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col items-center"
		>

			<div className='relative rounded-lg w-3/4 h-full grid grid-cols-2 items-start justify-end p-6'>
				<div className='w-full flex flex-col justify-around items-start font-bold text-left gap-1 text-neutrals-onBackground'>
					<label className="text-neutrals-text pl-2">Username: </label>
					<input
						type="text"
						placeholder="Username"
						className={inputStyle}
						{...register('username')}
						required
					/>
				</div>

				<div className='w-full flex flex-col justify-around items-start font-bold text-left gap-1 text-neutrals-onBackground'>
					<label className="text-neutrals-text pl-2">First name: </label>
					<input
						type="text"
						placeholder="firstName"
						className={inputStyle}
						{...register('firstName')}
						required
					/>
				</div>

				<div className='w-full flex flex-col justify-around items-start font-bold text-left gap-1 text-neutrals-onBackground'>
					<label className="text-neutrals-text pl-2">Last name: </label>
					<input
						type="text"
						placeholder="Last name"
						className={inputStyle}
						{...register('lastName')}
						required
					/>
				</div>

				<div className='w-full flex flex-col justify-around items-start font-bold text-left gap-1 text-neutrals-onBackground'>
					<label className="text-neutrals-text pl-2">Email: </label>
					<input
						type="email"
						placeholder="Email"
						className={inputStyle}
						{...register('email')}
						required
					/>
				</div>

				<div className='w-full flex flex-col justify-around items-start font-bold text-left gap-1 text-neutrals-onBackground'>
					<label className="text-neutrals-text pl-2">Birthdate: </label>
					<input
						type="text"
						placeholder="Enter your birthdate"
						className={inputStyle}
						{...register('birthDate')}
						required
					/>
				</div>

				<div></div>

				<div className='w-full flex flex-col justify-around items-start font-bold text-left gap-1 text-neutrals-onBackground'>
					<label className="text-neutrals-text pl-2">Bio: </label>

					<textarea
						rows={5}
						cols={70}
						placeholder="Enter your bio"
						className={inputStyle}
						{...register('bio')}
						required
					/>
				</div>

			</div>

			<input
				type="submit"
				className="bg-primary text-neutrals-onPrimary px-4 py-2 rounded-md cursor-pointer w-full max-w-64"
			/>

			{errors.username && <span className="text-accent-error">{errors.username.message}</span>}
			{errors.email && <span className="text-accent-error">{errors.email.message}</span>}
			{/* {errors.password && <span className="text-accent-error">{errors.password.message}</span>} */}
			{/* {registerInfo?.status === failed && <ErrorMessage message={registerInfo.error} />}
			{registerInfo?.status === success && <SuccessMessage message={registerInfo.error} />}
			{registerInfo?.status === loading && <LoadingMessage />} */}
		</form>
	);
};

export default EditUserForm;

