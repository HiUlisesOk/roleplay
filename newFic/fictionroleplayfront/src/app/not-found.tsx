'use client'
import Link from 'next/link'
import WithAuth from './utils/WithAuth';
import { allUsers } from './utils/constants/roles';

function NotFound() {
	return (
		<div
			className="flex h-screen w-screen flex-col items-center justify-between"
			style={{ backgroundImage: "url('/landingPage/landingPageBackground.jpg')", backgroundSize: "cover" }}>

			<div className="shadow-lg bg-neutrals-lessOpacity-onPrimary bg-opacity-90 h-screen w-screen p-24">
				<div className="flex items-center justify-center">
					<div className="text-white h-full w-full flex items-center justify-center">
						<Link href="/home">
							<div className="loader">
								<div data-glitch="404" className="glitch text-9xl">404</div>
								<div className='w-28 m-auto'>	<div data-glitch="not found" className="glitch text-light text-sm m-auto">not found</div></div>
							</div>
							<div className='w-full text-center text-sm m-auto mt-16'>Return Home</div>
						</Link>
					</div>
				</div>
			</div>
		</div>

	)
}

export default WithAuth(NotFound, [allUsers]);