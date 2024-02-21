import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { AuthToken } from './AuthToken';
import { allUsers, hidenForUserLogged, user } from './constants/roles';
import { redirect } from 'next/navigation';
import Loading from '../components/Loading/Loading';

type Role = {
	rolename: string;
	value: number;
};

type Roles = Role[];

const WithAuth = (WrappedComponent: React.ComponentType<any>, roles: Array<number>) => {
	return (props: React.JSX.IntrinsicAttributes) => {
		const userCookies = Cookies.get('userInfo');
		const token = Cookies.get('userToken');
		const allUsersAllowed = roles.includes(allUsers)
		const hidePageForLoggedUsers = roles.includes(hidenForUserLogged)

		const [isLoading, setIsLoading] = useState(true);

		const privateAccesPage = () => {
			if (!token) {
				throw new Error('No token found');
			} else if (userCookies) {
				AuthToken(token);
				const userRoles = JSON.parse(userCookies).roles;
				for (let element of userRoles) {
					if (roles.includes(element?.value)) {
						return true;
					}
				};
			}
			return false;
		}

		useEffect(() => {
			try {
				if (hidePageForLoggedUsers && token) {
					setIsLoading(false)
					redirect("/home")
				};

				let userAccess = allUsersAllowed || privateAccesPage();

				if (!userAccess) {
					throw new Error('You are not authorized to view this page')
				} else {
					setIsLoading(false)
				}
			} catch (error) {
				console.error("⚠️ Error: You are not authorized to view this page ", error)
				setIsLoading(false)
				redirect("/login");
			}
		}, []);

		if (isLoading) {
			return <Loading />;
		}

		return <WrappedComponent {...props} />;
	};
};

export default WithAuth;