import banner from '../img/DreamShaper_v6_Naruto_fire_abstract_high_quality_UHD_Luminous_0.jpg'

export const ProfileStyles = {
	container: {
		padding: 0,
		margin: 0,
		width: '100vw',
		maxWidth: '100vw', // Added to occupy the full viewport width
		height: '100vh', // Added to occupy the full viewport height
		display: 'flex', // Added to enable centering
		flexDirection: 'column', // Added to center content vertically

	},
	banner: {
		flex: 1, // Added to fill remaining space
		backgroundImage: `url(${banner})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		marginBottom: '0',
	},
	section: {
		padding: '3px',
		width: '50vw',
		height: '100%', // Added to occupy full height
		borderRadius: 0, // Added to remove border radius
		display: 'flex', // Added to enable centering
		justifyContent: 'center'
	},
	Avatar: { width: 150, height: 150, mt: -10, ml: 4 },
	userName: { m: 0, p: 0 },
	userPrimarySection: { display: 'flex', flexDirection: 'column', width: '100%', padding: '0px 70px' },
};