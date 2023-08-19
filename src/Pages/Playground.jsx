import FormControl from '@mui/material/FormControl';
import { getCharacterInfo, getAllCharacters } from "../redux/actions/characterActions";
import { getAllCharacterSelector, getCharacterInfoSelector } from '../redux/selector/characterSelector';
import { startBattle } from '../redux/actions/battleActions';
import { startBattleSelector } from '../redux/selector/battleSelector';
import { Box, Button, Divider, Grid, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Playground() {
   const dispatch = useDispatch();

   const [character1, setCharacter1] = useState(null);
   const [character1Info, setCharacter1Info] = useState(null);

   const [character2, setCharacter2] = useState(null);
   const [character2Info, setCharacter2Info] = useState(null);

   const [action1, setAction1] = useState('');
   const [action2, setAction2] = useState('');


   const [battleActive, setBattleActive] = useState(Boolean(false));

   const { userData } = useSelector((state) => state);
   const userId = userData?.userInfo?.ID;


   const allCharacterSelector = useSelector(getAllCharacterSelector);
   const allCharacters = allCharacterSelector.getAllCharactersState;

   const characterInfoSelector = useSelector(getCharacterInfoSelector);
   const characterInfo = characterInfoSelector.getCharacterInfoState.dataValues;


   useEffect(() => {
      dispatch(getAllCharacters());
   }, []);

   useEffect(() => {
      if (characterInfo?.ID == character1) {
         setCharacter1Info(characterInfo);

         console.log(character1Info, 'char1 info');
      }
      if (characterInfo?.ID == character2) {
         setCharacter2Info(characterInfo);
      }
   }, [characterInfo]);

   const actions = [
      "ATK",
      "DEF",
      "HEAL",
      "ILU",
      "SKIP"];

   const handleStartBattle = () => {
      dispatch(startBattle({
         CharID: character1,
         objectiveID: character2,
         actionTypes: 5,
      }));
      setAction1(false);
      setBattleActive(true);
   };
   const handleTakeTurn1 = () => {

   };


   return (
      <>
         <Grid container md={12} sx={{ height: '90vh' }}>
            <Grid item md={6} sx={{ backgroundColor: '#1e1e1e', padding: '10px 100px', }}>
               <Typography sx={{ textAlign: 'center', mb: '1rem' }}>Seleccionar Personaje</Typography>
               <Divider />
               <Box sx={{ display: 'flex' }}>
                  <Box >
                     {allCharacters.length > 0 &&
                        <>
                           <Box sx={{ display: 'flex', gap: '1rem', p: '1rem', width: '100%' }}>
                              <FormControl
                                 fullWidth>
                                 <InputLabel id="character-label">Character 1</InputLabel>
                                 <Select
                                    fullWidth
                                    labelId='character-label'
                                    onChange={(e) => {
                                       dispatch(getCharacterInfo(e.target.value));
                                       setCharacter1(e.target.value);
                                    }}  >
                                    {allCharacters.map((item, index) => (
                                       <MenuItem key={item.index + item.name} value={item.ID}>{item.name}</MenuItem>
                                    ))
                                    }
                                 </Select>
                              </FormControl>
                           </Box>
                        </>
                     }
                     {character1Info?.ID &&
                        <>
                           <Box sx={{ m: '1rem', display: 'flex', justifyContent: 'space-between', border: '1px solid #707070', flexGrow: 1, borderRadius: '10px', overflow: 'hidden', }}>
                              <Box sx={{ display: 'flex' }}>
                                 <Box
                                    sx={{
                                       backgroundImage: `url(${character1Info?.avatar})`,
                                       backgroundPosition: 'center',
                                       backgroundSize: 'cover',
                                       width: '100px',
                                       height: '100px'
                                    }}
                                 />
                                 <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: '1rem', height: '100px' }}>

                                    <Typography>{character1Info.name}</Typography>
                                 </Box>
                              </Box>
                           </Box>

                        </>
                     }</Box>
                  <Box >
                     {allCharacters.length > 0 &&
                        <>
                           <Box sx={{ display: 'flex', gap: '1rem', p: '1rem', width: '100%' }}>
                              <FormControl
                                 fullWidth>
                                 <InputLabel id="character-label">Character 2</InputLabel>
                                 <Select
                                    fullWidth
                                    labelId='character-label'
                                    onChange={(e) => {
                                       dispatch(getCharacterInfo(e.target.value));
                                       setCharacter2(e.target.value);
                                    }}  >
                                    {allCharacters.map((item, index) => (
                                       <MenuItem key={item.index + item.name} value={item.ID}>{item.name}</MenuItem>
                                    ))
                                    }
                                 </Select>
                              </FormControl>
                           </Box>
                        </>
                     }
                     {character2Info?.ID &&
                        <>
                           <Box sx={{ m: '1rem', display: 'flex', justifyContent: 'space-between', border: '1px solid #707070', flexGrow: 1, borderRadius: '10px', overflow: 'hidden', }}>
                              <Box sx={{ display: 'flex' }}>
                                 <Box
                                    sx={{
                                       backgroundImage: `url(${character2Info?.avatar})`,
                                       backgroundPosition: 'center',
                                       backgroundSize: 'cover',
                                       width: '100px',
                                       height: '100px'
                                    }}
                                 />
                                 <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: '1rem', height: '100px' }}>

                                    <Typography>{character2Info.name}</Typography>
                                 </Box>
                              </Box>
                           </Box>

                        </>
                     }</Box>
               </Box>
               {
                  character1 && character2 && !battleActive &&
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', p: '1rem' }}>
                     <FormControl
                     >
                        <InputLabel id="action-label">Action</InputLabel>
                        <Select

                           labelId='action-label'
                           onChange={(e) => {
                              setAction1(e.target.value);
                           }}  >
                           {actions.map((item, index) => (
                              <MenuItem key={index + item} value={index + 1}>{item}</MenuItem>
                           ))
                           }
                        </Select>
                     </FormControl>
                     <Button variant="outlined" color="secondary" disabled={!action1}
                        onClick={handleStartBattle}
                        sx={{
                           textWrap: 'nowrap',
                           px: '1vw'
                        }}>Empezar Combate</Button>
                  </Box>
               }
               {
                  battleActive &&
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', p: '1rem', gap: '1vw' }}>
                     <Box sx={{ display: 'flex', gap: '1vw' }}>
                        <FormControl
                        >
                           <InputLabel id="action-label">Action 1</InputLabel>
                           <Select
                              labelId='action1-label'
                              onChange={(e) => {
                                 setAction1(e.target.value);
                              }}  >
                              {actions.map((item, index) => (
                                 <MenuItem key={index + item} value={index + 1}>{item}</MenuItem>
                              ))
                              }
                           </Select>
                        </FormControl>
                        <FormControl
                        >
                           <InputLabel id="action2-label">Action 2</InputLabel>
                           <Select
                              labelId='action2-label'
                              onChange={(e) => {
                                 setAction2(e.target.value);
                              }}  >
                              {actions.map((item, index) => (
                                 <MenuItem key={index + item} value={index + 1}>{item}</MenuItem>
                              ))
                              }
                           </Select>
                        </FormControl>
                     </Box>
                     <Button variant="outlined" color="secondary" disabled={!action1 && !action2}
                        fullWidth
                        onClick={handleTakeTurn1}
                        sx={{
                           textWrap: 'nowrap',
                           px: '1vw'
                        }}>Enviar</Button>
                  </Box>
               }

            </Grid>

         </Grid >
      </>
   );
}

export default Playground;;