'use client'
import React from 'react';
import AvatarComponent from './AvatarComponent';
import { ErrorMessage } from '@/app/utils/Messages';



const Avatar: any = ({
	AvatarOnly,
	AvatarWithUpload,
	AvatarUpdate,
	src = "/default/500x500.png",
	size = 160,
	id = null,
	order = { AvatarOnly: 1, AvatarWithUpload: 2, AvatarUpdate: 3 }
}: any) => {

	const components = [
		{ component: AvatarOnly && <AvatarComponent.AvatarOnly src={src} size={size} />, order: order.AvatarOnly, isActive: AvatarOnly },
		{ component: AvatarWithUpload && <AvatarComponent.AvatarWithUpload src={src} size={size} />, order: order.AvatarWithUpload, isActive: AvatarWithUpload },
		{ component: AvatarUpdate && <AvatarComponent.AvatarUpdate src={src} size={size} id={id} />, order: order.AvatarUpdate, isActive: id && AvatarUpdate },
	];

	const componentFilteredAndSorted = components?.filter((component) => component.isActive == true).sort((a, b) => a.order - b.order);

	const firstComponent = componentFilteredAndSorted[0];

	if (AvatarUpdate && !id) { return (<ErrorMessage message='AvatarUpdate: Para renderizar el componente debe proporcionar un id de usuario.' />) }

	return (

		<AvatarComponent>
			<div className='flex justify-start items-start max-w-max max-h-max z-10'>{firstComponent?.component}</div>
		</AvatarComponent>

	);
};

export default Avatar;
