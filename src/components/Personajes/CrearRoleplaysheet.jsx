import { createSheet } from '../../redux/actions/sheetActions';
import { Box, Button, Divider, IconButton, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';

export default function CrearRoleplaySheet({ sheetOpen, setSheetOpen, characterInfo }) {

   const dispatch = useDispatch();

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
      <Box
         component="form"
         sx={{
            display: sheetOpen ? 'flex' : 'none',
            flexDirection: 'column',
            m: '1rem',
            backgroundColor: '#1e1e1e',
            borderRadius: '10px',
            gap: '2vh',
            py: '2vh',
            px: '1vw'
         }}>

         <>
            <Box sx={{
               display: 'flex',
               justifyContent: 'space-between',
               alignItems: 'center'
            }}>
               <Typography>Create Roleplay Sheet</Typography>
               <IconButton onClick={() => {
                  setSheetOpen(false);
               }}>
                  <CloseIcon />
               </IconButton>
            </Box>
            <Divider />
            <Box sx={{
               display: 'flex',
               flexDirection: 'column',
               gap: '1vh',
               height: '64vh',
               overflow: 'auto',
            }}>
               <Box sx={{ display: 'flex', gap: '5%' }}>
                  <TextField label="Real Age"
                     sx={{ width: '20%' }}
                     type="number"
                     value={realAge}
                     onChange={(e) => {
                        setRealAge(e.target.value);
                     }} />
                  <TextField label="Fisical Age"
                     sx={{ width: '20%' }}
                     type="number"
                     value={fisicalAge}
                     onChange={(e) => {
                        setFisicalAge(e.target.value);
                     }} />
                  <TextField label="Sex Orientation"
                     sx={{ width: '50%' }}
                     value={sexOr}
                     onChange={(e) => {
                        setSexOr(e.target.value);
                     }} />
               </Box>
               <TextField label="Oc Info"
                  value={ocInfo}
                  onChange={(e) => {
                     setOcInfo(e.target.value);
                  }} />
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
            <Button onClick={handleCreateSheet} variant="outlined" color="secondary"> Submit </Button>
         </>

      </Box>
   );
}