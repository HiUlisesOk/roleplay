import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { BannerCarouselInfo as info } from '../../utils/Dictionary'


const BannerCarousel = () => {
	const [selectedIndex, setSelectedIndex] = useState(1)

	const { imageBannerStyles } = {
		imageBannerStyles: {
			height: '65vh',
			width: '99%',
			borderRadius: '21px',
			marginLeft: 'auto',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'right',
			objectFit: 'cover',
			padding: '3vw',
			boxShadow: "4px -270px 109px -04px rgba(0, 0, 0, 0.628) inset",
			display: 'flex',
			alignItems: 'flex-end',
		}
	}
	console.log(selectedIndex)

	useEffect(() => {
		const repeat = setInterval(() => {
			setSelectedIndex((prevIndex) => prevIndex + 1);
		}, 9000);

		return () => {
			clearInterval(repeat);
		}
	}, [])

	useEffect(() => {
		if (selectedIndex > 78) setSelectedIndex(1);
	}, [selectedIndex])




	return (
		<Box id="banner" sx={{ ...imageBannerStyles, backgroundImage: `url(/src/img/${selectedIndex}.jpg)` }}>
			<Box id="banner" sx={{ width: '70%' }}>
				<Typography variant="PoppinsLarger" component="div" >{info[selectedIndex]?.bannerTitle || 'Unleash, Explore, Forge Your Own Adventure'}</Typography>
				<Typography variant="Quicksand24px" component="div" >{info[selectedIndex]?.subTitle || 'Embark on a Journey of Imagination: Choose or Craft Your Own Role-Playing Adventure'}</Typography>
			</Box>
		</Box>
	)
}

export default BannerCarousel