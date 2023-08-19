import FormControl from '@mui/material/FormControl';
import { createCharacter } from "../redux/actions/characterActions.js";
import { Avatar, Box, Button, Divider, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SaveIcon from '@mui/icons-material/Save';

export default function CrearPersonaje({ }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [charge, setCharge] = useState('');
    const [rank, setRank] = useState('');

    const { userData } = useSelector((state) => state);
    const userId = userData?.userInfo?.ID;

    const charges = ['Charge 1', 'Charge 2', 'Charge 3',];
    const ranks = ['Rank 1', 'Rank 2', 'Rank 3',];


    const handleSubmit = () => {
        dispatch(createCharacter({
            userID: userId,
            name: name,
            avatar: avatar,
            charge: charge,
            rank: rank,
            ID: userId,
        }));

        navigate('/home');
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', pb: '1rem', mx: '10vw', mt: '2vh' }}   >
            <Typography sx={{ textAlign: 'center' }}>Ficha De Personaje</Typography>
            <Divider />
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
                    <Avatar
                        alt={name || "Character Avatar"}
                        src={avatar || ""}
                        sx={{ width: '16vw', height: '16vw', border: 'solid 3px', borderColor: 'secondary.main', '& img': { objectPosition: 'top' } }}
                    />
                    <Button variant="outlined" color="secondary" startIcon={<CameraAltIcon />}>
                        Subir Avatar
                    </Button>

                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        px: '2vw', gap: '2vh',
                        flexGrow: 1,

                    }}>
                    <TextField fullWidth label="Nombre"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }} />
                    <FormControl>
                        <InputLabel id="charge-label" >Charge</InputLabel>
                        <Select labelId='charge-label'
                            value={charge ? charge : null}

                            onChange={(e) => {
                                setCharge(e.target.value);
                            }} >
                            {
                                charges.map((charge) => (
                                    <MenuItem value={charge}>{charge}</MenuItem>
                                ))

                            }
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="rank-label">Rank</InputLabel>
                        <Select labelId='rank-label'
                            value={rank ? rank : null}
                            onChange={(e) => {
                                setRank(e.target.value);
                            }}  >
                            {
                                ranks.map((rank) => (
                                    <MenuItem value={rank}>{rank}</MenuItem>
                                )
                                )}

                        </Select>
                    </FormControl>
                    <TextField label="Avatar"
                        value={avatar}
                        onChange={(e) => {
                            setAvatar(e.target.value);
                        }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1vh' }}>
                    <Button onClick={() => {
                        handleSubmit();
                        window.location.reload();
                    }} variant="outlined" color="secondary" startIcon={<SaveIcon />}>
                        Crear Personaje
                    </Button>
                </Box>
            </Box>
            <Divider />

        </Box>
    );
}

