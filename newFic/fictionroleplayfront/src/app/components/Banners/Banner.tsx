import React, { useEffect, useState } from 'react'

type BannerProps = {
	title: string,
	subtitle: string
}

const Banner = ({ title, subtitle }: BannerProps) => {

	return (
		<>
			<div
				style={{
					backgroundImage: "url('/landingPage/landingPageBackground.jpg')",
					backgroundSize: "cover",
					backgroundPosition: 'top',
				}}
			>
				<div className="shadow-lg bg-darkBG-foreground bg-gradient-to-b from-darkBG-start via-50% via-transparent bg-opacity-50 h-full w-full p-24">
					<div className="flex items-center justify-center">
						<div className="container mx-auto px-4 py-8">
							<h1 className="text-4xl font-bold text-center">{title}</h1>
							<p className="text-lg text-center mt-4">{subtitle}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Banner