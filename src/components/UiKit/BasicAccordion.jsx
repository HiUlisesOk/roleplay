import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Box } from '@mui/material';

export default function BasicAccordion({ children, textOne, textTwo, avatar }) {

	const { userBadgeSyles, AvatarStyles, userBadgeHeader } = {
		userBadgeSyles: {
			width: '21vw',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			objectFit: 'cover',
			boxShadow: "4px -70px 30px -4px rgba(0, 0, 0, 0.728) inset",
			borderRadius: "16px",
			border: "1px solid #499CE9",
			background: "linear-gradient(162deg, #051524 22.61%, rgba(16, 73, 127, 0.01) 118.29%)",
		},
		AvatarStyles: {
			width: '2.5vw',
			height: "2.5vw",
			borderRadius: "100%",
			margin: 1,
		},
		userBadgeHeader: {
			height: '1vw',
		}
	}

	return (
		<div>
			<Accordion sx={{ ...userBadgeSyles }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					sx={{ ...userBadgeHeader }}
				>
					<Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', }}>
						<Avatar id="userBadgeAvatar" src={avatar ? avatar : 'https://via.placeholder.com/500x500'} sx={AvatarStyles} />
						<Box>
							<Typography id="userBadgeName" variant="Poppins10left" sx={{ margin: 0, textAlign: "Left", }} component="div" >{textOne && textOne}</Typography>
							<Typography id="userBadgeTime" variant="Quicksand10light" sx={{ margin: 0 }} component="div" >{textTwo && textTwo}</Typography>
						</Box>
					</Box>
				</AccordionSummary>
				<AccordionDetails>
					{children}
				</AccordionDetails>
			</Accordion>

		</div>
	);
}
