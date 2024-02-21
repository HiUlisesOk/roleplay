import Link from 'next/link'
import React, { MouseEventHandler } from 'react'

interface ActionButtonProps {
	action?: any | MouseEventHandler<HTMLButtonElement>;
	ButtonText?: string;
	isSecondary?: boolean;
	linkTo?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ action, ButtonText = "Yes", isSecondary = false, }) => {
	return isSecondary ? (
		<div className="flex justify-center items-center">

			<button id="showMore" onClick={action} className="border-secondary text-secondary hover:bg-neutrals-surface border-solid border m-auto my-2 font-light py-1 px-2 rounded text-xs">
				{ButtonText}
			</button>

		</div>
	) : (
		<div className="flex justify-center items-center">
			<button id="showMore" onClick={action} className="border-lessOpacity-primary hover:border-primary hover:bg-neutrals-surface border-solid border m-auto my-2 text-primary font-light py-1 px-2 rounded text-xs">
				{ButtonText}
			</button>
		</div >
	);
}

export default ActionButton