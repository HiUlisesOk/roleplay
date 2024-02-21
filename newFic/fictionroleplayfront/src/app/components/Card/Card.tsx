import React from "react";
import CardComponent from "./CardComponent";
import { CardProps } from "@/types/CardTypes";


const initialOrder = {
	CardTitle: 4,
	CardDescription: 5,
	CardAvatar: 0,
	CardImage: 3,
	Author: 6,
	CardAvatarAndAuthor: 1,
	PostQuantity: 2,
}


const Card = ({
	CardTitle = "Card Title is Missing",
	CardDescription = "Card Description is Missing",
	CardAvatar = "/default/500x500.png",
	CardImage = "/default/500x500.png",
	Author = "Author is Missing",
	AuthorID = null,
	ShowTitle = false,
	ShowDescription = false,
	ShowAvatar = false,
	ShowImage = false,
	ShowAvatarAndAuthor = false,
	ShowAuthor = false,
	ShowPostQuantity = false,
	numberOfPosts = 0,
	order = initialOrder,
}: CardProps) => {

	const components = [
		{ component: ShowAvatarAndAuthor && <CardComponent.CardAvatarAndAuthor CardAvatar={CardAvatar} Author={Author} AuthorID={AuthorID} />, order: order.CardAvatarAndAuthor },
		{ component: ShowAuthor && <CardComponent.Author Author={Author} AuthorID={AuthorID} />, order: order.Author },
		{ component: ShowTitle && <CardComponent.CardTitle CardTitle={CardTitle} />, order: order.CardTitle },
		{ component: ShowDescription && <CardComponent.CardDescription CardDescription={CardDescription} />, order: order.CardDescription },
		{ component: ShowAvatar && <CardComponent.CardAvatar CardAvatar={CardAvatar} AuthorID={AuthorID} />, order: order.CardAvatar },
		{ component: ShowImage && <CardComponent.CardImage CardImage={CardImage} />, order: order.CardImage },
		{ component: ShowPostQuantity && <CardComponent.PostQuantity numberOfPosts={numberOfPosts} />, order: order.PostQuantity },
	];

	components.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

	return (
		<>
			<CardComponent AuthorID={AuthorID}>
				{components.map((item, index) => <React.Fragment key={index}>{item.component}</React.Fragment>)}
			</CardComponent>
		</>
	);
}

export default Card;