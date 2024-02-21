'use client'
import React, { useContext, useState } from 'react';
import UserInfoComponent from './UserInfoComponent';
import useUserInfo from '@/app/utils/Hooks/useUserInfoHook/useUserInfo';


const UserInfo: any = ({
	UserName,
	UserRank,
	UserConnect,
	UserSocialMedia,
	UserDataTable,
	order = { UserName: 1, UserRank: 2, UserConnect: 3, UserDataTable: 4, UserSocialMedia: 5 }
}: any) => {

	const { userProfile: { username, firstName, lastName, birthDate } } = useUserInfo();

	// const { username } = userProfile;


	const components = [
		{ component: UserName && <UserInfoComponent.UserName username={username} />, order: order.UserName },
		{ component: UserRank && <UserInfoComponent.UserRank />, order: order.UserRank },
		{ component: UserConnect && <UserInfoComponent.UserConnect />, order: order.UserConnect },
		{ component: UserSocialMedia && <UserInfoComponent.UserSocialMedia />, order: order.UserSocialMedia },
		{ component: UserDataTable && <UserInfoComponent.UserDataTable username={username} firstName={firstName} lastName={lastName} birthDate={birthDate} />, order: order.UserDataTable }
	];

	components.sort((a, b) => a.order - b.order);



	return (

		<UserInfoComponent>
			{components.map((item, index) => <React.Fragment key={index}>{item.component}</React.Fragment>)}
		</UserInfoComponent>

	);
};

export default UserInfo;
