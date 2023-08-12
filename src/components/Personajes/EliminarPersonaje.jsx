import { deleteCharacter } from "../../redux/actions/characterActions";
import { Box, Button, Typography } from '@mui/material';
import { useDispatch, } from 'react-redux';

export default function EliminarPersonaje({ character, deletOpen, setDeletOpen }) {
    const dispatch = useDispatch();
    return (
        <Box
            component="form"
            sx={{
                m: '1rem',
                display: deletOpen ? 'flex' : 'none',
                backgroundColor: '#1e1e1e',
                borderRadius: '10px',
                flexDirection: 'column',
                gap: '2vh',
                py: '2vh',
                px: '1vw'
            }}
            onSubmit={() => { dispatch(deleteCharacter(character.ID)); }}
        >
            <Box sx={{ textAlign: 'center', }}>
                <Typography>Estás seguro que quieres borrar a: </Typography>
                <Typography color="secondary" sx={{ textDecoration: 'underline', }}>{character.name}</Typography>
                <Typography> No podrá ser recuperado!</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                <Button color="secondary" type="submit">Borrar</Button>
                <Button color="secondary" onClick={() => { setDeletOpen(false); }}>Cancelar</Button>
            </Box>

        </Box>
    );
}