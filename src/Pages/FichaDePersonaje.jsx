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
import { ModalProvider, useModal } from '../components/utils/ModalContext.jsx';
import BasicModal from '../components/utils/BasicModal.jsx';
import EditarFicha from '../components/FichaDePersonaje/EditarFicha.jsx';

export default function FichaDePersonaje({ }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { userData } = useSelector((state) => state);
    const userId = userData?.userInfo?.ID;

    const { openModal, closeModal } = useModal();

    const characterInfoSelector = useSelector(getCharacterInfoSelector);
    const characterInfo = characterInfoSelector.getCharacterInfoState.dataValues;

    const sheetInfoSelector = useSelector(getSheetByCharIdSelector);
    const sheetInfo = sheetInfoSelector.getSheetByCharIdState;


    const statsInfoSelector = useSelector(getStatsInfoSelector);
    const statsInfo = statsInfoSelector.getStatsInfoState;

    const [editCharOpen, setEditCharOpen] = useState(false);
    const [editSheetOpen, setEditSheetOpen] = useState(false);

    useEffect(() => {
        dispatch(getCharacterInfo(id));
        dispatch(getSheetByCharId(id));
        dispatch(getStatsInfo(id));
    }, [id]);

    const handleDelete = () => {
        dispatch(deleteCharacter({
            userID: userId,
            ID: characterInfo.ID
        }));
        sheetInfo[0].ID && dispatch(deleteSheet({
            userID: userId,
            ID: sheetInfo[0].ID
        }));

    };

    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', pb: '1rem', mx: '10vw', mt: '2vh' }}   >
            <Typography sx={{ textAlign: 'center' }}>Ficha De Personaje</Typography>
            <Divider />
            <Box sx={{ display: editCharOpen ? 'none' : 'flex', justifyContent: 'space-between', gap: '1vw', flexGrow: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4vh' }}>
                    <Avatar
                        alt={characterInfo?.name || "Character Avatar"}
                        src={characterInfo?.avatar || ""}
                        sx={{ width: '20vw', height: '20vw', border: 'solid 3px', borderColor: 'secondary.main', '& img': { objectPosition: 'top' } }}
                    />
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
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
                    gap: '1vh'
                }}>
                    <Box sx={{ display: 'flex', gap: '1vw' }}>
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
                                Editar
                            </Button>

                            <Button onClick={openModal}
                                variant="outlined" color="secondary" startIcon={<DeleteIcon />}>
                                Eliminar
                            </Button>
                        </>
                        :
                        null}
                </Box>

            </Box>
            <Box sx={{ display: editCharOpen ? 'flex' : 'none', justifyContent: 'space-between', gap: '1vw', flexGrow: 1 }}>
                <EditarFicha characterInfo={characterInfo} close={() => setEditCharOpen(false)} />
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1vw', width: '100%' }}>
                    {
                        !sheetInfo[0] ? <CrearRoleplaySheet characterInfo={characterInfo} /> :
                            <RoleplaySheet roleplaySheet={sheetInfo[0]} editOpen={editSheetOpen} setEditOpen={setEditSheetOpen} canEdit={editCharOpen} />
                    }

                </Box>
            </Box>
            <BasicModal>
                <Typography textAlign='center'>
                    Vas a eliminar a tu personaje permanentemente <br />
                    ¡No podrás recuperarlo luego! <br />
                    ¿Estás seguro?
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1vw', pt: '3vh' }}>
                    <Button size="small" variant="outlined" color="secondary"
                        onClick={() => {
                            handleDelete();
                            closeModal();
                            navigate('/home');
                        }}>Aceptar</Button>
                    <Button size="small" variant="outlined" color="secondary"
                        onClick={closeModal}>Cancelar</Button>
                </Box>
            </BasicModal>
        </Box>

    );
}


