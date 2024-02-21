import { LimitCharacters } from '@/app/utils/functions/limitCharacters'
import React from 'react'

const UserName = ({ username }: { username: string }) => { return (<h1 className="font-bold w-full text-left text-3xl text-gray-900 ml-4">{LimitCharacters(username, 15)}</h1>) }

const UserRank = () => { return (<p className="text-left text-sm text-primary font-medium w-full ml-4">Warrior of The North</p>) }

const UserConnect = () => { return (<span className="text-sm w-full ml-4">@pantazisoft</span>) }

const UserSocialMedia = () => {
	const userSocialMediaStyles = "text-neutrals-onBackground hover:text-gray-900 hover:bg-neutrals-surface rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"

	return (
		<div className="flex justify-between items-center my-5 px-6">
			<a href="" className={userSocialMediaStyles}>Facebook</a>
			<a href="" className={userSocialMediaStyles}>Twitter</a>
			<a href="" className={userSocialMediaStyles}>Instagram</a>
			<a href="" className={userSocialMediaStyles}>Email</a>
		</div>
	)
}

const UserDataTable = ({ username, firstName, lastName, birthDate }: any) => {


	return (
		<div className='relative rounded-lg w-full h-full flex flex-col items-start justify-end text-xs'>
			<div className='w-full flex flex-row justify-between font-bold text-left gap-1 text-neutrals-onBackground'>
				<p className="w-full flex items-center px-2 p-1 bg-neutrals-surface">{LimitCharacters('Name', 33)}</p>
				<p className="w-full flex items-center px-2 p-1 bg-neutrals-surface">{LimitCharacters('Lastname', 33)}</p>
				<p className="w-full flex items-center px-2 p-1 bg-neutrals-surface">{LimitCharacters('Birthdate', 33)}</p>
				<p className="w-full flex items-center px-2 p-1 bg-neutrals-surface">{LimitCharacters('Last seen', 33)}</p>
			</div>
			<div className='w-full flex flex-row justify-between gap-1 font-light text-left text-neutrals-onBackground'>
				<p className="w-full flex items-center p-1 px-2">{LimitCharacters(firstName, 33) || 'No name yet.'}</p>
				<p className="w-full flex items-center p-1 px-2">{LimitCharacters(lastName, 33) || 'No lastname.'}</p>
				<p className="w-full flex items-center p-1 px-2">{LimitCharacters(birthDate, 33) || 'No date yet.'}</p>
				<p className="w-full flex items-center p-1 px-2">{LimitCharacters('12/12/2020', 33) || 'Not seen before.'}</p>
			</div>

			<div className='w-full flex flex-row justify-between font-bold text-left gap-1 text-neutrals-onBackground'>
				<p className="w-full flex items-center px-2 p-1 bg-neutrals-surface">{LimitCharacters('Battles', 33)}</p>
				<p className="w-full flex items-center px-2 p-1 bg-neutrals-surface">{LimitCharacters('Topics', 33)}</p>
				<p className="w-full flex items-center px-2 p-1 bg-neutrals-surface">{LimitCharacters('Posts', 33)}</p>
				<p className="w-full flex items-center px-2 p-1 bg-neutrals-surface">{LimitCharacters('Raking', 33)}</p>
			</div>
			<div className='w-full flex flex-row justify-between gap-1 font-light text-left text-neutrals-onBackground'>
				<p className="w-full flex items-center p-1 px-2">{LimitCharacters('100', 33)}</p>
				<p className="w-full flex items-center p-1 px-2">{LimitCharacters('30', 33)}</p>
				<p className="w-full flex items-center p-1 px-2">{LimitCharacters('1500', 33)}</p>
				<p className="w-full flex items-center p-1 px-2">{LimitCharacters('200', 33)}</p>
			</div>
		</div>
	)
}

const UserInfoComponent = ({ children }: { children: React.ReactNode }) => {
	return (
		<>{children}</>
	)
}

UserInfoComponent.UserName = UserName
UserInfoComponent.UserRank = UserRank
UserInfoComponent.UserConnect = UserConnect
UserInfoComponent.UserSocialMedia = UserSocialMedia
UserInfoComponent.UserDataTable = UserDataTable

export default UserInfoComponent