import React, { useContext, useState } from 'react';
import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material';
import { getUserByIdSelector } from '../../redux/selector/userSelector';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

import { ProfileStyles } from '../../css/ProfileStyles';
import { useSelector } from 'react-redux';
import FollowButton from '../utils/FollowButton';
import UserStats from './UserStats';

const UserInfo = () => {

	const { getUserByIdState } = useSelector(getUserByIdSelector)

	return (
		<div>

			<Grid container spacing={0} style={{ flex: 1 }}>
				<Grid item xs={12}>
					<Avatar
						alt={getUserByIdState.username || "User Profile Picture"}
						src={getUserByIdState.profilePicture || ""}
						sx={ProfileStyles.Avatar}
					/>
				</Grid>
				<Grid item xs={8}>
					<Box style={ProfileStyles.userPrimarySection}>

						<Box>
							<Typography style={ProfileStyles.userName} variant="h3" color="primary.contrastText">{getUserByIdState.username || ""}</Typography>
							<Typography style={ProfileStyles.userName} variant="h6" color="secondary.main">@{getUserByIdState.username || ""}</Typography>
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
					<Typography style={ProfileStyles.userInfoLabels} variant="h6" color="text.secondary">Bio</Typography>
					<Typography style={ProfileStyles.userInfoBio} variant="h10" color="text.secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa sem, lacinia et ex dictum, lobortis molestie sapien. Nunc ultricies tortor eget tellus tempor, sed consequat turpis hendrerit. Morbi a libero eget mi tincidunt vestibulum. Aenean vulputate eget libero congue luctus. Sed egestas varius interdum. In pretium nunc odio, nec interdum ipsum dictum eu. In imperdiet at magna id hendrerit. Etiam ac neque eros. Curabitur massa ligula, tempor id nunc quis, bibendum posuere eros. Phasellus sed erat libero. Maecenas sed eleifend lorem, eget varius ligula.</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography style={ProfileStyles.userInfoLabels} variant="h6" color="text.secondary">Profile Stats</Typography>

					<Typography style={ProfileStyles.userInfoBio} variant="h10" color="text.secondary">

						Historial de Actividades


						{/* Actividad 1 */}
						<div className={ProfileStyles.activityItem}>
							<Typography variant="subtitle1" className={ProfileStyles.userInfoLabels}>
								Publicaciones:
							</Typography>
							<Typography variant="body1">
								<Box component={'Typography'} color="secondary.main"><LabelImportantIcon style={ProfileStyles.userStatsIcons} color='secondary.main' /></Box> 8 de julio de 2023, 13:25 - "Llegando a la Ciudad de las Sombras, ¿alguien quiere unirse a mi grupo para explorar las ruinas ancestrales? #aventura #rol"
							</Typography>
							{/* Agrega más publicaciones aquí */}
						</div>

						{/* Actividad 2 */}
						<div className={ProfileStyles.activityItem}>
							<Typography variant="subtitle1" className={ProfileStyles.userInfoLabels}>
								Participación en eventos y misiones:
							</Typography>
							<Typography variant="body1">
								<Box component={'Typography'} color="secondary.main"><LabelImportantIcon style={ProfileStyles.userStatsIcons} color='secondary.main' /></Box>  5 de julio de 2023, 20:00 - Participó en el evento especial "La Gran Guerra: Batalla Final". Roleó intensamente la confrontación contra el villano principal y recibió reconocimiento por su valentía. #evento #batallafinal
							</Typography>
							{/* Agrega más participaciones en eventos y misiones aquí */}
						</div>

						{/* Actividad 3 */}
						<div className={ProfileStyles.activityItem}>
							<Typography variant="subtitle1" className={ProfileStyles.userInfoLabels}>
								Interacciones en tramas y debates:
							</Typography>
							<Typography variant="body1">
								<Box component={'Typography'} color="secondary.main"><LabelImportantIcon style={ProfileStyles.userStatsIcons} color='secondary.main' /></Box>  3 de julio de 2023, 09:55 - Participó en un debate sobre las implicaciones éticas de la magia oscura en el mundo del rol. Presentó argumentos a favor de su restricción. #debate #magiaoscura
							</Typography>
							{/* Agrega más interacciones en tramas y debates aquí */}
						</div>

						{/* Actividad 4 */}
						<div className={ProfileStyles.activityItem}>
							<Typography variant="subtitle1" className={ProfileStyles.userInfoLabels}>
								Logros y reconocimientos:
							</Typography>
							<Typography variant="body1">
								<Box component={'Typography'} color="secondary.main"><LabelImportantIcon style={ProfileStyles.userStatsIcons} color='secondary.main' /></Box>  1 de julio de 2023 - Ganó el premio "Mejor Personaje Secundario" en los premios anuales del foro de rol. Su interpretación y desarrollo del personaje fueron destacados por los demás miembros. #logro #reconocimiento
							</Typography>
							{/* Agrega más logros y reconocimientos aquí */}
						</div>
					</Typography>

				</Grid>
			</Grid>


		</div>
	)
}

export default UserInfo