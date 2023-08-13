import FormControl from '@mui/material/FormControl';
import { createCharacter, getAllCharacters, deleteCharacter, getCharacterInfo, updateCharacter } from "../redux/actions/characterActions";
import { getAllCharacterSelector, getCharacterInfoSelector } from '../redux/selector/characterSelector';
import { createSheet, getSheetInfo, getAllSheets, getSheetByCharId } from '../redux/actions/sheetActions';
import { getSheetInfoSelector, getAllSheetsSelector, getSheetByCharIdSelector } from '../redux/selector/sheetSelector';
import { Box, Button, Divider, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography, getNativeSelectUtilityClasses } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import CrearPersonajes from '../components/Personajes/CrearPersonajes';
import EditarPersonaje from '../components/Personajes/EditarPersonaje';
import EliminarPersonaje from '../components/Personajes/EliminarPersonaje';
import CrearRoleplaySheet from '../components/Personajes/CrearRoleplaysheet';
import RoleplaypSheet from '../components/Personajes/RoleplaySheet';

function Playground() {
   const dispatch = useDispatch();

   const [character, setCharacter] = useState(null);

   const [editOpen, setEditOpen] = useState(Boolean(false));
   const [deletOpen, setDeletOpen] = useState(Boolean(false));
   const [sheetOpen, setSheetOpen] = useState(Boolean(false));

   const { userData } = useSelector((state) => state);
   const userId = userData?.userInfo?.ID;
   const allCharacterSelector = useSelector(getAllCharacterSelector);
   const allCharacters = allCharacterSelector.getAllCharactersState;
   const characterInfoSelector = useSelector(getCharacterInfoSelector);
   const characterInfo = characterInfoSelector.getCharacterInfoState;
   const allSheetsSelector = useSelector(getAllSheetsSelector);
   const allSheets = allSheetsSelector.getAllSheetsState;

   const sheetByCharacterIdSelector = useSelector(getSheetByCharIdSelector);
   const sheetByCharacterId = sheetByCharacterIdSelector.getSheetByCharIdState;

   console.log(sheetByCharacterId);

   useEffect(() => {
      dispatch(getAllCharacters());
   }, []);

   useEffect(() => {
      if (character) {
         dispatch(getCharacterInfo(character));
         dispatch(getSheetByCharId(character));
      }
   }, [character]);

   return (
      <>
         <Grid container md={12} sx={{ height: '90vh' }}>
            <Grid item md={6} sx={{ backgroundColor: '#1e1e1e', padding: '10px 100px', }}>
               <CrearPersonajes />
               <Typography sx={{ textAlign: 'center', mb: '1rem' }}>Seleccionar Personaje</Typography>
               <Divider />
               {allCharacters.length > 0 ?
                  <>
                     <Box sx={{ display: 'flex', gap: '1rem', p: '1rem', width: '100%' }}>
                        <FormControl
                           fullWidth>
                           <InputLabel id="character-label">Character</InputLabel>
                           <Select
                              fullWidth
                              labelId='character-label'
                              onChange={(e) => {
                                 setCharacter(e.target.value);
                                 setEditOpen(false);
                                 setDeletOpen(false);
                                 setSheetOpen(false);
                              }}  >
                              {allCharacters.map((item, index) => (
                                 <MenuItem key={item.index + item.name} value={item.ID}>{item.name}</MenuItem>
                              ))
                              }
                           </Select>
                        </FormControl>
                     </Box>
                  </>
                  :
                  <></>
               }
               {characterInfo.ID ?
                  <>
                     <Box sx={{ m: '1rem', display: 'flex', justifyContent: 'space-between', border: '1px solid #707070', flexGrow: 1, borderRadius: '10px', overflow: 'hidden', }}>
                        <Box sx={{ display: 'flex' }}>
                           <Box
                              sx={{
                                 backgroundImage: `url(${characterInfo?.avatar})`,
                                 backgroundPosition: 'center',
                                 backgroundSize: 'cover',
                                 width: '100px',
                                 height: '100px'
                              }}
                           // component="img"
                           //    src={characterInfo?.avatar} 
                           />
                           <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: '1rem', height: '100px' }}>

                              <Typography>{characterInfo.name}</Typography>
                              <Typography>{characterInfo.charge}</Typography>
                              <Typography>{characterInfo.rank}</Typography>
                           </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', pr: '2rem' }}>
                           <IconButton onClick={() => {
                              setEditOpen(prevOpen => !prevOpen);
                              setDeletOpen(false);
                              setSheetOpen(false);
                           }}><EditIcon color="secondary" /></IconButton>
                           <IconButton onClick={() => {
                              setDeletOpen(prevOpen => !prevOpen);
                              setEditOpen(false);
                              setSheetOpen(false);
                           }}>
                              <DeleteIcon color="secondary" /></IconButton>
                        </Box>
                     </Box>
                     <Button fullWidth color="secondary" variant="outlined"
                        onClick={() => {
                           setSheetOpen(true);
                           setDeletOpen(false);
                           setEditOpen(false);
                        }}>
                        Roleplay Sheet
                     </Button>
                  </>
                  :
                  null
               }
            </Grid>
            <Grid item md={6} sx={{ backgroundColor: '#137c38', }}>
               <EditarPersonaje characterInfo={characterInfo} editOpen={editOpen} />
               <EliminarPersonaje character={characterInfo} roleplaySheet={sheetByCharacterId[0]} deletOpen={deletOpen} setDeletOpen={setDeletOpen} />
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
                     px: '1vw',
                     height: '84vh',
                     overflow: 'auto'
                  }}>
                  {
                     sheetByCharacterId.length > 0 ?
                        <RoleplaypSheet roleplaySheet={sheetByCharacterId[0]} setSheetOpen={setSheetOpen} />
                        : <CrearRoleplaySheet characterInfo={characterInfo} setSheetOpen={setSheetOpen} />
                  }
               </Box>
            </Grid>
         </Grid >
      </>
   );
}

export default Playground;;