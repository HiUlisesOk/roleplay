import React, { useContext, useState } from 'react';
import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material';
import { getUserByIdSelector } from '../../redux/selector/userSelector';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

import { ProfileStyles } from '../../css/ProfileStyles';
import { useSelector } from 'react-redux';
import FollowButton from '../utils/FollowButton';
import UserStats from './UserStats';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


const CharacterInformation = () => {

	const { getUserByIdState } = useSelector(getUserByIdSelector)

	return (
		<div>

			<Grid container spacing={0} style={{ flex: 1 }}>

				<Grid item xs={12}>
					<Typography style={ProfileStyles.userInfoLabels} variant="body1" color="text.secondary">Historial de Actividades</Typography>

					<Typography style={ProfileStyles.userInfoBio} variant="body2" color="text.secondary">



						<TableContainer component={Paper}>
							<Table>
								<TableBody>
									<TableRow>
										<TableCell>	<Avatar
											alt={getUserByIdState.username || "User Profile Picture"}
											src={getUserByIdState.profilePicture || ""}
											sx={ProfileStyles.AvatarCharacter}
										/></TableCell>
										<TableCell>8 de julio de 2023, 13:25</TableCell>
										<TableCell> "Llegando a la Ciudad de las Sombras, ¿alguien quiere unirse a mi grupo para explorar las ruinas ancestrales? #aventura #rol"</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>	<Avatar
											alt={getUserByIdState.username || "User Profile Picture"}
											src={getUserByIdState.profilePicture || ""}
											sx={ProfileStyles.AvatarCharacter}
										/></TableCell>
										<TableCell>8 de julio de 2023, 13:25</TableCell>
										<TableCell> "Llegando a la Ciudad de las Sombras, ¿alguien quiere unirse a mi grupo para explorar las ruinas ancestrales? #aventura #rol"</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>	<Avatar
											alt={getUserByIdState.username || "User Profile Picture"}
											src={getUserByIdState.profilePicture || ""}
											sx={ProfileStyles.AvatarCharacter}
										/></TableCell>
										<TableCell>8 de julio de 2023, 13:25</TableCell>
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

export default CharacterInformation
