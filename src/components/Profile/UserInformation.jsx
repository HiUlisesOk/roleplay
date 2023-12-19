import React, { useContext, useState } from 'react';
import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material';
import { getUserByIdSelector } from '../../redux/selector/userSelector';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

import { ProfileStyles } from '../../css/ProfileStyles';
import { useSelector } from 'react-redux';
import FollowButton from '../utils/FollowButton';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import BasicModal from '../utils/BasicModal';
import { useModal } from '../utils/ModalContext';
import ProfileAvatarWithCamera from './UploadProfilePicture';
import Balance from '../UiKit/Balance';
import UserStats from '../UiKit/UserStats';
import AvatarGroupsSquare from '../UiKit/AvatarGroupsSquare';



const UserInformation = () => {

	const { getUserByIdState } = useSelector(getUserByIdSelector)
	const { openModal, closeModal } = useModal();

	return (
		<Box >

			<Box>

				<Box>
					<Box sx={ProfileStyles.AvatarBorder}>
						<Avatar
							onClick={openModal}
							alt={getUserByIdState.username || "User Profile Picture"}
							src={getUserByIdState.profilePicture || ""}
							sx={ProfileStyles.Avatar}
						/>
					</Box>
					<BasicModal>
						<ProfileAvatarWithCamera ID={getUserByIdState.ID} userData={getUserByIdState} closeModal={closeModal} />
					</BasicModal>
				</Box>

				<Box>
					<Box style={ProfileStyles.userPrimarySection}>

						<Box>
							<Typography style={ProfileStyles.userName} variant="Poppins36px" color="primary.contrastText">{getUserByIdState.username || ""}</Typography>
							<Typography style={ProfileStyles.userName} variant="Poppins14left" color="secondary.main">@{getUserByIdState.username || ""}</Typography>
						</Box>
					</Box>
				</Box>

				<Box>
					<Balance />
				</Box>

				<Box>
					<UserStats stat={1} title={0.8} />
				</Box>

				<Box>
					<AvatarGroupsSquare />
				</Box>

			</Box>


		</Box>
	)
}

export default UserInformation
