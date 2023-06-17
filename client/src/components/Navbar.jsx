import { AppBar, Box, Button, Drawer, List, ListItem, Toolbar, ListItemButton, ListItemText} from "@mui/material";
import { useState } from 'react'

export default function Navbar() {    

    const [open,setOpen] = useState(false);

    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar color="secondary" position="fixed" >
            <Toolbar sx={{padding: 1}}>
                <Box sx={{display: {xs:'block', sm: 'none'}}}>
                <Button color="primary" variant="outlined" onClick={()=>{setOpen(true)}}>Menu </Button>
                </Box>
                <Box sx={{display : {xs:'none', sm: 'flex'}, gap: 1 }}>
                <Button color="primary" variant="text" >Home </Button>
                <Button color="primary" variant="text" >Home </Button>
                <Button color="primary" variant="text" >Home </Button>
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
                <ListItem >
                    <ListItemButton>
                        <ListItemText primary='Home' />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary='Home' />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary='Home' />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>

        </Box>
    )
}