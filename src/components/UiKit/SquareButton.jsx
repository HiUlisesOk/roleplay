import { Box, Typography } from '@mui/material'
import React from 'react'

const SquareButton = ({ size, icon, text, buttonText, alignText, buttonMargin, onClick }) => {
	const { SquareButtonStyles, SquareButtonContainer } = {
		SquareButtonStyles: {
			width: size ? size : "3.8vw",
			height: size ? size : "8.50vh",
			backgroundColor: "dark.main",
			borderRadius: "1vw",
			border: "none",
			cursor: "pointer",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
			outline: "none",
			transition: 'all 0.1s ease-in-out',
			"&:hover": {
				backgroundColor: "accent.main",
			}
		},
		SquareButtonContainer: {
			margin: buttonMargin ? buttonMargin : "0vh 0vw",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
			width: size ? size : "4vw",
			height: size ? size : "15vh",
		}
	}
	return (
		<Box sx={SquareButtonContainer}>
			<Box sx={SquareButtonStyles} onClick={onClick} >

				<Typography sx={{ textAlign: alignText ? alignText : "center" }} variant="Quicksand14px" color="text.primary" component="div">
					{icon ? icon : ""} {buttonText ? buttonText : ""}
				</Typography>

			</Box>
			<Typography sx={{ textAlign: alignText ? alignText : "center" }} variant="Quicksand14px" color="text.primary" component="div">
				{text ? text : ""}
			</Typography>
		</Box>
	)
}

export default SquareButton