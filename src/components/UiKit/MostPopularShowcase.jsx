import { Box, Typography } from '@mui/material'
import React from 'react'
import { CategoryFeedMostPopular as info } from '../../utils/Dictionary'
import RoleplayBox from './RoleplayBox'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const MostPopularShowcase = () => {
	return (
		<>
			<Box id="RolePlay-Cat-Titles" sx={{ width: '98%', margin: 'auto', marginTop: '5vh', display: 'flex', justifyContent: 'space-between' }}>


				<Box>
					<Typography variant="Poppins36px" sx={{ marginLeft: 0, textAlign: "Left", }} component="div" >{info[0]?.Title || ' '}</Typography>
					<Typography variant="Quicksand24px" sx={{ marginLeft: 0 }} component="div" >{info[0]?.subTitle || ' '}</Typography>
				</Box>

				<Box sx={{ display: 'flex', AlignContent: 'center' }}>
					<Typography variant="Quicksand24px" sx={{ marginLeft: 0, textAlign: "Left", }} component="div" >

						<Link style={{ display: 'flex', AlignContent: 'center' }} to="/feed">
							{info[0]?.showMore || 'Show More'} <ArrowForwardIosIcon sx={{ fontSize: '1vh' }} />
						</Link>

					</Typography>

				</Box>


			</Box >


			<Box id="RolePlay-Cat-Boxes" sx={{ width: '98%', margin: 'auto', marginTop: '5vh' }}>


				<Box id="userBadgeContainer" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', gap: 3 }}>
					<RoleplayBox img={`url(/src/img/19.jpg)`} />
					<RoleplayBox img={`url(/src/img/51.jpg)`} />
				</Box>


			</Box >
		</>
	)
}

export default MostPopularShowcase

