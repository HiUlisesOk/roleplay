import useUploadImage from '@/app/utils/Hooks/upload/UploadImage';
import React, { useEffect, useState } from 'react'
import UploadImageButton from '../Buttons/UploadImageButton';
import { updateBannerPicture } from '@/redux/Features/users/Actions/usersActions';
import useGetMyInfo from '@/app/utils/Hooks/FetchDataHooks/FetchMyInfo';
import { useDispatch } from 'react-redux';
import { useParams } from 'next/navigation';


const ProfileBanner = ({ profileBanner }: any) => {
	const dispatch = useDispatch()
	const { ID } = useGetMyInfo();
	const [file, setFile] = useState<any>(null);
	const { handleUploadImage, imageLink } = useUploadImage();
	const { id } = useParams();
	const [showButton, setShowButton] = useState(false)

	useEffect(() => {
		handleUploadImage(file)
	}, [file])

	useEffect(() => {
		file && imageLink && dispatch<any>(updateBannerPicture({ link: imageLink, ID: ID }))
	}, [imageLink])

	return (
		<>
			<div
				style={{
					backgroundImage: `url(${imageLink || profileBanner || '/landingPage/landingPageBackground.jpg'})`,
					backgroundSize: "cover",
					backgroundPosition: 'center',
				}}
				className="h-60 w-full bg-cover bg-top bg-no-repeat bg-opacity-20 overflow-hidden"
				onMouseEnter={() => setShowButton(true)}
				onMouseLeave={() => setShowButton(false)}
			>

				<div className="shadow-lg bg-darkBG-foreground bg-gradient-to-b from-darkBG-start via-20% via-transparent bg-opacity-10 h-full w-full flex justify-end items-end content-end">
					{
						showButton &&
						(
							ID == id && <UploadImageButton action={setFile} />
						)
					}
				</div>
			</div>
		</>
	)
}



export default ProfileBanner