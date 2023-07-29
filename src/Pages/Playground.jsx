import FormControl from '@mui/material/FormControl';
import { createCharacter, getAllCharacters, deleteCharacter, getCharacterInfo } from "../redux/actions/characterActions";
import { getAllCharacterSelector, getCharacterInfoSelector } from '../redux/selector/characterSelector';
import { Box, Button, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';

function Playground() {
   const dispatch = useDispatch();
   const [name, setName] = useState('');
   const [avatar, setAvatar] = useState('');
   const [charge, setCharge] = useState('');
   const [rank, setRank] = useState('');
   const [character, setCharacter] = useState(null);
   const [editOpen, setEditOpen] = useState(Boolean(false));
   const { userData } = useSelector((state) => state);
   const userId = userData?.userInfo?.ID;
   const allCharacterSelector = useSelector(getAllCharacterSelector);
   const allCharacters = allCharacterSelector.getAllCharactersState;
   const characterInfoSelector = useSelector(getCharacterInfoSelector);
   const characterInfo = characterInfoSelector.getCharacterInfoState;

   console.log(allCharacters, 'selector');

   useEffect(() => {
      dispatch(getAllCharacters());
   }, []);

   useEffect(() => {
      character && dispatch(getCharacterInfo(character));
      console.log(character, 'ID');
      console.log(characterInfo, 'Info');
   }, [character]);

   const handleDelete = (id) => {
      dispatch(deleteCharacter(id));
   };

   const handleSubmit = (e) => {
      dispatch(createCharacter({
         userID: userId,
         name: name,
         avatar: avatar,
         charge: charge,
         rank: rank,
      }));
   };
   return (
      <>
         <Grid container md={12} sx={{ height: '90vh' }}>
            <Grid item md={6} sx={{ backgroundColor: '#1e1e1e' }}>
               <Box onSubmit={handleSubmit} component='form' sx={{ display: 'flex', flexDirection: 'column', width: '200px', margin: '10px 100px', gap: '1rem' }}   >
                  <TextField label="nombre"
                     onChange={(e) => {
                        setName(e.target.value);
                     }} />
                  <TextField label="avatar"
                     onChange={(e) => {
                        setAvatar(e.target.value);
                     }} />
                  <FormControl>
                     <InputLabel id="charge-label" >Charge</InputLabel>
                     <Select labelId='charge-label'
                        onChange={(e) => {
                           setCharge(e.target.value);
                        }} >
                        <MenuItem value={'Charge 1'}>Charge 1</MenuItem>
                        <MenuItem value={'Charge 2'}>Charge 2</MenuItem>
                        <MenuItem value={'Charge 3'}>Charge 3</MenuItem>
                     </Select>
                  </FormControl>
                  <FormControl>
                     <InputLabel id="rank-label">Rank</InputLabel>
                     <Select labelId='rank-label'
                        onChange={(e) => {
                           setRank(e.target.value);
                        }}  >
                        <MenuItem value={'Rank 1'}>Rank 1</MenuItem>
                        <MenuItem value={'Rank 2'}>Rank 2</MenuItem>
                        <MenuItem value={'Rank 3'}>Rank 3</MenuItem>
                     </Select>
                  </FormControl>
                  <Button type="Submit" color='secondary'>Submit</Button>
               </Box>
            </Grid>
            <Grid item md={6} sx={{ backgroundColor: '#137c38', }}>
               {
                  allCharacters.length > 0 ?
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
                                 }}  >
                                 {allCharacters.map((item, index) => (
                                    <MenuItem key={item.index + item.name} value={item.ID}>{item.name}</MenuItem>
                                 ))
                                 }
                              </Select>
                           </FormControl>
                        </Box>

                        {characterInfo.ID ?
                           <>
                              <Box sx={{ m: '1rem', display: 'flex', justifyContent: 'space-between', backgroundColor: '#1e1e1e', flexGrow: 1, borderRadius: '10px', overflow: 'hidden', }}>

                                 <Box sx={{ display: 'flex' }}>
                                    <Box component="img"
                                       sx={{
                                          width: '100px',
                                          height: '100px'
                                       }}
                                       src={characterInfo?.avatar} />
                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: '1rem', height: '100px' }}>

                                       <Typography>{characterInfo.name}</Typography>
                                       <Typography>{characterInfo.charge}</Typography>
                                       <Typography>{characterInfo.rank}</Typography>
                                    </Box>
                                 </Box>
                                 <Box sx={{ display: 'flex', alignItems: 'center', pr: '2rem' }}>
                                    <IconButton onClick={() => {
                                       setEditOpen(prevOpen => !prevOpen);
                                    }}><EditIcon color="secondary" /></IconButton>
                                 </Box>
                              </Box>
                              <Box sx={{
                                 m: '1rem',
                                 display: editOpen ? 'flex' : 'none',
                                 backgroundColor: '#1e1e1e',
                                 flexGrow: 1,
                                 borderRadius: '10px',
                                 overflow: 'hidden',
                              }}
                              >
                                 asdasdasdas
                              </Box>
                           </>
                           :
                           null
                        }

                     </>
                     :
                     <></>
               }
            </Grid>
         </Grid>
      </>
   );
}

export default Playground;;