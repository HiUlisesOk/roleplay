import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';


const BasicSimpleTable = ({ title, link, headrows = [], children }) => {
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
				<Typography sx={titleStyles} variant="Poppins18left" component="div" >{title || "Your Recent Activity"}</Typography>

				<Box sx={LinkStyles} onClick={() => navigate(link ? link : '/#')}>
					<Typography sx={{ ...titleStyles, m: 0, fontSize: '2.8vh' }}
						variant="Quicksand24px"
						color="accent.main"
						component="div" >
						{link || "See More"}
					</Typography>
				</Box>

			</Box>
			<Box sx={tableContainer}>
				<Box sx={{ display: 'flex', flexDirection: 'row' }}>
					{headrows.length > 0 && headrows.map((row) => (
						<TableCell align="right">{row}</TableCell>
					))}
				</Box>

				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					{children}
				</Box>

			</Box>


		</Box>
	)
}

export default BasicSimpleTable
