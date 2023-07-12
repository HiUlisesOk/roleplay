import { AppBar, Box, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon,} from "@mui/material";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useState } from 'react'
import AvatarMenu from '../Nav/AvatarMenu.jsx';
import NotisMenu from '../Nav/NotisMenu.jsx';
import styles from '../../css/NavStyles.js'
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const notisArray = ['Nuevos Mensajes', 'Nuevas Respuestas','Nuevo Anuncio']
const arrayLinks = [
    { title : "Home", path: "/home", icon: <HomeIcon color="secondary" />},
    { title : "All Topics", path: "/all-topics", icon: <NewspaperIcon color="secondary" />},
    { title : "Tienda", path: "/home2", icon: <ShoppingCartIcon color="secondary" />},
]

export default function Nav() {    

    const [open,setOpen] = useState(true);
    return(
      <nav>
      <AppBar position="relative" 
      
      color="transparent"> 
        <Toolbar sx={styles.toolbar}>
                <IconButton onClick={()=>{setOpen(!open)}}>
                    <MenuOpenIcon />
                </IconButton>
            <Box sx={styles.flex}>
            <NotisMenu notis={notisArray} />
            <AvatarMenu />
            </Box>
           </Toolbar>
    </AppBar>
    <Drawer
        variant="persistent"
        anchor="left"
        open={open}

        onClose={()=>{setOpen(false)}}
        sx={styles.drawer}>
                <List>
                    <ListItem>
                        <ListItemButton onClick={()=>{setOpen(!open)}} >
                            <ListItemIcon sx={{minWidth: 0}}>
                                <CloseIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                        {
                            
                            arrayLinks.map((item)=>(      
                                <ListItem key={item.title + item.lengt}>
                                    <Tooltip title={item.title}  placement="right" arrow>
                                    <ListItemButton 
                                        to={item.path}
                                        component={Link}>
                                        <ListItemIcon sx={{minWidth: 0}}>{item.icon}</ListItemIcon>
                                    </ListItemButton>
                                    </Tooltip>
                                </ListItem>
                            ))
                        }
                </List>
    </Drawer>
    </nav>
    )
}
