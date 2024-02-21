
import React from 'react'
import Card from '../Card/Card';
import ShowMoreButton from '../Buttons/ShowMore';
import useGetLastTopics from '@/app/utils/Hooks/FetchDataHooks/FetchLastTopicCards';
import useCardLimit from '../Card/Hooks/useCardLimit';

const TopicsCards = ({ ...props }) => {

	const lastActiveTopics = useGetLastTopics();
	const { cardsLimitToShow, showMoreCards, setShowMoreCards } = useCardLimit(lastActiveTopics);


	return (
		<>
			<div className="flex flex-row flex-wrap">
				{lastActiveTopics?.map((data: any, index: number) => {
					return (
						(showMoreCards || index < cardsLimitToShow)
						&&
						(<Card
							key={`${index}-card`}
							CardTitle={data?.title}
							CardDescription={data?.description}
							CardAvatar={data?.avatar}
							CardImage={data?.image}
							Author={data?.author}
							AuthorID={data?.authorID}
							numberOfPosts={data?.numberOfPosts}
							{...props}
						/>)

					)
				})}
			</div>

			{
				(lastActiveTopics.length !== cardsLimitToShow && lastActiveTopics.length > 3)
				&& <ShowMoreButton
					action={() => setShowMoreCards(!showMoreCards)}
					ButtonText={showMoreCards ? 'Show Less' : 'Show More'}
					isSecondary
				/>
			}
		</>
	)
}

export default TopicsCards