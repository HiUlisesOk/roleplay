import { createSheet } from '../../redux/actions/sheetActions';
import { Box, Button, TextField, } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';

export default function CrearRoleplaySheet({ close, characterInfo }) {

   const dispatch = useDispatch();

   const { userData } = useSelector((state) => state);
   const userId = userData?.userInfo?.ID;

   const [realAge, setRealAge] = useState('');
   const [fisicalAge, setFisicalAge] = useState('');
   const [sexOr, setSexOr] = useState('');
   const [ocInfo, setOcInfo] = useState('');
   const [history, setHistory] = useState('');
   const [extraData, setExtraData] = useState('');
   const [fisicalDesc, setFisicalDesc] = useState('');
   const [psicology, setPsicology] = useState('');

   const handleCreateSheet = () => {
      dispatch(createSheet({
         userID: userId,
         realAge: realAge,
         fisicalAge: fisicalAge,
         sexOrientation: sexOr,
         ocInfo: ocInfo,
         reputation: 1,
         isDead: false,
         theme: "string",
         history: history,
         extraData: extraData,
         fisicalDesc: fisicalDesc,
         Psicology: psicology,
         CharacterID: characterInfo.ID
      }));
      window.location.reload();
   };


   return (
      <>
         <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1vh',
            width: '75%'
         }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
               <TextField label="Real Age"
                  sx={{ width: '15%' }}
                  type="number"
                  value={realAge}
                  onChange={(e) => {
                     setRealAge(e.target.value);
                  }} />
               <TextField label="Fisical Age"
                  sx={{ width: '15%' }}
                  type="number"
                  value={fisicalAge}
                  onChange={(e) => {
                     setFisicalAge(e.target.value);
                  }} />
               <TextField label="Sex Orientation"
                  sx={{ width: '30%' }}
                  value={sexOr}
                  onChange={(e) => {
                     setSexOr(e.target.value);
                  }} />
               <TextField label="Oc Info"

                  sx={{ width: '30%' }}
                  value={ocInfo}
                  onChange={(e) => {
                     setOcInfo(e.target.value);
                  }} />
            </Box>

            <TextField label="Fisical Description"
               value={fisicalDesc}
               multiline
               onChange={(e) => {
                  setFisicalDesc(e.target.value);
               }} />
            <TextField label="Psicology"
               value={psicology}
               multiline
               onChange={(e) => {
                  setPsicology(e.target.value);
               }} />
            <TextField label="History"
               value={history}
               multiline
               onChange={(e) => {
                  setHistory(e.target.value);
               }} />
            <TextField label="Extra Data"
               value={extraData}
               multiline
               onChange={(e) => {
                  setExtraData(e.target.value);
               }} />
         </Box>
         <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
            <Button onClick={handleCreateSheet}
               variant="outlined" color="secondary" startIcon={<SaveIcon />}>
               Crear Hoja de Personaje
            </Button>
         </Box>
      </>

   );
}