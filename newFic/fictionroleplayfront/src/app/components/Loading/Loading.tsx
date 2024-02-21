import React from 'react';

function Loading() {
	return (
		<div className="flex items-center justify-center h-screen bg-neutrals-background">
			<div className="text-white text-4xl h-full w-full flex items-center justify-center">
				<div className="loader">
					<div data-glitch="Loading..." className="glitch">Loading...</div>
				</div>
			</div>
		</div>
	);
}

export const LoadingMessage = () => {
	return (
		<div className="flex items-center justify-center my-5">
			<div className="text-white text-sm flex items-center justify-center">
				<div className="loader">
					<div data-glitch="Loading..." className="glitch">Loading...</div>
				</div>
			</div>
		</div>
	);
}

export default Loading;