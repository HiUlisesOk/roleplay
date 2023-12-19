import banner from '../img/21.jpg'
import money from '../img/Logos/money1.png'
import theme from './ThemeStyles';

console.log(theme)

export const ProfileStyles = {
	container: {
		padding: 0,
		margin: 0,
		width: '100%',
		maxWidth: '100%', // Added to occupy the full viewport width
		height: '100vh', // Added to occupy the full viewport height
		display: 'flex', // Added to enable centering
		flexDirection: 'column', // Added to center content vertically
	},
	banner: {
		flex: 1, // Added to fill remaining space
		height: '380px',
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
	userInfo: {
		backgroundColor: theme.palette.background.paper,
		padding: '0px 10px 0px 18px',
	},
	Avatar: { width: 150, height: 150, border: 'solid 0px', m: '3px auto', cursor: 'pointer', borderColor: 'secondary.main', '& img': { objectPosition: 'top' } },
	AvatarBorder: { width: 160, height: 160, mt: -15, mb: 2, ml: -1.5, border: 'solid 2px', borderRadius: '100%', cursor: 'pointer', borderColor: 'secondary.main', '& img': { objectPosition: 'top' } },
	AvatarCharacter: { width: 70, height: 70, mt: 1, mb: 1, ml: 1, border: 'solid 3px', borderColor: 'secondary.main', '& img': { objectPosition: 'top' } },
	userName: { m: 0, ml: '0 !important', p: 0, fontWeight: 600, display: 'block', textAlign: 'left' },
	userPrimarySection: { display: 'flex', flexDirection: 'column', width: '100%', p: 0, mt: '-10px' },
	userStats: { m: 0, p: 0, fontWeight: 600, },
	userStatsLabels: { m: 0, p: 0, fontWeight: 400 },
	userStatsContainer: { margin: '20px 0px' },
	userStatsIcons: { marginBottom: '-5px', marginRight: '5px' },
	userImportantIcon: { marginBottom: '-5px', marginRight: '5px', },
	userInfoLabels: { display: 'block', margin: '20px 0px 8px 0px' },
	userInfoBio: { marginLeft: '0px' },
	activityItem: {
		margin: '100px 0px',
	},
	moneyIcon: {
		height: '3vw',
		width: '3vw !important',
		aspectRatio: '1/1',
		backgroundImage: `url(${money})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		marginBottom: '0',
	},
	moneyBadge: {
		width: "100%",
		height: "8vh",
		flexShrink: 0,
		borderRadius: "16px",
		border: "2px solid #495099",
		background: theme.palette.background.badge,
		backdropFilter: "blur(5px)",
		display: 'flex !important',
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'space-around',
		paddingTop: '6px',
	},
	moneyBadgeText: { ml: 1.5, p: 0, fontWeight: 600, display: 'block', textAlign: 'center', },
	AvatarCharacterDash: { width: '6.8vw', height: '6.8vw', margin: 'auto', border: 'solid 0px', cursor: 'pointer', borderColor: 'secondary.main', '& img': { objectPosition: 'top' } },
	AvatarCharacterDashBorder: { width: '8vw', height: '8vw', margin: 'auto', display: 'flex', flexDirection: 'column', border: 'solid 2px', borderRadius: '100%', cursor: 'pointer', borderColor: 'secondary.main', '& img': { objectPosition: 'top' } },
	AvatarCharacterDashBadge: {
		height: '3vw',
		width: '3vw',
		backgroundImage: `url(https://cdn.leonardo.ai/users/6240da8c-3f72-4493-be7f-324177870d97/generations/7298bbd3-1acf-4662-a337-9703fff3ea03/Leonardo_Diffusion_XL_A_neonlit_sophisticated_moon_gracefully_2.jpg?w=512)`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		borderRadius: '100px',
		border: "2px solid #495099",
		margin: 'auto',
		position: 'relative',
		top: '-25px'
	},
};