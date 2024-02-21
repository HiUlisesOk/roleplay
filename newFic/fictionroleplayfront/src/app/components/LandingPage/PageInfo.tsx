import React from 'react'
import { PageInfoType } from '../../../types/ladingPageTypes'

const PageInfo = ({ pageNameFirstWord, pageNameSecondWord, PageSubtitle, PageDescription }: PageInfoType) => {
	return (
		<div className='w-1/2 text-neutrals-onPrimary '>
			<h1 className="text-5xl sm:text-8xl lg:text-9xl xl:text-9xl font-bold sm:mb-4 lg:mb-2 leading-3"><span className="text-primary">{pageNameFirstWord} </span>{pageNameSecondWord}</h1>
			<h3 className="text-2xl  font-bold sm:mb-4 lg:mb-0">{PageSubtitle}</h3>
			<p className="sm:mb-4 lg:mb-4">{PageDescription}</p>
		</div>
	)
}

export default PageInfo