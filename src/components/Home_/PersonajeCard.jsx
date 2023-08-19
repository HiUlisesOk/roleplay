import { Avatar, Box, Button, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function PersonajeCard({ character }) {

    const navigate = useNavigate();
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%', textAlign: 'center', px: '1%', justifyContent: 'space-around', height: '100%' }}>
            <Typography color="secondary" sx={{ fontSize: '24px' }}>{character?.name || "Personaje Nuevo"}</Typography>
            <Avatar
                alt={character?.name || "User Profile Picture"}
                src={character?.avatar || ""}
                sx={{ width: '14.5vw', height: '14.5vw', mx: 'auto', border: 'solid 3px', borderColor: 'secondary.main', '& img': { objectPosition: 'top' } }}
            />
            {
                character?.ID ?
                    <Button color="secondary" fullWidth variant="contained"
                        onClick={() => { navigate(`/ficha-de-personaje/${character?.ID}`); }}>Ver Personaje</Button> :
                    <Button color="secondary" fullWidth variant="contained"
                        onClick={() => { navigate(`/crear-personaje`); }}>Crear Personaje</Button>
            }


        </Box>
    );
}