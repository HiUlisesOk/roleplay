import useUserInfo from '@/app/utils/Hooks/useUserInfoHook/useUserInfo';
import React from 'react'

const UserBio = () => {

	const { userProfile: { bio } } = useUserInfo();
	// console.log()
	return (
		<div className='w-full h-full'>
			<h3 className="font-medium text-gray-900 text-left px-6 border-b pb-5 border-gray-100">Biography</h3>
			<p className="w-full text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150 overflow-auto h-64">
				{bio || 'No biography yet'}
			</p>
		</div>
	)
}

export default UserBio