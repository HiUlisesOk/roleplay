'use client'

import React from 'react';
import RegisterForm from './RegisterForm';
import WithAuth from '../utils/WithAuth';
import { allUsers, hidenForUserLogged } from '../utils/constants/roles';

const RegisterPage: React.FC = () => {
	return (
		<div
			className="flex h-screen w-screen flex-col items-center justify-between"
			style={{ backgroundImage: "url('/landingPage/landingPageBackground.jpg')", backgroundSize: "cover" }}>

			<div className="shadow-lg bg-neutrals-lessOpacity-onPrimary bg-opacity-90 h-screen w-screen p-24">
				<div className="flex items-center justify-center">
					<div className="max-w-md w-full px-6 py-12">
						<h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>
						<RegisterForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WithAuth(RegisterPage, [allUsers, hidenForUserLogged]);

