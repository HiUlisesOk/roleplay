'use client'
import React, { useEffect, useState } from 'react';
import WithAuth from '../utils/WithAuth';
import { user, admin } from '../utils/constants/roles';
import Navbar from '../components/Navbar/Navbar';
import TopBar from '../components/TopBar/TopBar';
import Banner from '../components/Banners/Banner';
import { IsExpandedProvider } from '../utils/context/IsExpanded';
import TopicsCards from '../components/Topics/TopicsCards';



const HomePage: React.FC = () => {


	return (

		<div className="flex flex-row">
			<IsExpandedProvider>

				<Navbar
					HideButton
					NavAvatar
					NavItem
				/>


				<div className="w-full min-h-max bg-background text-onBackground">

					<TopBar
						SearchBar
						Currency
						Notification
						Status
						UserInfo
						ShowButton
					/>

					<Banner
						title='Discover the World of Fiction'
						subtitle='Explore our vast collection of stories and immerse yourself in a world of imagination.'
					/>

					<TopicsCards
						ShowAvatarAndAuthor
						ShowDescription
						ShowImage
						ShowTitle
						ShowPostQuantity
					/>

				</div>

			</IsExpandedProvider>
		</div>

	);
};

export default WithAuth(HomePage, [admin, user]);
