import React from 'react';
import { ErrorIcon, SuccessIcon } from './Icons';

interface MessageProps {
	message: string | undefined;
}

export const ErrorMessage = ({ message }: MessageProps) => {
	return (
		<div className="flex flex-row justify-center items-center gap-2 bg-accent-error text-accent-text p-2 text-sm my-5 rounded max-w-max max-h-max">
			<ErrorIcon /> {message}
		</div>
	);
};

export const SuccessMessage = ({ message }: MessageProps) => {
	return (
		<div className="flex flex-row justify-center items-center gap-2 bg-accent-error text-accent-text p-2 text-sm my-5 rounded max-w-max max-h-max">
			<SuccessIcon /> {message}
		</div>
	);
};

export const InfoMessage = ({ message }: MessageProps) => {
	return (
		<div className="flex flex-row justify-center items-center gap-2 bg-accent-info text-accent-text p-2 text-sm my-5 rounded max-w-max max-h-max">
			<ErrorIcon /> {message}
		</div>
	);
};
