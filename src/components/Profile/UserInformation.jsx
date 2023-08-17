import React, { useContext, useState } from 'react';
import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material';
import { getUserByIdSelector } from '../../redux/selector/userSelector';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

import { ProfileStyles } from '../../css/ProfileStyles';
import { useSelector } from 'react-redux';
import FollowButton from '../utils/FollowButton';
import UserStats from './UserStats';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import BasicModal from '../utils/BasicModal';
import { useModal } from '../utils/ModalContext';
import ProfileAvatarWithCamera from './UploadProfilePicture';


const UserInformation = () => {

	const { getUserByIdState } = useSelector(getUserByIdSelector)
	const { openModal } = useModal();

	return (
		<div>

			<Grid container spacing={0} style={{ flex: 1 }}>
				<Grid item xs={12}>
					<Avatar
						onClick={openModal}
						alt={getUserByIdState.username || "User Profile Picture"}
						src={getUserByIdState.profilePicture || ""}
						sx={ProfileStyles.Avatar}
					/>
					<BasicModal>
						<ProfileAvatarWithCamera />
					</BasicModal>
				</Grid>
				<Grid item xs={8}>
					<Box style={ProfileStyles.userPrimarySection}>

						<Box>
							<Typography style={ProfileStyles.userName} variant="h1" color="primary.contrastText">{getUserByIdState.username || ""}</Typography>
							<Typography style={ProfileStyles.userName} variant="body2" color="secondary.main">@{getUserByIdState.username || ""}</Typography>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={4}>
					<Box style={ProfileStyles.section}>
						<FollowButton />
					</Box>
				</Grid>
				<Grid item xs={12}>
					<UserStats />
				</Grid>
				<Grid item xs={12}>
					<Typography style={ProfileStyles.userInfoLabels} variant="body1" color="text.secondary">Bio</Typography>
					<Typography style={ProfileStyles.userInfoBio} variant="body2" color="text.secondary">{getUserByIdState.bio}</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography style={ProfileStyles.userInfoLabels} variant="body1" color="text.secondary">Historial de Actividades</Typography>

					<Typography style={ProfileStyles.userInfoBio} variant="body2" color="text.secondary">



						<TableContainer component={Paper}>
							<Table>
								<TableBody>
									<TableRow>
										<TableCell> <LabelImportantIcon style={ProfileStyles.userStatsIcons} color='secondary.main' />  8 de julio de 2023, 13:25</TableCell>
										<TableCell> "Llegando a la Ciudad de las Sombras, ¿alguien quiere unirse a mi grupo para explorar las ruinas ancestrales? #aventura #rol"</TableCell>
									</TableRow>
									<TableRow>
										<TableCell> <LabelImportantIcon style={ProfileStyles.userStatsIcons} color='secondary.main' />  8 de julio de 2023, 13:25</TableCell>
										<TableCell> "Llegando a la Ciudad de las Sombras, ¿alguien quiere unirse a mi grupo para explorar las ruinas ancestrales? #aventura #rol"</TableCell>
									</TableRow>
									<TableRow>
										<TableCell> <LabelImportantIcon style={ProfileStyles.userStatsIcons} color='secondary.main' />  8 de julio de 2023, 13:25</TableCell>
										<TableCell> "Llegando a la Ciudad de las Sombras, ¿alguien quiere unirse a mi grupo para explorar las ruinas ancestrales? #aventura #rol"</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>

					</Typography>

				</Grid>
			</Grid>


		</div>
	)
}

export default UserInformation
