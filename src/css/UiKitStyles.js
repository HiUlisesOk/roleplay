import theme from '../css/ThemeStyles'
export const { cardContainer, imageCardStyles } = {
	cardContainer: {
		background: theme.palette.background.paper,
		borderRadius: '16px',
		padding: '1vw',
		width: '21vw',
		// height: '70vh',
	},
	imageCardStyles: {
		height: '25vh',
		width: '99%',
		borderRadius: '21px',
		marginLeft: 'auto',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'right',
		objectFit: 'cover',
		margin: '1vw 0vw',
		boxShadow: "4px -270px 109px -04px rgba(0, 0, 0, 0.628) inset",
		display: 'flex',
		alignItems: 'flex-end',
	}
}