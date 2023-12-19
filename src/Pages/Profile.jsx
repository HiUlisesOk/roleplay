import React, { useContext, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { json, useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { Box, Typography } from '@mui/material';

import { getMyInfo, getUserById } from '../redux/actions/userActions';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTheme } from '@emotion/react';
import UserInformation from '../components/Profile/UserInformation';
import { ProfileStyles } from '../css/ProfileStyles';
import CharacterInformation from '../components/Profile/CharactersInformation';
import { ModalProvider } from '../components/utils/ModalContext';
import { getMyInfoSelector, loginSelector } from '../redux/selector/userSelector';
import ProfileFeed from '../components/Profile/ProfileFeed';
import SavedShowCase from '../components/ShowCase/SavedShowCase';
import { getTopicByUserId } from '../redux/actions/topicActions'
import { getTopicByUserIdSelector } from '../redux/selector/topicSelector'

function Profile() {
	const dispatch = useDispatch();
	const theme = useTheme();

	const { id } = useParams();

	const [userTopics, setUserTopics] = useState([])
	const { topicByUserIdState } = useSelector(getTopicByUserIdSelector)


	useEffect(() => {
		dispatch(getUserById(id));

	}, [id]);

	useEffect(() => {

		id && dispatch(getTopicByUserId(id))

		const newTopicsList = topicByUserIdState && topicByUserIdState?.length > 0 && topicByUserIdState?.map((item) => {
			return {
				avatar: item?.avatar,
				action: item?.title,
				username: item?.author,
				preview: 'They lean in, eager to learn...',
				timeAgo: item?.updatedAt

			}
		})

		newTopicsList.length && setUserTopics(newTopicsList)

		console.log(userTopics)

	}, [id])


	// console.log(theme);
	return (<>
		<div style={ProfileStyles.banner}></div>
		<ModalProvider>
			<Container style={ProfileStyles.container}>
				<Grid container spacing={0} style={{ flex: 1 }}>
					<Grid style={ProfileStyles.userInfo} item xs={3}>
						<UserInformation />
					</Grid>
					<Grid id="InfoProfileContainer" sx={{ ml: 1, }} item xs={8}>
						<ProfileFeed />
						<SavedShowCase info={userTopics} />
						{/* <CharacterInformation /> */}
					</Grid>
				</Grid>
			</Container>
		</ModalProvider >
	</>
	);
}

export default Profile;






