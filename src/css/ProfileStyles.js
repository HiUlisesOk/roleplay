import banner from '../img/lightning_strikes_abstract_high_quality_UH_0.jpg'
import theme from './ThemeStyles';

export const ProfileStyles = {
	container: {
		padding: 0,
		margin: 0,
		width: '100%',
		maxWidth: '100%', // Added to occupy the full viewport width
		height: '100vh', // Added to occupy the full viewport height
		display: 'flex', // Added to enable centering
		flexDirection: 'column', // Added to center content vertically
		padding: '0px 70px'
	},
	banner: {
		flex: 1, // Added to fill remaining space
		height: '250px',
		backgroundImage: `url(${banner})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		marginBottom: '0',
	},
	section: {
		padding: '3px',
		width: '50%',
		height: '100%', // Added to occupy full height
		borderRadius: 0, // Added to remove border radius
		display: 'flex', // Added to enable centering
		justifyContent: 'center'
	},
	Avatar: { width: 200, height: 200, mt: -15, mb: 5 },
	userName: { m: 0, p: 0, fontWeight: 600 },
	userPrimarySection: { display: 'flex', flexDirection: 'column', width: '100%', },
	userStats: { m: 0, p: 0, fontWeight: 600, },
	userStatsLabels: { m: 0, p: 0, fontWeight: 400 },
	userStatsContainer: { margin: '20px 0px' },
	userStatsIcons: { marginBottom: '-5px', marginRight: '5px' },
	userImportantIcon: { marginBottom: '-5px', marginRight: '5px', },
	userInfoLabels: { display: 'block', margin: '20px 0px 3px 0px', fontWeight: 600 },
	userInfoBio: { marginLeft: '30px' },
	activityItem: {
		margin: '100px 0px',
	}
};



console.log(theme)