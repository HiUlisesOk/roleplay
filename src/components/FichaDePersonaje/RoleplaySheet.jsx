import { updateSheet } from '../../redux/actions/sheetActions';
import { Box, Button, Divider, IconButton, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SaveIcon from '@mui/icons-material/Save';

import EditIcon from '@mui/icons-material/Edit';

import ClearIcon from '@mui/icons-material/Clear';

export default function RoleplaySheet({ roleplaySheet, editOpen, setEditOpen, canEdit }) {

    const dispatch = useDispatch();

    const { userData } = useSelector((state) => state);
    const userId = userData?.userInfo?.ID;

    const [newRealAge, setNewRealAge] = useState('');
    const [newFisicalAge, setNewFisicalAge] = useState('');
    const [newSexOr, setNewSexOr] = useState('');
    const [newOcInfo, setNewOcInfo] = useState('');
    const [newHistory, setNewHistory] = useState('');
    const [newExtraData, setNewExtraData] = useState('');
    const [newFisicalDesc, setNewFisicalDesc] = useState('');
    const [newPsicology, setNewPsicology] = useState('');

    useEffect(() => {
        if (roleplaySheet) {
            setNewRealAge(roleplaySheet.realAge);
            setNewFisicalAge(roleplaySheet.fisicalAge);
            setNewSexOr(roleplaySheet.sexOrientation);
            setNewOcInfo(roleplaySheet.ocInfo);
            setNewFisicalDesc(roleplaySheet.fisicalDesc);
            setNewPsicology(roleplaySheet.Psicology);
            setNewHistory(roleplaySheet.history);
            setNewExtraData(roleplaySheet.extraData);
        }
    }, [roleplaySheet]);

    const handleUpdateSheet = () => {
        dispatch(updateSheet({

            userID: userId,
            ID: roleplaySheet.ID,
            realAge: newRealAge,
            fisicalAge: newFisicalAge,
            sexOrientation: newSexOr,
            ocInfo: newOcInfo,
            reputation: 1,
            isDead: false,
            theme: "string",
            history: newHistory,
            extraData: newExtraData,
            fisicalDesc: newFisicalDesc,
            Psicology: newPsicology,
        }));
        window.location.reload();
    };

    return (
        <>
            <Box sx={{
                display: editOpen ? 'none' : 'flex',
                flexDirection: 'column',
                gap: '1vh',
                width: '63vw'
            }}>
                <Box sx={{ display: 'flex', gap: '3vh' }}>
                    <Typography>Real Age:</Typography>
                    <Typography sx={{ color: '#1CB251' }}>{roleplaySheet.realAge}</Typography>
                    <Typography>Fisical Age:</Typography>
                    <Typography sx={{ color: '#1CB251' }}>{roleplaySheet.fisicalAge}</Typography>
                    <Typography>Orientacion Sexual:</Typography>
                    <Typography sx={{ color: '#1CB251' }}>{roleplaySheet.sexOrientation}</Typography>
                    <Typography>Oc Info:</Typography>
                    <Typography sx={{ color: '#1CB251' }}>{roleplaySheet.ocInfo}</Typography>
                </Box>

                <Typography>Descripcion Fisica:</Typography>
                <Typography sx={{ color: '#1CB251' }}>{roleplaySheet.fisicalDesc}</Typography>
                <Typography>Descripcion Psicologica:</Typography>
                <Typography sx={{ color: '#1CB251' }}>{roleplaySheet.Psicology}</Typography>
                <Typography>Historia:</Typography>
                <Typography sx={{ color: '#1CB251' }}>{roleplaySheet.history}</Typography>
                <Typography>Datos Extra:</Typography>
                <Typography sx={{ color: '#1CB251' }}>{roleplaySheet.extraData}</Typography>

            </Box>
            <Box sx={{
                display: editOpen ? 'flex' : 'none',
                flexDirection: 'column',
                gap: '2vh',

                width: '63vw'
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TextField label="Real Age"
                        sx={{ width: '15%' }}
                        type="number"
                        value={newRealAge}
                        onChange={(e) => {
                            setNewRealAge(e.target.value);
                        }} />
                    <TextField label="Fisical Age"
                        sx={{ width: '15%' }}
                        type="number"
                        value={newFisicalAge}
                        onChange={(e) => {
                            setNewFisicalAge(e.target.value);
                        }} />
                    <TextField label="Sex Orientation"
                        sx={{ width: '30%' }}
                        value={newSexOr}
                        onChange={(e) => {
                            setNewSexOr(e.target.value);
                        }} />
                    <TextField label="Oc Info"
                        sx={{ width: '30%' }}
                        value={newOcInfo}
                        onChange={(e) => {
                            setNewOcInfo(e.target.value);
                        }} />
                </Box>

                <TextField label="Fisical Description"
                    value={newFisicalDesc}
                    multiline
                    onChange={(e) => {
                        setNewFisicalDesc(e.target.value);
                    }} />
                <TextField label="Psicology"
                    value={newPsicology}
                    multiline
                    onChange={(e) => {
                        setNewPsicology(e.target.value);
                    }} />
                <TextField label="History"
                    value={newHistory}
                    multiline
                    onChange={(e) => {
                        setNewHistory(e.target.value);
                    }} />
                <TextField label="Extra Data"
                    value={newExtraData}
                    multiline
                    onChange={(e) => {
                        setNewExtraData(e.target.value);
                    }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2vh', width: '16vw' }}>
                <Button sx={{ display: editOpen || canEdit ? 'none' : 'flex', textWrap: 'nowrap' }} onClick={() => setEditOpen(true)}
                    variant="outlined" color="secondary" startIcon={<EditIcon />}>
                    Editar Hoja de Personaje
                </Button>
                <Button sx={{ display: editOpen ? 'flex' : 'none', textWrap: 'nowrap' }} onClick={handleUpdateSheet}
                    variant="outlined" color="secondary" startIcon={<SaveIcon />}>
                    Guardar Cambios
                </Button>
                <Button sx={{ display: editOpen ? 'flex' : 'none', textWrap: 'nowrap' }} onClick={() => setEditOpen(false)}
                    variant="outlined" color="secondary" startIcon={<ClearIcon />}>
                    Cancelar
                </Button>
            </Box>

        </>
    );
}