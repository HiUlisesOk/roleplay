import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { IsExpandedContext } from '@/app/utils/context/IsExpanded';
import { HideNavbarIcon, ShowNavbarIcon } from '@/app/utils/Icons';
import AvatarComponent from '../Avatar/AvatarComponent';
import Avatar from '../Avatar/Avatar';


type NavbarType = React.FC & {
	NavItem: typeof NavItem,
	NavAvatar: typeof NavAvatar,
};

type NavItemProps = {
	navLinks: Array<{ name: string, href: string }>
	pathname: string
};

const NavItem: any = ({ navLinks, pathname }: NavItemProps) => (
	<div className="flex flex-col w-full items-start text-neutrals-onBackground ">
		{navLinks.map((link: any, index: number) => (
			<React.Fragment key={`navLink-${index}`}>
				<Link className={`text-light py-2 text-left text-sm flex pl-4 flex-row gap-2 w-full items-center cursor-pointer hover:bg-primary ${pathname == link.href ? 'text-primary hover:text-neutrals-onSurface' : 'text-neutrals-onSurface'}`} href={link.href} onClick={link.action}>

					{<link.icon />}
					{link.name}

				</Link>
			</React.Fragment>
		))}
	</div>
);

const NavAvatar: any = ({ image }: { image: string }) => (

	<div
		className={`flex items-center justify-center object-cover rounded-full my-4`}
	>
		<Avatar
			AvatarOnly
			src={image}
			size={160}
		/>
	</div>
);

const HideButton: any = ({ toggleWidth }: { toggleWidth: () => void }) => (
	<div className="w-full flex flex-col justify-end items-end  border-primary cursor-pointer ml-auto text-onBackground" onClick={toggleWidth}>
		<HideNavbarIcon />
		<div className='flex items-center justify-center text-primary font-extrabold w-full m-auto'>Fiction Roleplay</div>
	</div>
);

export const Navbar: NavbarType | any = ({ children, toggleWidth, ...props }: React.PropsWithChildren<{ toggleWidth: () => void }>) => {
	const { isExpanded } = useContext(IsExpandedContext)

	return (
		<>

			<nav className={`z-50 sm:h-screen h-lvh fixed bg-neutrals-surface flex flex-col justify-between items-center transition-all ease-in-out duration-300 sm:sticky top-0 ${isExpanded ? `w-screen md:w-60 opacity-100` : `w-0 opacity-0`}`}>
				{isExpanded ? <div className={`flex flex-col justify-between items-center gap-0 w-full bg-transparent transition-all ease-in-out duration-300  ${isExpanded || 'hidden '}`} {...props}>{children}</div> : <></>}
			</nav>
		</>
	);
};


Navbar.NavItem = NavItem;
Navbar.NavAvatar = NavAvatar;
Navbar.HideButton = HideButton;

