import FormControl from '@mui/material/FormControl';
import { getCharacterInfo, getAllCharacters } from "../redux/actions/characterActions";
import { getAllCharacterSelector, getCharacterInfoSelector } from '../redux/selector/characterSelector';
import { startBattle, takeTurn } from '../redux/actions/battleActions';
import { startBattleSelector, takeTurnSelector } from '../redux/selector/battleSelector';
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
   const [battleClose, setBattleClose] = useState(Boolean(false));

   const [battleID, setBattleID] = useState('');
   const [reponseTurn, setResponseTurn] = useState(false);

   const { userData } = useSelector((state) => state);
   const userId = userData?.userInfo?.ID;


   const allCharacterSelector = useSelector(getAllCharacterSelector);
   const allCharacters = allCharacterSelector.getAllCharactersState;

   const characterInfoSelector = useSelector(getCharacterInfoSelector);
   const characterInfo = characterInfoSelector.getCharacterInfoState.dataValues;

   const battleStartSelector = useSelector(startBattleSelector);
   const battleStart = battleStartSelector.startBattleState;

   const turnSelector = useSelector(takeTurnSelector);
   const turn = turnSelector.takeTurnState.result;

   useEffect(() => {
      dispatch(getAllCharacters());
   }, []);

   useEffect(() => {
      if (characterInfo?.ID == character1) {
         setCharacter1Info(characterInfo);

         // console.log(character1Info, 'char1 info');
      }
      if (characterInfo?.ID == character2) {
         setCharacter2Info(characterInfo);
      }
   }, [characterInfo]);

   useEffect(() => {
      battleStart?.battle && setBattleID(battleStart.battle.ID);
   }, [battleStart]);


   useEffect(() => {
      turn?.turnAction?.currentHP == 0 && setBattleClose(true);
   }, [turn]);

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
         actionTypes: action1,
      }));
      setAction1('');
      setBattleActive(true);
      setResponseTurn(true);
   };
   const handleTakeTurn = () => {
      dispatch(takeTurn({
         CharID: reponseTurn ? character2 : character1,
         BattleID: battleID,
         action: action1,
         action2: action2,
         objectiveID: reponseTurn ? character1 : character2,
      }));
      setAction1('');
      setAction2('');
      setResponseTurn((turn) => !turn);
   };

   const actionFromNum = (num) => {
      switch (num) {
         case "1":
            return "ATK";
         case "2":
            return "DEF";
         case "3":
            return "HEAL";
         case "4":
            return "ILU";
         case "5":
            return "SKIP";
         default:
            return "Acción no reconocida";
      }
   };

   const resultFromActionStart = () => {
      switch (battleStart?.battleTurn?.turnAction?.action1) {
         case "1":
            return battleStart?.battleTurn?.turnAction?.atk;
         case "2":
            return battleStart?.battleTurn?.turnAction?.def;
         case "3":
            return battleStart?.battleTurn?.turnAction?.heal;
         case "4":
            return battleStart?.battleTurn?.turnAction?.ilu;
         default:
            return "Acción no reconocida";
      }
   };
   const resultFromAction1 = () => {
      switch (turn?.turnAction?.action1) {
         case "1":
            return turn?.turnAction?.atk;
         case "2":
            return turn?.turnAction?.def;
         case "3":
            return turn?.turnAction?.heal;
         case "4":
            return turn?.turnAction?.ilu;
         default:
            return "Acción no reconocida";
      }
   };
   const resultFromAction2 = () => {
      switch (turn?.turnAction?.action2) {
         case "1":
            return turn?.turnAction?.atk;
         case "2":
            return turn?.turnAction?.def;
         case "3":
            return turn?.turnAction?.heal;
         case "4":
            return turn?.turnAction?.ilu;
         default:
            return "Acción no reconocida";
      }
   };
   // console.log(turn, 'turn');

   return (
      <>
         <Grid container md={12} sx={{ height: '90vh', }}>
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
                                    disabled={battleActive}
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

                                    disabled={battleActive}
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
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', p: '1rem', gap: '1vw', flexDirection: 'column' }}>
                     <Box sx={{ display: 'flex', gap: '1vh' }}>
                        <Typography color="secondary">{reponseTurn ? character2Info?.name : character1Info?.name}</Typography><Typography>es tu turno!</Typography>
                     </Box>
                     <Box sx={{ display: 'flex', gap: '1vw' }}>
                        <Box sx={{ display: 'flex', gap: '1vw' }}>
                           <FormControl
                           >
                              <InputLabel id="action-label">Action 1</InputLabel>
                              <Select
                                 value={action1}
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
                                 value={action2}
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
                        <Button variant="outlined" color="secondary" disabled={!action1 || !action2}
                           fullWidth
                           onClick={handleTakeTurn}
                           sx={{
                              textWrap: 'nowrap',
                              px: '1vw'
                           }}>Enviar</Button>
                     </Box>
                  </Box>

               }

            </Grid>
            <Grid item md={6} sx={{ display: battleActive ? 'flex' : 'none', padding: '10px 100px', flexDirection: 'column' }}>
               <Box sx={{ display: 'flex', gap: '1vw' }}>
                  <Typography color="secondary">{character1Info?.name}</Typography><Typography> inicia la batalla</Typography>
               </Box>
               <Box sx={{ display: 'flex', gap: '1vw' }}>
                  <Typography>HP:</Typography>
                  <Typography color="secondary">{battleStart?.battleTurn?.turnAction?.currentHP}</Typography>
               </Box>
               <Box sx={{ display: 'flex', gap: '1vw' }}>
                  <Typography>Realiza la acción</Typography>
                  <Typography color="secondary">
                     {actionFromNum(battleStart?.battleTurn?.turnAction?.action1,) || 'error'}</Typography>
                  <Typography>contra</Typography><Typography color="secondary">{character2Info?.name}</Typography>
               </Box>
               <Box sx={{ display: 'flex', gap: '1vw' }}>
                  <Typography>Resultado:</Typography> <Typography color="secondary">{resultFromActionStart()}</Typography>
               </Box>
               <Divider sx={{ my: '2vh' }} />
               {
                  turn &&
                  <>
                     <Box sx={{ display: 'flex', gap: '1vw' }}>
                        <Typography>Turno de:</Typography>
                        <Typography color="secondary">{reponseTurn ? character1Info?.name : character2Info?.name}</Typography>
                     </Box>
                     <Box sx={{ display: 'flex', gap: '1vw' }}>
                        <Typography>HP:</Typography>
                        <Typography color="secondary">{turn?.turnAction?.previusHP}</Typography>
                     </Box>
                     <Box sx={{ display: 'flex', gap: '1vw' }}>
                        <Typography>Realiza la acción</Typography>
                        <Typography color="secondary">
                           {actionFromNum(turn?.turnAction?.action1) || 'error'}</Typography>
                        <Typography>contra</Typography><Typography color="secondary">{reponseTurn ? character2Info?.name : character1Info?.name}</Typography>
                     </Box>
                     <Box sx={{ display: 'flex', gap: '1vw' }}>
                        <Typography>Resultado:</Typography> <Typography color="secondary">{resultFromAction1()}</Typography>
                     </Box>
                     <Box sx={{ display: 'flex', gap: '1vw' }}>
                        <Typography>Realiza la acción</Typography>
                        <Typography color="secondary">
                           {actionFromNum(turn?.turnAction?.action2) || 'error'}</Typography>
                        <Typography>contra</Typography><Typography color="secondary">{reponseTurn ? character2Info?.name : character1Info?.name}</Typography>
                     </Box>
                     <Box sx={{ display: 'flex', gap: '1vw' }}>
                        <Typography>Resultado:</Typography> <Typography color="secondary">{resultFromAction2()}</Typography>
                     </Box>
                     <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography noWrap sx={{ overflow: 'unset' }}>Calculo de Daño:</Typography>
                        <Box sx={{ display: 'flex', gap: '1vw' }}>
                           <Typography color="secondary">{turn?.opponentTurnAtk}</Typography>
                           <Typography noWrap sx={{ overflow: 'unset' }}>(Atk Anterior)</Typography>
                           <Typography>-</Typography>
                           <Typography color="secondary">{turn?.turnAction?.def}</Typography>
                           <Typography noWrap sx={{ overflow: 'unset' }}>(Def Actual)</Typography>
                           <Typography>=</Typography>
                           <Typography color="secondary">{turn?.opponentTurnAtk - turn?.turnAction?.def}</Typography>
                           <Typography noWrap sx={{ overflow: 'unset' }}>(Daño Final)</Typography></Box>
                     </Box>
                     <Box sx={{ display: 'flex', gap: '1vw', flexWrap: 'wrap' }}>
                        <Typography noWrap sx={{ overflow: 'unset' }}>Calculo de HP:</Typography>
                        <Typography color="secondary">{turn?.turnAction?.previusHP}</Typography>
                        <Typography noWrap sx={{ overflow: 'unset' }}>(HP)</Typography>
                        <Typography>-</Typography>
                        <Typography color="secondary">{turn?.opponentTurnAtk - turn?.turnAction?.def}</Typography>
                        <Typography noWrap sx={{ overflow: 'unset' }}>(Daño Final)</Typography>
                     </Box>

                     <Box sx={{ display: 'flex', gap: '1vw' }}>
                        <Typography>HP:</Typography>
                        <Typography color="secondary">{turn?.turnAction?.currentHP}</Typography>
                     </Box>
                     <Divider sx={{ my: '2vh' }} />

                  </>
               }
               <Box sx={{ display: battleClose ? 'flex ' : 'none' }}>
                  hp 0
               </Box>

            </Grid>

         </Grid >
      </>
   );
}

export default Playground;;