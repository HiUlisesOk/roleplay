import { AppBar, Box, Drawer, List, ListItem, Toolbar, ListItemButton, ListItemIcon, IconButton, Badge,} from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useState } from 'react'
import InputBase from '@mui/material/InputBase';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

import { useMediaQuery } from '@mui/material';

export default function Navbar() {    

    const [open,setOpen] = useState(false);

    const isDesktop = useMediaQuery('(min-width: 600px)');
    const DrawerContent = () => {
        return(
            <>
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List> 
                        {
                            arrayLinks.map((item)=>(      
                                <ListItem disablePadding key={item.title + item.lengt}>
                                    <ListItemButton 
                                        href={item.path}
                                        component={Link}>
                                        <ListItemIcon sx={{minWidth: 0}}>{item.icon}</ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                </List>
            </Box>
            </>
        )
    }

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
    

    const arrayLinks = [
        { title : "Home", path: "/home", icon: <HomeIcon color="secondary" />},
        { title : "Perfil", path: "/home1", icon: <PersonIcon color="secondary" />},
        { title : "Tienda", path: "/home2", icon: <ShoppingCartIcon color="secondary" />},
    ]

    return(
        <nav>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
            <Box sx={{
                display:"flex",
                justifyContent: "space-between",
                flexGrow: 1 
        }}>
            <Box sx={{display: {xs:'block', sm: 'none'}}}>
                <IconButton onClick={()=>{setOpen(!open)}}>
                    <MenuIcon />
                </IconButton>
            </Box>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Buscar..."
                inputProps={{ 'aria-label': 'search' }}
                />
          </Search>
          <Box sx={{display: {xs:'none', sm: 'flex'}, gap: 1, }}>
            <IconButton aria-label="notis">
                <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon color="action" />
                </Badge>
            </IconButton>
            <IconButton aria-label="Logout">
                <LogoutIcon color="secondary" />
            </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
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
