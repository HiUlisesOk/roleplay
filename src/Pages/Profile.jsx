import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@emotion/react';
import UserInformation from '../components/Profile/UserInformation';
import { ProfileStyles } from '../css/ProfileStyles';
import { ModalProvider } from '../components/utils/ModalContext';
import ProfileFeed from '../components/Profile/ProfileFeed';
import SavedShowCase from '../components/ShowCase/SavedShowCase';

function Profile() {

	const theme = useTheme();

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
						<SavedShowCase />

					</Grid>
				</Grid>
			</Container>
		</ModalProvider >
	</>
	);
}

export default Profile;






