import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import { ProfileStyles } from '../../css/ProfileStyles';


const UserCardInfo = () => {
	const theme = useTheme();
	const { titleStyles, container, innerContainer, LinkStyles, tableContainer } = {
		container: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			width: "33vw",
			height: "78vh",
			padding: "1em",
		},
		innerContainer: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			width: "33vw",
			height: "10vh",
			padding: "1em",
		},
		titleStyles: {
			maxWidth: "27vw",
			height: "4vh",
			flexShrink: 0,
		},
		LinkStyles: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			height: "4vh",
			padding: "0vh 1vw",
			flexShrink: 0,
			cursor: "pointer",
		},
		tableContainer: {
			background: theme.palette.background.paper,
			borderRadius: '3%',
			padding: '1.9vw',
			height: '70vh',
			overflowY: 'auto',
			overflowX: 'hidden',
		}
	}
	const navigate = useNavigate()

	return (
		<Box sx={container}>
			<Box sx={innerContainer}>
				<Typography sx={titleStyles} variant="Poppins18left" component="div" >{"User Information"}</Typography>

				<Box sx={LinkStyles} onClick={() => navigate(link ? link : '/#')}>
					{/* <Typography sx={{ ...titleStyles, m: 0, fontSize: '2.8vh', display: 'none' }}
						variant="Quicksand24px"
						color="accent.main"
						component="div" >
						{"See More"}
					</Typography> */}
				</Box>

			</Box>
			<Box sx={{ ...tableContainer, width: '100%' }}>

				<Box sx={{ display: 'flex', flexDirection: 'row' }}><Typography style={{ ...ProfileStyles.userName, marginRight: '1vw' }} variant="Poppins14left" color="primary.contrastText">Name: </Typography> <Typography style={ProfileStyles.userName} variant="Poppins14left" color="secondary.main">Liam</Typography></Box>
				<Box sx={{ display: 'flex', flexDirection: 'row' }}><Typography style={{ ...ProfileStyles.userName, marginRight: '1vw' }} variant="Poppins14left" color="primary.contrastText">Last Name: </Typography> <Typography style={ProfileStyles.userName} variant="Poppins14left" color="secondary.main">Vortex Khaler</Typography></Box>
				<Box sx={{ display: 'flex', flexDirection: 'row' }}><Typography style={{ ...ProfileStyles.userName, marginRight: '1vw' }} variant="Poppins14left" color="primary.contrastText">Birthdate: </Typography> <Typography style={ProfileStyles.userName} variant="Poppins14left" color="secondary.main">27-03-1995</Typography></Box >
				<Box sx={{ display: 'flex', flexDirection: 'row' }}><Typography style={{ ...ProfileStyles.userName, marginRight: '1vw' }} variant="Poppins14left" color="primary.contrastText">email: </Typography> <Typography style={ProfileStyles.userName} variant="Poppins14left" color="secondary.main">uesquivel95@gmail.com</Typography></Box >

			</Box >

			<Box sx={innerContainer}>
				<Typography sx={titleStyles} variant="Poppins18left" component="div" >{"Biography"}</Typography>

				<Box sx={LinkStyles} onClick={() => navigate(link ? link : '/#')}>
					{/* <Typography sx={{ ...titleStyles, m: 0, fontSize: '2.8vh', display: 'none' }}
						variant="Quicksand24px"
						color="accent.main"
						component="div" >
						{"See More"}
					</Typography> */}
				</Box>

			</Box>
			<Box sx={{ ...tableContainer, width: '100%' }}>

				<Box sx={{ display: 'flex', flexDirection: 'row' }}>
					<Typography style={{ ...ProfileStyles.userName, marginRight: '1vw' }} variant="Poppins14left" color="primary.contrastText">
						Immersive storyteller and versatile role player, diving into realms of fantasy and adventure. With a creative mind as my compass, I breathe life into characters, each with their own dreams, fears, and quirks. Whether wielding a sword as the valiant knight Siris Blackthorn, or weaving spells as the cunning mage Lyndara Mystweaver, I thrive in collaborative narratives where imagination knows no bounds. Adept at improvisation and character development, I traverse through intricate plots alongside fellow adventurers, crafting unforgettable tales in the mystical lands of Eldoria, Aetherium, and beyond.
					</Typography>
				</Box>


			</Box >

		</Box >
	)
}

export default UserCardInfo
