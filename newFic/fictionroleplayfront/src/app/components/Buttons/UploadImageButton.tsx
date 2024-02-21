import { UploadImageIcon } from '@/app/utils/Icons';
import Link from 'next/link'
import React, { MouseEventHandler } from 'react'

interface UploadImageProps {
	action?: any | MouseEventHandler<HTMLButtonElement>;
	ButtonText?: string;
	isSecondary?: boolean;
	linkTo?: string;
}

const primaryStyle = 'border-lessOpacity-primary hover:border-primary hover:bg-primary text-primary hover:text-neutrals-onPrimary'

const secondaryStyle = 'border-lessOpacity-secondary hover:border-secondary hover:bg-secondary text-secondary hover:text-neutrals-onSecondary'

const UploadImageButton: React.FC<UploadImageProps> = ({ action, ButtonText = "Upload", isSecondary = false, }) => {
	return (
		<label className={`cursor-pointer flex max-h-max max-w-max p-10 `}>
			<div id="UploadImageButton" className={`${isSecondary ? secondaryStyle : primaryStyle} border-solid border my-2 font-light py-4 px-8 rounded text-xs flex flex-row justify-center items-center gap-2`}>
				<UploadImageIcon size={5} opacity={100} />	{ButtonText}
				<input
					type="file"
					accept='image/*'
					className='h-full w-full hidden'
					id="uploadInput"
					onChange={(e: any) => { action(e) }}
				/>
			</div>
		</label>
	)
}

export default UploadImageButton