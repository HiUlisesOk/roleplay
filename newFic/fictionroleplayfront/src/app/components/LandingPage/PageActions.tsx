import React from 'react'
import { landingPageActionsType } from '../../../types/ladingPageTypes'
import Link from 'next/link'

const PageActions = ({ registerButtonText, loginButtonText }: landingPageActionsType) => {
	return (
		<div className='flex flex-row gap-2'>
			<Link href='/register' passHref>
				<button className="bg-primary hover:bg-blue-700 text-neutrals-onPrimary font-bold py-2 px-4 rounded">
					{registerButtonText}
				</button>
			</Link>
			<Link href='/login' passHref>
				<button className="bg-secondary hover:bg-green-700 text-neutrals-onSecondary font-bold py-2 px-4 rounded">
					{loginButtonText}
				</button>
			</Link>
		</div>
	)
}

export default PageActions