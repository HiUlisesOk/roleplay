'use client'

import { uploadImage } from '@/redux/Features/upload/uploadActions';
import { updateProfilePicture } from '@/redux/Features/users/Actions/usersActions';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const ACCEPTED_IMAGE_MIME_TYPES = [
	"image/jpeg",
	"image/jpg",
	"image/png",
	"image/webp",
];

const MAX_FILE_SIZE = 1024 * 1024 * 5;

//! FALTA AGREGAR VALIDACIONES

const useUpdateProfilePicture = () => {
	const dispatch = useDispatch();
	const [imagen64, setImagen64] = useState<string>('');
	const [imageLink, setImageLink] = useState<string>('');
	const [userId, setUserId] = useState<number | null>(null);

	const handleUpdateAvatar = (e: any, id: number) => {
		setUserId(id)
		const file = (e?.target as HTMLInputElement)?.files?.[0];

		if (file) {
			const fileReader = new FileReader();

			fileReader.readAsDataURL(new Blob([file]));

			fileReader.onload = (e) => {
				const uploadedImageUrl = e?.target?.result;
				const base64Image = typeof uploadedImageUrl === 'string' ? uploadedImageUrl.split(',')[1] : '';
				setImagen64(base64Image);
			};
		};
	}


	useEffect(() => {
		if (imagen64 && !imageLink) {

			const setImageLinkResult = async () => {
				const result = await dispatch<any>(updateProfilePicture({ imagen64, ID: userId }));
				setImageLink(result?.payload);
			};

			setImageLinkResult();
		}
	}, [dispatch, imagen64, imageLink]);

	return ({ handleUpdateAvatar, imageLink, imagen64 })
}

export default useUpdateProfilePicture