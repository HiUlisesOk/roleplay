import FormControl from '@mui/material/FormControl';
import { createCharacter } from "../../redux/actions/characterActions";
import { Box, Button, Divider, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export default function CrearPersonajes({ }) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [charge, setCharge] = useState('');
    const [rank, setRank] = useState('');

    const { userData } = useSelector((state) => state);
    const userId = userData?.userInfo?.ID;

    const charges = ['Charge 1', 'Charge 2', 'Charge 3',];
    const ranks = ['Rank 1', 'Rank 2', 'Rank 3',];


    const handleSubmit = (e) => {
        dispatch(createCharacter({
            userID: userId,
            name: name,
            avatar: avatar,
            charge: charge,
            rank: rank,
        }));
    };

    return (
        <Box onSubmit={handleSubmit} component='form' sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', pb: '1rem' }}   >
            <Typography sx={{ textAlign: 'center' }}>Crear Personaje</Typography>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                <TextField label="nombre"
                    onChange={(e) => {
                        setName(e.target.value);
                    }} />
                <TextField label="avatar"
                    onChange={(e) => {
                        setAvatar(e.target.value);
                    }} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <FormControl sx={{ width: '48%' }}>
                    <InputLabel id="charge-label" >Charge</InputLabel>
                    <Select labelId='charge-label'
                        fullWidth
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
                <FormControl sx={{ width: '48%' }}>
                    <InputLabel id="rank-label">Rank</InputLabel>
                    <Select labelId='rank-label'
                        fullWidth
                        onChange={(e) => {
                            setRank(e.target.value);
                        }}  >
                        {
                            ranks.map((rank) => (
                                <MenuItem value={rank}>{rank}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Box>
            <Button fullWidth type="Submit" variant="outlined" color='secondary'>Submit</Button>
        </Box>
    );
}


