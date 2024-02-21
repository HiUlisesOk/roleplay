import React from 'react'
import useUploadImage from "@/app/utils/Hooks/upload/UploadImage";
import { UploadImageIcon } from "@/app/utils/Icons";
import { useEffect, useState } from "react";
import useUpdateProfilePicture from '@/app/utils/Hooks/upload/UpdateProfilePicture';


export const AvatarOnly = ({ src, size }: any) => {

	return (

		<div
			className={`flex items-center justify-center object-cover rounded-full`}
			style={{
				backgroundImage: `url('${src}')`,
				width: `${size}px`, height: `${size}px`,
				backgroundSize: "cover",
				backgroundPosition: 'top',
			}}
		>
		</div>
	)
}

const AvatarWithUpload = ({ src, size }: any) => {


	const [file, setFile] = useState<any>(null);
	const { handleUploadImage, imageLink } = useUploadImage();

	useEffect(() => {
		handleUploadImage(file)
	}, [file])


	return (
		<label className={`rounded-full object-cover p-2 cursor-pointer`}>
			<div
				className={`flex items-center justify-center object-cover rounded-full`}
				style={{
					backgroundImage: `url('${imageLink || src}')`,
					width: `${size}px`, height: `${size}px`,
					backgroundSize: "cover",
					backgroundPosition: 'top',
				}}
			>
				<div className="transition-all duration-100 bg-primary border-primary border-2 bg-opacity-20 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 w-full h-full">
					<UploadImageIcon />
				</div>
				<input
					type="file"
					accept='image/*'
					className='h-full w-full hidden'
					id="fileInput"
					onChange={(e: any) => { setFile(e) }}
				/>
			</div>
		</label>
	);
};

const AvatarUpdate = ({ src, size, id }: any) => {


	const [file, setFile] = useState<any>(null);
	const { handleUpdateAvatar, imageLink } = useUpdateProfilePicture();

	useEffect(() => {
		handleUpdateAvatar(file, id)
	}, [file])


	return (
		<label className={`rounded-full object-cover p-2 cursor-pointer`}>
			<div
				className={`flex items-center justify-center object-cover rounded-full`}
				style={{
					backgroundImage: `url('${imageLink || src}')`,
					width: `${size}px`, height: `${size}px`,
					backgroundSize: "cover",
					backgroundPosition: 'top',
				}}
			>
				<div className="transition-all duration-100 bg-primary border-primary border-2 bg-opacity-20 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 w-full h-full">
					<UploadImageIcon />
				</div>
				<input
					type="file"
					accept='image/*'
					className='h-full w-full hidden'
					id="fileInput"
					onChange={(e: any) => { setFile(e) }}
				/>
			</div>
		</label>
	);
};


const AvatarComponent = ({ children }: any) => {
	return (
		<>{children}</>
	)
}

AvatarComponent.AvatarOnly = AvatarOnly;
AvatarComponent.AvatarWithUpload = AvatarWithUpload;
AvatarComponent.AvatarUpdate = AvatarUpdate;

export default AvatarComponent;
