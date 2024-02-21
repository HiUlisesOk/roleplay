import useGetMyActivity from '@/app/utils/Hooks/FetchDataHooks/FetchUserActivity';
import useUserInfo from '@/app/utils/Hooks/useUserInfoHook/useUserInfo';
import React from 'react'
import Avatar from '../Avatar/Avatar';
import { getTimeDifferenceString } from '@/app/utils/functions/DateFunctions';

const RecentActivity = () => {

	const { userProfile: { ID } } = useUserInfo();

	const userActivity = useGetMyActivity(ID);

	return (
		<div className="w-full">
			<h3 className="font-medium text-gray-900 text-left px-6 pb-5">Recent activites</h3>


			{userActivity?.length > 0 && userActivity.map((activity: any, index: number) => {
				return (

					index < 5 && (
						<div className="w-full flex flex-col justify-center overflow-hidden text-sm border-t border-gray-100 text-gray-600 py-2 pl-4 pr-1">
							<div className="w-full h-full flex flex-row items-center content-between justify-start hover:bg-gray-100 transition duration-150">
								<Avatar AvatarOnly src={activity?.avatar} size={30} />
								<span className="px-1 text-primary">{activity?.name}</span><span className="px-1">{activity?.info}</span>
								<span className="text-xs text-neutrals-lessOpacity-secondary ml-auto">{getTimeDifferenceString(activity?.createdAt)}</span>
							</div>
						</div>
					)

				)
			})}

		</div>
	)
}

export default RecentActivity