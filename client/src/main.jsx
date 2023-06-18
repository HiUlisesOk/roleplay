import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1CB251',
      contrastText: '#f5f5f5',
    },
    secondary: {
      main: '#171312',
      contrastText: '#f5f5f5',
    },
    white: {
      main: '#f5f5f5',
      contrastText: '#171312',
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <CssBaseline />
    <App />
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
