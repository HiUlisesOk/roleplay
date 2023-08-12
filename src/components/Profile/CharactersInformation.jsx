import React, { useContext, useState } from 'react';
import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material';
import { getUserByIdSelector } from '../../redux/selector/userSelector';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

import { ProfileStyles } from '../../css/ProfileStyles';
import { useDispatch, useSelector } from 'react-redux';
import FollowButton from '../utils/FollowButton';
import UserStats from './UserStats';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, } from '@mui/material';
import { getCharacterByUserId } from '../../redux/actions/characterActions';
import { useParams } from 'react-router-dom';
import { getCharacterByUserIdSelector } from '../../redux/selector/characterSelector';
import { useEffect } from 'react';


const CharacterInformation = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const { getCharacterByUserIdState } = useSelector(getCharacterByUserIdSelector)
	useEffect(() => {
		id && dispatch(getCharacterByUserId(id));
		console.log(getCharacterByUserIdState);
	}, [id]);
	const { getUserByIdState } = useSelector(getUserByIdSelector)

	return (
		<div>

			<Grid container spacing={0} style={{ flex: 1 }}>

				<Grid item xs={12}>
					<Typography style={ProfileStyles.userInfoLabels}
						variant="h1" color="text.secondary">Personajes</Typography>

					<Typography style={ProfileStyles.userInfoBio} variant="body2" color="text.secondary">

						<TableContainer component={Table}>
							<Table>
								<TableBody>
									{getCharacterByUserIdState.length > 0 && getCharacterByUserIdState?.map((character) => (
										<TableRow>
											<TableCell style={{ display: 'flex', flexDirection: 'row', justifyItems: 'center', padding: 3, }}>
												<Avatar
													alt={character.username || "User Profile Picture"}
													src={character.avatar || ""}
													sx={{ ...character.AvatarCharacter, height: 90, width: 90, margin: 1, mr: 2 }}
												/>
												<Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
													<Typography variant="h2" color="secondary.main">{character.name}</Typography>
													<Typography variant="body1" color="text.secondary">{character.charge}</Typography>
												</Box>
											</TableCell>
											<TableCell><Typography variant="body1" color="primary.contrastText">Nivel {character?.CharacterStat?.level}</Typography></TableCell>
											<TableCell><Typography variant="body1" color="primary.contrastText">{character?.CharacterStat?.EXP} Xp</Typography></TableCell>
										</TableRow>
									))}
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
