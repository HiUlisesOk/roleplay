'use client'
import React, { useContext, useState } from 'react';
import { Navbar as NavComponent } from './NavbarComponent';
import { navLinksOnHomePage as navLinks } from '../../utils/constants/navLinks';
import { IsExpandedContext } from '@/app/utils/context/IsExpanded';
import { usePathname } from 'next/navigation'
import useGetMyInfo from '@/app/utils/Hooks/FetchDataHooks/FetchMyInfo';

const Navbar: any = ({ HideButton, NavAvatar, NavItem, order = { HideButton: 1, NavAvatar: 2, NavItem: 3 } }: any) => {

	const pathname = usePathname()
	const { toggleWidth } = useContext(IsExpandedContext)
	const { profilePicture } = useGetMyInfo();
	// console.log(profilePicture)

	const components = [
		{ component: HideButton && <NavComponent.HideButton toggleWidth={toggleWidth} />, order: order.HideButton },
		{ component: NavAvatar && <NavComponent.NavAvatar image={profilePicture} />, order: order.NavAvatar },
		{ component: NavItem && <NavComponent.NavItem navLinks={navLinks} pathname={pathname} />, order: order.NavItem }
	];

	components.sort((a, b) => a.order - b.order);


	return (

		<NavComponent toggleWidth={toggleWidth}>
			{components.map((item, index) => <React.Fragment key={index}>{item.component}</React.Fragment>)}
		</NavComponent>

	);
};

export default Navbar;
