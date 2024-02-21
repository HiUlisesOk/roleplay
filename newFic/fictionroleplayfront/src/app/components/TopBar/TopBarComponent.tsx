import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { CurrencyIcon, HideNavbarIcon, NotificationIcon, SearchIcon, ShowNavbarIcon, UserIcon } from '@/app/utils/Icons';
import { IsExpandedContext } from '@/app/utils/context/IsExpanded';


type TopBarType = React.FC & {
	TopBarItem: typeof TopBarItem,
	Currency: typeof Currency,
};

type TopBarItemsProps = {
	navLinks: Array<{ name: string, href: string }>
};

const menuStyle = "items-center rounded-md bg-neutrals-surface w-full h-8 overflow-hidden px-2 cursor-pointer"

const SearchBar: any = () => (
	<div className={`${menuStyle} relative flex `}>
		<div className="absolute inset-1 w-5">
			<SearchIcon />
		</div>
		<input
			type="text"
			placeholder="Search by keyword..."
			className="bg-neutrals-surface h-8 border-transparent outline-none pl-6 w-full"
		/>
	</div>
);


const TopBarItem: any = ({ navLinks }: TopBarItemsProps) => (
	<div className={`${menuStyle} flex`}>
		{navLinks.map((link: any, index: number) => <Link key={`navLink-${index}`} href={link.href} onClick={link.action}>{link.name}</Link>)}
	</div>
);

const Currency: any = () => (
	<div className={`${menuStyle} hidden sm:flex max-w-max justify-left`}>
		<span className='text-secondary'><CurrencyIcon /></span>	<div className='pl-1'>9999 M</div>
	</div>
);

const Notification: any = () => (
	<div className={`${menuStyle} flex max-w-max justify-center`}>
		<NotificationIcon />
	</div>
);


const Status: any = () => (
	<div className={`${menuStyle}, text-primary min-w-76 max-w-max text-bold hidden lg:flex justify-center`}>
		Warrior of The North
	</div>
);

const UserInfo: any = ({ username = 'unknown' }: { username?: string }) => (
	<div className={`${menuStyle} flex max-w-max`}>
		<UserIcon />
		<div className={` text-secondary text-bold hidden lg:flex justify-center pl-2`}>
			{username}
		</div>
	</div>
);

const ShowButton: any = ({ toggleWidth }: { toggleWidth: () => void }) => (
	<div className="flex-shrink-0 min-w-76 max-w-max flex justify-end items-end  h-6 border-primary cursor-pointer ml-auto text-onBackground" onClick={toggleWidth}>
		<ShowNavbarIcon />
	</div>
);


export const TopBar: TopBarType | any = ({ children, ...props }: React.PropsWithChildren<{}>) => {

	const [lastScrollTop, setLastScrollTop] = useState(0);

	useEffect(() => {
		function handleScroll() {
			const st = window.scrollY || document.documentElement.scrollTop;

			setLastScrollTop(st <= 0 ? 0 : st);
		}

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScrollTop]);

	return (
		<div className={`z-50 flex flex-row gap-2 align-middle items-center justify-between bg-neutrals-background text-neutrals-onSurface m-auto p-4 w-full sticky top-0`} {...props}>{children}</div>
	);
};


TopBar.TopBarItem = TopBarItem;
TopBar.Currency = Currency;
TopBar.SearchBar = SearchBar;
TopBar.Notification = Notification;
TopBar.Status = Status;
TopBar.UserInfo = UserInfo;
TopBar.ShowButton = ShowButton;
