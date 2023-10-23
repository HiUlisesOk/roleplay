
import React from 'react'
import Dashboard from '../components/dashboard/Dashboard'
import { Box } from '@mui/material'
import FollowDash from '../components/FollowDash/FollowDash'
import ActivityTableBasic from '../components/UiKit/ActivityTableBasic'

const info = [
	{
		avatar: 'https://i.pravatar.cc/150?ana',
		action: 'New response',
		username: 'Leia Blaz',
		preview: 'They lean in, eager to learn...',
		timeAgo: '2 mins ago',
		topics: '60 Topics'
	},
	{
		avatar: 'https://i.imgur.com/2AH91i1.jpg',
		action: 'You posted',
		username: 'Liam Vortex Khaler',
		preview: 'Amidst the shadow of the...',
		timeAgo: '2 mins ago',
		topics: '60 Topics'
	},
	{
		avatar: 'https://i.pravatar.cc/150?john',
		action: 'New response',
		username: 'John Doe',
		preview: 'Exploring new horizons...',
		timeAgo: '5 mins ago',
		topics: '45 Topics'
	},
	{
		avatar: 'https://i.pravatar.cc/150?jane',
		action: 'You posted',
		username: 'Jane Smith',
		preview: 'Discovering the beauty of...',
		timeAgo: '10 mins ago',
		topics: '30 Topics'
	},
	{
		avatar: 'https://i.pravatar.cc/150?alex',
		action: 'New response',
		username: 'Alex Johnson',
		preview: 'Sharing insights and knowledge...',
		timeAgo: '15 mins ago',
		topics: '55 Topics'
	},
	{
		avatar: 'https://i.pravatar.cc/150?emily',
		action: 'You posted',
		username: 'Emily Davis',
		preview: 'Reflecting on the wonders of...',
		timeAgo: '20 mins ago',
		topics: '40 Topics'
	},
	{
		avatar: 'https://i.pravatar.cc/150?william',
		action: 'New response',
		username: 'William Turner',
		preview: 'Embracing the journey ahead...',
		timeAgo: '25 mins ago',
		topics: '50 Topics'
	},
	{
		avatar: 'https://i.pravatar.cc/150?olivia',
		action: 'You posted',
		username: 'Olivia Walker',
		preview: 'Inspiring others through...',
		timeAgo: '30 mins ago',
		topics: '35 Topics'
	},
	{
		avatar: 'https://i.pravatar.cc/150?michael',
		action: 'New response',
		username: 'Michael Brown',
		preview: 'Connecting with like-minded...',
		timeAgo: '35 mins ago',
		topics: '48 Topics'
	},
	{
		avatar: 'https://i.pravatar.cc/150?ava',
		action: 'You posted',
		username: 'Ava White',
		preview: 'Exploring the mysteries of...',
		timeAgo: '40 mins ago',
		topics: '42 Topics'
	},
	{
		avatar: 'https://i.pravatar.cc/150?liam',
		action: 'New response',
		username: 'Liam Jackson',
		preview: 'Collaborating for a brighter...',
		timeAgo: '45 mins ago',
		topics: '53 Topics'
	},
	{
		avatar: 'https://i.pravatar.cc/150?sophia',
		action: 'You posted',
		username: 'Sophia Hall',
		preview: 'Nurturing creativity and innovation...',
		timeAgo: '50 mins ago',
		topics: '38 Topics'
	}
];


const HomeBoard = () => {
	return (
		<div>
			<Dashboard />
			<Box sx={{ display: 'flex' }}>
				<ActivityTableBasic rows={info} type={true} max={5} />
				<FollowDash rows={info} desc={true} btnTitle="Follow" title={"Most Active Roleplayers"} max={8} />
			</Box>

		</div>

	)
}

export default HomeBoard