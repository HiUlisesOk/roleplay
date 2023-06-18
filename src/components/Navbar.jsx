import { AppBar, Box, Button, Drawer, List, ListItem, Toolbar, ListItemButton, ListItemText, ListItemIcon} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useState } from 'react'

export default function Navbar() {    

    const [open,setOpen] = useState(false);

    const arrayLinks = [
        { title : "Home", path: "/home", icon: <HomeIcon color="primary" />},
        { title : "Perfil", path: "/home1", icon: <PersonIcon color="primary" />},
        { title : "Tienda", path: "/home2", icon: <ShoppingCartIcon color="primary" />},
    ]

    return(
        <nav>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar color="secondary" position="static" >
            <Toolbar sx={{padding: 1}}>
                <Box sx={{display: {xs:'block', sm: 'none'}}}>
                <Button color="primary" variant="text" onClick={()=>{setOpen(true)}}><MenuIcon /></Button>
                </Box>
                <Box sx={{display : {xs:'none', sm: 'flex'}, gap: 1 }}>
                {
                    arrayLinks.map((item)=>(
                        <Button key={item.title + item.lengt} component={Link} to={item.path} color="primary" variant="text" startIcon={item.icon} >{item.title} </Button>
                    ))
                }
                </Box>
            </Toolbar>
        </AppBar>

        <Drawer sx={{
            '& .css-4t3x6l-MuiPaper-root-MuiDrawer-paper': {
                backgroundColor: "#171312",
                color: "#1CB251"
            }
        }} anchor="left" open={open} onClose={()=>{setOpen(false)}}>
            <List> 
                {
                    arrayLinks.map((item)=>(      
                        <ListItem disablePadding key={item.title + item.lengt}>
                            <ListItemButton 
                                href={item.path}
                                component={Link}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>

        </Box>
        </nav>
    )
}