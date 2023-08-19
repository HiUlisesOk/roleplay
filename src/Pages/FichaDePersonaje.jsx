import FormControl from '@mui/material/FormControl';
import { getCharacterInfo, updateCharacter, deleteCharacter } from "../redux/actions/characterActions.js";
import { getSheetByCharId, deleteSheet } from "../redux/actions/sheetActions.js";
import { getCharacterInfoSelector } from '../redux/selector/characterSelector.js';
import { getSheetByCharIdSelector } from "../redux/selector/sheetSelector.js";
import { getStatsInfo } from '../redux/actions/statsActions.js';
import { getStatsInfoSelector } from '../redux/selector/statsSelector.js';
import { useParams } from 'react-router-dom';
import { Avatar, Box, Button, Divider, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CrearRoleplaySheet from '../components/FichaDePersonaje/CrearRoleplaysheet.jsx';
import DeleteIcon from '@mui/icons-material/Delete';
import RoleplaySheet from '../components/FichaDePersonaje/RoleplaySheet.jsx';

export default function FichaDePersonaje({ }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { userData } = useSelector((state) => state);
    const userId = userData?.userInfo?.ID;

    const characterInfoSelector = useSelector(getCharacterInfoSelector);
    const characterInfo = characterInfoSelector.getCharacterInfoState.dataValues;

    const sheetInfoSelector = useSelector(getSheetByCharIdSelector);
    const sheetInfo = sheetInfoSelector.getSheetByCharIdState;


    const statsInfoSelector = useSelector(getStatsInfoSelector);
    const statsInfo = statsInfoSelector.getStatsInfoState;

    const [editCharOpen, setEditCharOpen] = useState(false);
    const [editSheetOpen, setEditSheetOpen] = useState(false);

    const [newName, setNewName] = useState('');
    const [newAvatar, setNewAvatar] = useState('');
    const [newCharge, setNewCharge] = useState('');
    const [newRank, setNewRank] = useState('');
    const [newGuildName, setNewGuildName] = useState('');
    const charges = ['Charge 1', 'Charge 2', 'Charge 3',];
    const ranks = ['Rank 1', 'Rank 2', 'Rank 3',];

    useEffect(() => {
        dispatch(getCharacterInfo(id));
        dispatch(getSheetByCharId(id));
        dispatch(getStatsInfo(id));
    }, [id]);

    useEffect(() => {
        if (characterInfo) {
            setNewName(characterInfo.name);
            setNewAvatar(characterInfo.avatar);
            setNewCharge(characterInfo.charge);
            setNewRank(characterInfo.rank);
            setNewGuildName(characterInfo.guildName || "Sin Gremio");
        }
    }, [characterInfo]);

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
    const handleDelete = () => {
        dispatch(deleteCharacter({
            userID: userId,
            ID: characterInfo.ID
        }));
        sheetInfo[0].ID && dispatch(deleteSheet({
            userID: userId,
            ID: sheetInfo.ID
        }));
    };

    console.log(statsInfoSelector, 'selector');

    console.log(statsInfo);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', pb: '1rem', mx: '10vw', mt: '2vh' }}   >
            <Typography sx={{ textAlign: 'center' }}>Ficha De Personaje</Typography>
            <Divider />
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4vh' }}>
                    <Avatar
                        alt={characterInfo?.name || "Character Avatar"}
                        src={characterInfo?.avatar || ""}
                        sx={{ width: '20vw', height: '20vw', border: 'solid 3px', borderColor: 'secondary.main', '& img': { objectPosition: 'top' } }}
                    />
                    {!editSheetOpen ?
                        <Button variant="outlined" color="secondary" startIcon={<CameraAltIcon />}>
                            Cambiar Avatar
                        </Button>
                        : null}
                </Box>
                <Box sx={{ display: editCharOpen ? 'none' : 'flex', justifyContent: 'space-between', flexGrow: 1 }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        pl: '2vw',
                        gap: '2vh'
                    }}>
                        <Typography sx={{ fontSize: '25px' }}>{characterInfo?.name}</Typography>
                        <Typography sx={{ fontSize: '25px' }}>{characterInfo?.guildName || "Sin Gremio"}</Typography>
                        <Typography sx={{ fontSize: '25px' }}>{characterInfo?.charge}</Typography>
                        <Typography sx={{ fontSize: '25px' }}>{characterInfo?.rank}</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        pl: '2vw',
                        gap: '1vh'
                    }}><Box sx={{ display: 'flex', gap: '1vw' }}>
                            <Typography sx={{ fontSize: '15px' }}>Nivel</Typography>
                            <Typography sx={{ fontSize: '15px' }}>{statsInfo.level || 0}</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', gap: '1vw' }}>
                            <Typography sx={{ fontSize: '15px' }}>HP</Typography>
                            <Typography sx={{ fontSize: '15px' }}>{statsInfo.HP || 0}</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', gap: '1vw' }}>
                            <Typography sx={{ fontSize: '15px' }}>STR</Typography>
                            <Typography sx={{ fontSize: '15px' }}>{statsInfo.STR || 0}</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', gap: '1vw' }}>
                            <Typography sx={{ fontSize: '15px' }}>RES</Typography>
                            <Typography sx={{ fontSize: '15px' }}>{statsInfo.RES || 0}</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', gap: '1vw' }}>
                            <Typography sx={{ fontSize: '15px' }}>INT</Typography>
                            <Typography sx={{ fontSize: '15px' }}>{statsInfo.INT || 0}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '1vw' }}>
                            <Typography sx={{ fontSize: '15px' }}>WIS</Typography>
                            <Typography sx={{ fontSize: '15px' }}>{statsInfo.WIS || 0}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '1vw' }}>
                            <Typography sx={{ fontSize: '15px' }}>AGI</Typography>
                            <Typography sx={{ fontSize: '15px' }}>{statsInfo.AGI || 0}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '1vw' }}>
                            <Typography sx={{ fontSize: '15px' }}>CHARM</Typography>
                            <Typography sx={{ fontSize: '15px' }}>{statsInfo.CHARM || 0}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '1vw' }}>
                            <Typography sx={{ fontSize: '15px' }}>EXP</Typography>
                            <Typography sx={{ fontSize: '15px' }}>{statsInfo.EXP || 0}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '1vw' }}>
                            <Typography sx={{ fontSize: '15px' }}>Nombre del dado</Typography>
                            <Typography sx={{ fontSize: '15px' }}>{statsInfo.diceName || "default"}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '1vw' }}>
                            <Typography sx={{ fontSize: '15px' }}>Valor del dado</Typography>
                            <Typography sx={{ fontSize: '15px' }}>{statsInfo.diceValue || 0}</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        {!editSheetOpen ?
                            <>
                                <Button onClick={() => setEditCharOpen(true)} variant="outlined" color="secondary" startIcon={<EditIcon />}>
                                    Editar Personaje
                                </Button>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1vh' }}>
                                    <Button onClick={() => {
                                        handleDelete();
                                        window.location.reload();
                                    }} variant="outlined" color="secondary" startIcon={<DeleteIcon />}>
                                        Eliminar Personaje
                                    </Button>
                                </Box>
                            </>
                            :
                            null}
                    </Box>
                </Box>
                <Box sx={{ display: editCharOpen ? 'flex' : 'none', justifyContent: 'space-between', flexGrow: 1 }}>

                    <Box component='form'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            px: '2vw',
                            gap: '2vh',
                            flexGrow: 1,

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
                        <Button onClick={() => {
                            setEditCharOpen(false);
                        }} variant="outlined" color="secondary" startIcon={<ClearIcon />}>
                            Cancelar
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1vw', width: '100%' }}>
                    {
                        !sheetInfo[0] ? <CrearRoleplaySheet characterInfo={characterInfo} /> :
                            <RoleplaySheet roleplaySheet={sheetInfo[0]} editOpen={editSheetOpen} setEditOpen={setEditSheetOpen} canEdit={editCharOpen} />
                    }

                </Box>
            </Box>
        </Box>
    );
}


