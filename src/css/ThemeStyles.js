import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			dark: '#312E2D',
			main: '#1F1B1A',
			light: '#171312',
			contrastText: '#DCDCDC',
		},
		secondary: {
			main: '#10497F',
			contrastText: '#DCDCDC',
		},
		accent: {
			main: '#145C9E',
			contrastText: '#DCDCDC',
		},
		light: {
			main: '#499CE9',
			contrastText: '#DCDCDC',
		},
		dark: {
			main: '#051524',
			contrastText: '#DCDCDC',
		},
		background: {
			default: '#1F1B1A',
			paper: '#171312',
			badge: 'rgba(22, 26, 66, 0.70)',
		},
		text: {
			primary: '#DCDCDC',
			secondary: '#ECEBEB',
			disabled: '#312E2D',
		},
	},
	typography: {
		fontSize: 12,
		fontFamily: 'Poppins, sans-serif',
		PoppinsLarger: {
			margin: '0.1vh',
			color: "text.primary",
			textAlign: "left",
			fontFamily: "Poppins",
			fontSize: "5.6vw",
			fontStyle: "normal",
			fontWeight: 600,
			lineHeight: "12vh",

		},
		Poppins36px: {
			margin: '1vh',
			color: "text.primary",
			textAlign: "center",
			fontFamily: "Poppins",
			fontSize: "2vw",
			fontStyle: "normal",
			fontWeight: 600,
			lineHeight: "4vh",

		},
		Poppins18px: {
			color: "text.primary",
			fontFamily: "Poppins",
			fontSize: "3vh",
			fontStyle: "normal",
			fontWeight: 400,
			lineHeight: "28px /* 155.556% */",
		},
		Poppins18left: {
			color: "text.primary",
			fontFamily: "Poppins",
			fontSize: "3vh",
			fontStyle: "normal",
			fontWeight: 700,
			lineHeight: "normal",
			textAlign: "left",
			marginRight: "auto",
		},
		Poppins16px: {
			color: "text.primary",
			fontFamily: "Poppins",
			fontSize: "2.5vh",
			fontStyle: "normal",
			fontWeight: 700,
			lineHeight: "normal",
		},
		Poppins16left: {
			color: "text.primary",
			fontFamily: "Poppins",
			fontSize: "2.5vh",
			fontStyle: "normal",
			fontWeight: 700,
			lineHeight: "normal",
			textAlign: "left",
			marginRight: "auto",
		},
		Poppins14left: {
			color: "text.primary",
			fontFamily: "Poppins",
			fontSize: "2vh",
			fontStyle: "normal",
			fontWeight: 700,
			lineHeight: "normal",
			textAlign: "left",
			marginRight: "auto",
		},
		Poppins10left: {
			color: "text.primary",
			fontFamily: "Poppins",
			fontSize: "1.8vh",
			fontStyle: "normal",
			fontWeight: 700,
			lineHeight: "normal",
			textAlign: "left",
			marginRight: "auto",
		},
		Quicksand24px: {
			margin: '0.5vw',
			color: "text.primary",
			fontFamily: "Quicksand",
			fontSize: "3.4vh",
			fontStyle: "normal",
			fontWeight: 400,
			lineHeight: "5vh",
		},
		Quicksand14px: {
			color: "text.primary",
			fontFamily: "Quicksand",
			fontSize: "2vh",
			fontStyle: "normal",
			fontWeight: 700,
			lineHeight: "2.5vh",
		},
		Quicksand14light: {
			color: "text.primary",
			fontFamily: "Quicksand",
			fontSize: "2vh",
			fontStyle: "normal",
			fontWeight: "normal",
			lineHeight: "2.5vh",
		},
		Quicksand10light: {
			color: "text.primary",
			fontFamily: "Quicksand",
			fontSize: "1.5vh",
			fontStyle: "normal",
			fontWeight: "normal",
			lineHeight: "2.5vh",
			flexShrink: 0,
			color: "#FFF",
			textAlign: "center",
		},
		GuildName: {
			color: "text.primary",
			fontFamily: "Quicksand",
			fontSize: "1.5vh",
			fontStyle: "normal",
			fontWeight: "normal",
			lineHeight: "2vh",
			flexShrink: 0,
			color: "#FFF",
			textAlign: "center",
			fontFamily: "Poppins",
			letterSpacing: "1px",
			textTransform: "uppercase",
		},
		GuildNameBig: {
			color: "text.primary",
			fontFamily: "Quicksand",
			fontSize: "2.5vh",
			fontStyle: "normal",
			fontWeight: "normal",
			lineHeight: "2vh",
			flexShrink: 0,
			color: "#FFF",
			textAlign: "center",
			fontFamily: "Poppins",
			letterSpacing: "1px",
			textTransform: "uppercase",
		},
		body1: {
			fontSize: 16,
			fontWeight: 400,
			lineHeight: 1.5,
		},
		body2: {
			fontSize: 14,
			fontWeight: 400,
			lineHeight: 1.4,
		},
		body3: {
			fontSize: 12,
			fontWeight: 200,
			lineHeight: 1,
		},
		userName: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			flexShrink: 0,
			color: "#499CE9",
			textAlign: "center",
			fontFamily: "Poppins",
			fontSize: "14px",
			fontStyle: "normal",
			fontWeight: 700,
			lineHeight: "20px /* 142.857% */",
		},
		userEmail: {
			fontFamily: 'Quicksand',
			color: '#93C5FD',
			fontSize: 14,
			fontWeight: 400,
			lineHeight: 0,
		},
		button: {

		},
		caption: {
			fontSize: 12,
			fontWeight: 400,
			fontStyle: 'italic',
		},


		Bold20px: {
			fontWeight: 'bold',
			fontSize: '20px'
		}

	},
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .css-1t23tt6-MuiInputBase-input-MuiFilledInput-input:-webkit-autofill': {
						'WebkitBoxShadow': '0 0 0 100px #312E2D inset',
						borderRadius: '0px',
					},
					'.css-78t69-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill': {
						'WebkitBoxShadow': '0 0 0 100px #312E2D inset',
						borderRadius: '0px',
					}
				},
			},
		},

		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
				disableTouchRipple: true,
				focusRipple: false,
				TouchRippleProps: { background: 'red' },
			},
		},

		MuiButton: {
			defaultProps: {
				disableRipple: true,
				disableTouchRipple: true,
				focusRipple: false,
				TouchRippleProps: { background: 'red' },
			},
		},


		MuiAppBar: {
			styleOverrides: {
				root: {
					'WebkitBoxShadow': '0 0 0 0px inset',
				},
			},
		},

	},

});



export default theme;
