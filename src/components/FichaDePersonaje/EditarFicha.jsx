import FormControl from '@mui/material/FormControl';
import { updateCharacter } from '../../redux/actions/characterActions';
import { Avatar, Box, Button, Divider, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export default function EditarFicha({ characterInfo, close }) {
    const { userData } = useSelector((state) => state);
    const userId = userData?.userInfo?.ID;
    const dispatch = useDispatch();

    const [newName, setNewName] = useState('');
    const [newAvatar, setNewAvatar] = useState('');
    const [newCharge, setNewCharge] = useState('');
    const [newRank, setNewRank] = useState('');
    const [newGuildName, setNewGuildName] = useState('');

    const [picture64, setPicture64] = useState(null);

    const charges = ['Charge 1', 'Charge 2', 'Charge 3',];
    const ranks = ['Rank 1', 'Rank 2', 'Rank 3',];


    useEffect(() => {
        if (characterInfo) {
            setNewName(characterInfo.name);
            setNewAvatar(characterInfo.avatar);
            setNewCharge(characterInfo.charge);
            setNewRank(characterInfo.rank);
            setNewGuildName(characterInfo.guildName || "Sin Gremio");
        }
    }, [characterInfo]);


    const handleUploadPicture = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';

        input.onchange = (event) => {
            const selectedFile = event.target.files[0];
            if (selectedFile) {
                const fileReader = new FileReader();
                fileReader.onload = (e) => {
                    const uploadedImageUrl = e.target.result;
                    setNewAvatar(uploadedImageUrl);
                    const base64Image = uploadedImageUrl.split(',')[1];
                    setPicture64(base64Image);
                };
                fileReader.readAsDataURL(selectedFile);
            }
        };
        input.click();
    };

    const handleUpdate = () => {
        dispatch(updateCharacter({
            userID: userId,
            ID: characterInfo.ID,
            name: newName,
            avatar: newAvatar,
            charge: newCharge,
            rank: newRank,
            guildName: newGuildName,
        }));
    };

    return (
        <>



            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4vh' }}>
                <Avatar
                    alt={characterInfo?.name || "Character Avatar"}
                    src={newAvatar || ""}
                    sx={{ width: '20vw', height: '20vw', border: 'solid 3px', borderColor: 'secondary.main', '& img': { objectPosition: 'top' } }}
                />
                <Button
                    onClick={handleUploadPicture}
                    variant="outlined"
                    color="secondary"
                    startIcon={<CameraAltIcon />}>
                    Subir Avatar
                </Button>
            </Box>
            <Box component='form'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2vh',
                    flexGrow: 1

                }}>
                <TextField fullWidth label="nombre"
                    value={newName}
                    onChange={(e) => {
                        setNewName(e.target.value);
                    }} />
                <TextField fullWidth label="nombre"
                    value={newGuildName}
                    onChange={(e) => {
                        setNewGuildName(e.target.value);
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
                <TextField label="Avatar"
                    value={newAvatar}
                    onChange={(e) => {
                        setNewAvatar(e.target.value);
                    }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1vh' }}>
                <Button onClick={() => {
                    handleUpdate();

                    window.location.reload();
                }} variant="outlined" color="secondary" startIcon={<SaveIcon />}>
                    Guardar Cambios
                </Button>
                <Button onClick={close} variant="outlined" color="secondary" startIcon={<ClearIcon />}>
                    Cancelar
                </Button>
            </Box>
        </>
    );
}