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

		Poppins36px: {
			margin: '1vh',
			color: "#FFF",
			textAlign: "center",
			fontFamily: "Poppins",
			fontSize: "2vw",
			fontStyle: "normal",
			fontWeight: 600,
			lineHeight: "4vh",

		},
		Poppins18px: {
			color: "#FFF",
			fontFamily: "Poppins",
			fontSize: "18px",
			fontStyle: "normal",
			fontWeight: 400,
			lineHeight: "28px /* 155.556% */",
		},
		Quicksand24px: {
			margin: '2vw',
			color: "#FFF",
			fontFamily: "Quicksand",
			fontSize: "3.4vh",
			fontStyle: "normal",
			fontWeight: 400,
			lineHeight: "5vh",
		},
		Quicksand14px: {
			color: "var(--greys-blue-grey-100, #FFF)",
			fontFamily: "Quicksand",
			fontSize: "2vh",
			fontStyle: "normal",
			fontWeight: 700,
			lineHeight: "20px /* 142.857% */",
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
			fontFamily: 'Poppins',
			color: '#E2E4E9',
			fontSize: 18,
			fontWeight: 600,
			lineHeight: 'normal',
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
						'-webkitBoxShadow': '0 0 0 100px #312E2D inset',
						borderRadius: '0px',
					},
					'.css-78t69-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill': {
						'-webkitBoxShadow': '0 0 0 100px #312E2D inset',
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
					'-webkitBoxShadow': '0 0 0 0px inset',
				},
			},
		},
	},

});

export default theme;
