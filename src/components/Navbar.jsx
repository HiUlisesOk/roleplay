import { AppBar, Box, Toolbar, IconButton, Badge,} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import AvatarMenu from './AvatarMenu.jsx';
import NavDrawer from './NavDrawer.jsx';
import NotisMenu from './NotisMenu.jsx';

const notisArray = ['Nuevos Mensajes', 'Nuevas Respuestas','Nuevo Anuncio']

export default function Navbar() {    

    const [open,setOpen] = useState(false);
    return(
      <>
      <AppBar position="absolute" color="transparent" sx={{boxShadow: 'none', pl: {xs: 0, sm:'24px'}}}>
        <Toolbar sx={{
                display:"grid",
                alignItems: 'center',
                flexGrow: 1 }}>
            <Box sx={{display: {xs:'block', sm: 'none'}, justifySelf: 'start'}}>
                <IconButton onClick={()=>{setOpen(!open)}}>
                    <MenuIcon />
                </IconButton>
            </Box>
            <Box sx={{display: {xs:'none', sm: 'flex'}, gap: 1, justifySelf: 'end', alignItems: 'center',}}>
            <NotisMenu notis={notisArray} />
            <AvatarMenu />
            </Box>
        </Toolbar>
    </AppBar>
    <NavDrawer open={open} setOpen={setOpen} />
    </>
    )
}
