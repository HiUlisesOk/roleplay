import FormControl from '@mui/material/FormControl';
import { updateCharacter } from "../../redux/actions/characterActions";
import { Box, Button, InputLabel, MenuItem, Select, TextField, } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

export default function EditarPersonaje({ characterInfo, editOpen }) {
    const dispatch = useDispatch();
    const [newName, setNewName] = useState('');
    const [newAvatar, setNewAvatar] = useState('');
    const [newCharge, setNewCharge] = useState('');
    const [newRank, setNewRank] = useState('');

    useEffect(() => {
        if (characterInfo) {
            setNewName(characterInfo.name);
            setNewAvatar(characterInfo.avatar);
            setNewCharge(characterInfo.charge);
            setNewRank(characterInfo.rank);

        }
    }, [characterInfo]);

    const charges = ['Charge 1', 'Charge 2', 'Charge 3',];
    const ranks = ['Rank 1', 'Rank 2', 'Rank 3',];


    const handleUpdate = () => {
        dispatch(updateCharacter({
            ID: characterInfo.ID,
            name: newName,
            avatar: newAvatar,
            charge: newCharge,
            rank: newRank,
        }));
    };

    return (
        <Box
            component='form'
            sx={{
                m: '1rem',
                display: editOpen ? 'flex' : 'none',
                backgroundColor: '#1e1e1e',
                borderRadius: '10px',
                flexDirection: 'column',
                gap: '2vh',
                py: '2vh',
                px: '1vw'
            }}
            onSubmit={handleUpdate}
        >
            <TextField label="nombre"
                value={newName}
                onChange={(e) => {
                    setNewName(e.target.value);
                }} />
            <TextField label="avatar"
                value={newAvatar}
                onChange={(e) => {
                    setNewAvatar(e.target.value);
                }} />
            <FormControl>
                <InputLabel id="charge-label" >Charge</InputLabel>
                <Select labelId='charge-label'
                    value={newCharge ? newCharge : null}

                    onChange={(e) => {
                        setNewCharge(e.target.value);
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
                    value={newRank ? newRank : null}
                    onChange={(e) => {
                        setNewRank(e.target.value);
                    }}  >
                    {
                        ranks.map((rank) => (
                            <MenuItem value={rank}>{rank}</MenuItem>
                        )
                        )}

                </Select>
            </FormControl>
            <Button type="Submit" color='secondary'>Submit</Button>
        </Box>
    );
}