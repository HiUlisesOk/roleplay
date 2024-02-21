import { cardsLimit } from '@/app/utils/functions/helperFunction';
import React, { useContext, useEffect, useState } from 'react'
import ShowMoreButton from '../../Buttons/ShowMore';
import { IsExpandedContext } from '@/app/utils/context/IsExpanded';

const useCardLimit = (cardsArray: Array<any>) => {
	const { isExpanded } = useContext(IsExpandedContext)

	const [cardsLimitToShow, setCardsLimitToShow] = useState(0);
	const [showMoreCards, setShowMoreCards] = useState(false);


	useEffect(() => {
		const cardsLimitNumber = cardsLimit(isExpanded, cardsArray)
		setCardsLimitToShow(cardsLimitNumber)
		if (cardsArray?.length <= 4) setCardsLimitToShow(cardsArray?.length)
	}, [isExpanded, cardsArray])


	return { cardsLimitToShow, showMoreCards, setShowMoreCards }
}

export default useCardLimit