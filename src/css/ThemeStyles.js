import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			dark: '#171312',
			main: '#1F1B1A',
			light: '#312E2D',
			contrastText: '#f5f5f5',
		},
		secondary: {
			main: '#1CB251',
			contrastText: '#f5f5f5',
		},
		background: {
			default: '#171312',
			paper: '#1f1b1a',
		},
		text: {
			primary: '#F5F5F5',
			secondary: '#ECEBEB',
			disabled: '#DCDCDC',
		},
	},
	typography: {
		fontFamily: 'Poppins, sans-serif',
	},
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .css-1t23tt6-MuiInputBase-input-MuiFilledInput-input:-webkit-autofill': {
						'-webkitBoxShadow': '0 0 0 100px #312E2D inset',
						borderRadius: '0px',
					},
				},
			},
		},
	},
});

export default theme;