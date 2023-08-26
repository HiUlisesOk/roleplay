import { AppBar, Box, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, Button, Typography, Autocomplete, TextField, InputAdornment, } from "@mui/material";

import { useState } from 'react';
import AvatarMenu from '../Nav/AvatarMenu.jsx';
import NotisMenu from '../Nav/NotisMenu.jsx';
import styles from '../../css/NavStyles.js';


import { Link } from "react-router-dom";


import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

import CurrencyFrancRoundedIcon from '@mui/icons-material/CurrencyFrancRounded';
import SearchIcon from '@mui/icons-material/Search';
import MiniDrawer from "./VariantDrawer.jsx";



const notisArray = ['Nuevos Mensajes', 'Nuevas Respuestas', 'Nuevo Anuncio'];



export default function Nav() {

    const [open, setOpen] = useState(true);
    return (
        <nav>
            <AppBar position="relative" color="transparent">
                <Toolbar sx={styles.toolbar}>



                    <Autocomplete
                        freeSolo
                        disablePortal
                        id="searchToolBar"
                        options={[]}
                        sx={styles.searchBar}
                        renderInput={(params) => <TextField {...params}
                            InputProps={{
                                startAdornment: <InputAdornment><SearchIcon /></InputAdornment>,
                            }}
                            label="Search by keyword" placeholder="Search by keyword" />}
                    />
                    <Box sx={styles.navSection}>
                        <CurrencyFrancRoundedIcon />
                        <Typography sx={styles.navData} >
                            3250
                        </Typography>
                    </Box>
                    <Box sx={styles.navSection}>
                        <NotisMenu notis={notisArray} />
                    </Box>
                    <Box sx={styles.navSection}>
                        <Typography sx={styles.navData} >
                            Fight
                        </Typography>
                    </Box>
                    <Button sx={styles.btnCreate} component={Link} to="/newtopic" variant="contained" endIcon={<AddBoxRoundedIcon />} color="secondary">
                        Create
                    </Button>

                    <Box sx={styles.dividerVertical}></Box>

                    <AvatarMenu styles={styles} />

                </Toolbar>
            </AppBar>

            <MiniDrawer />
        </nav >
    );
}
