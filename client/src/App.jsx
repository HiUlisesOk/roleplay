import { Box, CssBaseline, Typography, TextField } from '@mui/material'
import Button from '@mui/material/Button'

export default function App() {
  return(
    <>
    <CssBaseline />
    <Box sx={{
      display: 'flex',
      justifyContent : 'center',
      height: '100vh',
      backgroundColor: '#1CB251',
    }}>
      <Box
      component={'img'}
      src='https://i.imgur.com/sW11viE.jpg'
      alt="background-image"
        sx={{
          height: '100vh',
          width: '100vw',
          objectFit: 'cover',  
          opacity: 0.8,
        }}
      />
    </Box>
    <Box sx={{
      position: 'absolute',
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
    }}>
      <Box>
      <Typography variant="h3" align='center' sx={{color: '#f5f5f5'}}>ROLEPLAY</Typography>
      <Typography variant="subtitle2" align='center' sx={{color: '#f5f5f5'}}>Lorem ipsum dolor sit amet consectetur.</Typography>
      </Box>
      <Box component="form" sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1}}>
      <TextField id="username" label="Nombre de usario" variant="filled" />
      <TextField id="password" label="Contraseña" variant="filled" />
      <Button variant="contained" color="primary">
        ENTRAR
      </Button>
      <Button size="small" variant="text" color="primary">
        REGISTRARSE
      </Button>
      </Box>
    </Box>
    </>
  )
}
