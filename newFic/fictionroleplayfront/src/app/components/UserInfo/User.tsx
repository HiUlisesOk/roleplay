import React from 'react'
import RecentActivity from './RecentActivity'
import UserBio from './UserBio'

const User = () => {

	return (

		<div className="relative shadow rounded-lg w-full mx-auto">
			<div className='flex flex-row gap-2 p-4 bg-neutrals-surface'>
				<RecentActivity />
				<UserBio />
			</div>
		</div>



	)
}

export default User