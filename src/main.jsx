import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from "react-router-dom";
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

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
    fontFamily: 'Poppins',
  },
components: {
  MuiTextField: {
    styleOverrides:{
      root:{
      '& .css-1t23tt6-MuiInputBase-input-MuiFilledInput-input:-webkit-autofill': {
        '-webkitBoxShadow': '0 0 0 100px #312E2D inset'
      }
      }
    }
  }
}
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
