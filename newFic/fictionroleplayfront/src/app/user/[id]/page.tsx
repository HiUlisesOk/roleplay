'use client'
import React, { Suspense, lazy, useEffect, useState } from 'react';
import WithAuth from '../../utils/WithAuth';
import { user, admin } from '../../utils/constants/roles';
import Navbar from '../../components/Navbar/Navbar';
import TopBar from '../../components/TopBar/TopBar';
import { IsExpandedProvider } from '../../utils/context/IsExpanded';
import ProfileBanner from '@/app/components/Banners/ProfileBanner';

import AvatarSkeleton from '@/app/components/Skeletons/AvatarSkeleton';
import User from '@/app/components/UserInfo/User';
import UserInfo from '@/app/components/UserInfo/UserInfo';
import useUserInfo from '@/app/utils/Hooks/useUserInfoHook/useUserInfo';
import { EditIcon } from '@/app/utils/Icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation'


const Avatar: any = lazy(() => import('../../components/Avatar/Avatar'));


const UserProfile: React.FC = () => {

	const navigate = useRouter();


	const { loggedInUserId, routeParamId, userProfile } = useUserInfo();

	const { profilePicture: userAvatar, ID: userId, username, profileBanner: bannerImg } = userProfile;


	return (

		<div className="flex flex-row">
			<IsExpandedProvider>

				<Navbar
					HideButton
					NavAvatar
					NavItem
				/>


				<div className="w-full min-h-max bg-neutrals-background text-onBackground">

					<TopBar
						SearchBar
						Currency
						Notification
						Status
						UserInfo
						ShowButton
					/>

					<ProfileBanner profileBanner={bannerImg} />

					<div onClick={() => { navigate.back() }} className="flex flex-row items-center justify-center cursor-pointer">🔙 Go Back</div>

					<div className="inset-8 p-4 flex flex-row items-center px-12 w-full">

						<div className="w-1/2 flex flex-row items-center ">
							<Suspense fallback={<AvatarSkeleton size={190} />}>
								{loggedInUserId == routeParamId ? <Avatar
									AvatarUpdate
									src={userAvatar}
									size={190}
									id={userId}
								/>
									:
									<Avatar
										AvatarOnly
										src={userAvatar}
										size={160}
									/>
								}
							</Suspense>

							<div className="flex flex-col">
								<UserInfo
									UserName
									UserRank
									UserConnect
								/>
							</div>
							{loggedInUserId == routeParamId && <Link href={`/edituser/${userId}`}><span className='flex text-primary justify-self-start h-full cursor-pointer'><EditIcon /></span></Link>}
						</div>

						<div className="flex flex-col w-1/2">
							<UserInfo
								UserDataTable
							/>
						</div>

					</div>

					<User />

				</div>

			</IsExpandedProvider>
		</div>

	);
};

export default WithAuth(UserProfile, [admin, user]);
