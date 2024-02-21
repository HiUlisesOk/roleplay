import Image from "next/image"
import { LimitCharacters } from "@/app/utils/functions/limitCharacters"
import Link from "next/link"
import { PostsQuantityIcon } from "@/app/utils/Icons"


const CardAvatar = ({ CardAvatar, AuthorID }: any) => {
	return (
		<div className="w-full flex justify-center items-center">
			<div className="w-14 h-14 rounded-full object-cover my-1 mx-auto">
				<Link href={`/user/${AuthorID}`} passHref>			<img className="flex-shrink-0 w-full h-full object-cover rounded-full" src={CardAvatar} alt="logo" width={250} height={250} /> </Link>
			</div>
		</div>
	)
}

const CardAvatarAndAuthor = ({ CardAvatar, Author, AuthorID }: any) => {
	return (
		<div className="min-w-min flex justify-start items-center gap-2 ml-2">
			<div className="w-10 min-w-min h-10 rounded-full  my-1 mx-auto overflow-hidden">
				<Link href={`/user/${AuthorID}`} passHref>
					<img className="flex-shrink-0 w-full h-full object-cover rounded-full" src={CardAvatar} alt="logo" width={250} height={250} />
				</Link>
			</div>
			<Link href={`/user/${AuthorID}`} passHref>
				<div className="flex justify-start items-center font-bold text-sm w-50 min-w-min h-14 cursor-pointer p-0 ">{LimitCharacters(Author, 11)}</div>
			</Link>
		</div>
	)
}

const Author = ({ Author, AuthorID }: any) => { return (<Link href={`/user/${AuthorID}`} passHref><div className="flex justify-center items-center font-bold text-sm w-full h-10 cursor-pointer p-1 bg-neutrals-background">{LimitCharacters(Author, 18)}</div></Link>) }

const CardTitle = ({ CardTitle }: any) => { return (<div className="flex justify-start items-center font-bold text-center text-xs w-full h-8 cursor-pointer p-2 bg-neutrals-surface">{LimitCharacters(CardTitle, 38)}</div>) }

const PostQuantity: any = ({ numberOfPosts }: any) => (
	<div className={`max-w-max px-4  text-neutrals-onBackground text-light justify-center text-xs items-center hidden sm:flex my-1`}>
		<PostsQuantityIcon />
		<div className="pl-2">
			{numberOfPosts}
		</div>
	</div>
);

const CardDescription = ({ CardDescription }: any) => { return (<p className="text-neutrals-onSurface text-xs my-auto p-2 w-full h-14 max-h-14 overflow-y-auto bg-neutrals-surface">{LimitCharacters(CardDescription, 60)}</p>) }

const CardImage = ({ CardImage }: any) => { return (<><img src={CardImage} className="w-full h-28 max-h-28 object-cover" width={500} height={500} alt="Image-Card" /></>) }

const CardComponent = ({ children, ...props }: any) => {
	const { AuthorID } = props;

	return (

		<Link href={`/topics/${AuthorID}`} passHref className="flex flex-row flex-wrap max-w-60 justify-between rounded overflow-hidden shadow-lg bg-neutrals-background m-auto my-2 gap-0 border-transparent border hover:border-primary cursor-pointer transition-all duration-150" {...props}>
			{children}
		</Link>
	);
}

CardComponent.CardTitle = CardTitle;
CardComponent.CardDescription = CardDescription;
CardComponent.CardAvatar = CardAvatar;
CardComponent.CardImage = CardImage;
CardComponent.Author = Author;
CardComponent.CardAvatarAndAuthor = CardAvatarAndAuthor;
CardComponent.PostQuantity = PostQuantity;

export default CardComponent;