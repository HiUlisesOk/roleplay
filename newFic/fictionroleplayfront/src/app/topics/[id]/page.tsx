'use client'
import React, { Suspense, lazy, useEffect, useState } from 'react';
import WithAuth from '../../utils/WithAuth';
import { user, admin } from '../../utils/constants/roles';
import Navbar from '../../components/Navbar/Navbar';
import TopBar from '../../components/TopBar/TopBar';
import { IsExpandedProvider } from '../../utils/context/IsExpanded';
import AvatarSkeleton from '@/app/components/Skeletons/AvatarSkeleton';
import UserInfo from '@/app/components/UserInfo/UserInfo';
import useUserInfo from '@/app/utils/Hooks/useUserInfoHook/useUserInfo';
import { useRouter } from 'next/navigation'
import useGetTopicsById from '@/app/utils/Hooks/useUserInfoHook/useGetTopicsById';
import { getTimeDifferenceString } from '@/app/utils/functions/DateFunctions';


const Avatar: any = lazy(() => import('../../components/Avatar/Avatar'));


const Topics: React.FC = () => {

	const navigate = useRouter();

	const { loggedInUserId, routeParamId, userProfile } = useUserInfo();

	const { topic, posts } = useGetTopicsById(routeParamId);

	// 	{
	//     "topic": {
	//         "ID": 1,
	//         "title": "Mi primer topic",
	//         "author": "P!nk",
	//         "authorID": 1,
	//         "postCount": 1,
	//         "lastAuthor": null,
	//         "lastAuthorID": null,
	//         "image": "https://via.placeholder.com/112x240",
	//         "createdAt": "2024-02-14T20:09:24.043Z",
	//         "updatedAt": "2024-02-14T20:09:24.043Z",
	//         "deletedAt": null
	//     },
	//     "posts": [
	//         {
	//             "ID": 1,
	//             "content": "Hola! 😎",
	//             "author": "P!nk",
	//             "authorID": 1,
	//             "topicID": 1,
	//             "createdAt": "2024-02-14T20:09:24.054Z",
	//             "updatedAt": "2024-02-14T20:09:24.088Z",
	//             "deletedAt": null,
	//             "UserID": 1,
	//             "TopicID": 1
	//         }
	//     ]
	// }

	console.log('TopicsById =>', topic, posts);

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

					{/* <ProfileBanner profileBanner={bannerImg} /> */}

					<div onClick={() => { navigate.back() }} className="flex flex-row items-center justify-center cursor-pointer">🔙 Go Back</div>

					<div className="inset-8 p-4 flex flex-row items-center px-12 w-full">

						<div className="w-1/2 flex flex-row items-center ">
							<Suspense fallback={<AvatarSkeleton size={190} />}>

								<Avatar
									AvatarOnly
									src={userAvatar}
									size={100}
								/>

							</Suspense>

							<div className="flex flex-col">
								<UserInfo
									UserName
									UserRank
									UserConnect
								/>
							</div>
						</div>

						<div className="flex flex-col w-full">

							<UserInfo
								UserDataTable
							/>
						</div>

					</div>
					<div className='w-full flex flex-col justify-between font-bold text-left gap-1 text-neutrals-onBackground p-4'>
						<p className="w-full flex items-center bg-neutrals-background text-4xl py-6">{topic?.title || 'Loading'}</p>
						{posts?.map((post: any, index: number) => {
							return (
								<div className='w-full h-full'>
									<h3 className="font-medium text-gray-900 text-left border-b pb-5 border-gray-100">Posted by {post?.author} - {getTimeDifferenceString(post?.createdAt)}</h3>
									<p className="w-full text-gray-600 py-4  pr-3 block hover:bg-gray-100 transition duration-150 overflow-auto h-64">
										{post?.content || 'No post yet.'}
									</p>
								</div>
							)
						})}


					</div>
				</div>

			</IsExpandedProvider>
		</div>

	);
};

export default WithAuth(Topics, [admin, user]);
