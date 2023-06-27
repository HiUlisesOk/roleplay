import {Drawer, Box, List, ListItem, ListItemButton, ListItemIcon} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useMediaQuery } from '@mui/material';
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';

export default function NavDrawer({ open , setOpen }) {

    const isDesktop = useMediaQuery('(min-width: 600px)');
    const arrayLinks = [
        { title : "Home", path: "/home", icon: <HomeIcon color="secondary" />},
        { title : "Tienda", path: "/home2", icon: <ShoppingCartIcon color="secondary" />},
    ]
    const DrawerContent = () => {
        return(
            <>
            <Box sx={{ overflow: 'auto' }}>
                <List> 
                        {
                            arrayLinks.map((item)=>(      
                                <ListItem disablePadding key={item.title + item.lengt}>
                                    <Tooltip title={item.title}  placement="right" arrow>
                                    <ListItemButton 
                                        href={item.path}
                                        component={Link}>
                                        <ListItemIcon sx={{minWidth: 0}}>{item.icon}</ListItemIcon>
                                    </ListItemButton>
                                    </Tooltip>
                                </ListItem>
                            ))
                        }
                </List>
            </Box>
            </>
        )
    }

    return(
        <nav>
      {
        isDesktop ?  
        <Drawer
        variant="permanent"
        sx={{width: "auto", flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: "auto", boxSizing: 'border-box'}
        }}>
            <DrawerContent />
        </Drawer>
        : 
        <Drawer
        anchor="left"
        open={open}
        onClose={()=>{setOpen(false)}}
        sx={{width: "auto", flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: "auto", boxSizing: 'border-box'}
        }}>  
            <DrawerContent />
        </Drawer>
        }
        </nav>
    )
}