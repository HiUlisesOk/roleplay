'use client'
import React, { useContext, useState } from 'react';
import { TopBar as TopBarComponent } from './TopBarComponent';
import { IsExpandedContext } from '@/app/utils/context/IsExpanded';
import useGetMyInfo from '@/app/utils/Hooks/FetchDataHooks/FetchMyInfo';


const TopBar: any = ({
	SearchBar,
	Currency,
	Notification,
	Status,
	UserInfo,
	ShowButton,
	order = { SearchBar: 1, Currency: 3, Notification: 4, Status: 2, UserInfo: 5, ShowButton: 0 }
}: any) => {

	const { toggleWidth, isExpanded } = useContext(IsExpandedContext)
	const { username } = useGetMyInfo();

	const components = [
		{ component: SearchBar && <TopBarComponent.SearchBar />, order: order.SearchBar },
		{ component: Currency && <TopBarComponent.Currency />, order: order.Currency },
		{ component: Notification && <TopBarComponent.Notification />, order: order.Notification },
		{ component: Status && <TopBarComponent.Status />, order: order.Status },
		{ component: UserInfo && <TopBarComponent.UserInfo username={username} />, order: order.UserInfo },
		{ component: (ShowButton && !isExpanded) && <TopBarComponent.ShowButton toggleWidth={toggleWidth} />, order: order.ShowButton }
	];

	components.sort((a, b) => a.order - b.order);



	return (

		<TopBarComponent>
			{components.map((item, index) => <React.Fragment key={index}>{item.component}</React.Fragment>)}
		</TopBarComponent>

	);
};

export default TopBar;
