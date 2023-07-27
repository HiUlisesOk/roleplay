import FormControl from '@mui/material/FormControl';
import { createCharacter, getAllCharacters, deleteCharacter } from "../redux/actions/characterActions";
import { getAllCharacterSelector } from '../redux/selector/characterSelector';
import { Box, Button, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Playground() {
   const dispatch = useDispatch();
   const [name, setName] = useState('');
   const [avatar, setAvatar] = useState('');
   const [charge, setCharge] = useState('');
   const [rank, setRank] = useState('');
   const { userData } = useSelector((state) => state);
   const userId = userData?.userInfo?.ID;
   const allCharacterSelector = useSelector(getAllCharacterSelector);
   const allCharacters = allCharacterSelector.getAllCharactersState;

   console.log(allCharacters, 'selector');

   useEffect(() => {
      dispatch(getAllCharacters());
   }, []);
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
                     <Button type="Submit" color='secondary'>Submit</Button>
                  </FormControl>
               </Box>
            </Grid>
            <Grid item md={6} sx={{ backgroundColor: '#137c38', }}>
               {
                  allCharacters.length > 0 ?
                     <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', p: '1rem' }}>
                        {allCharacters.map((item, index) => (
                           <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#1e1e1e', width: '50%', borderRadius: '10px', overflow: 'hidden' }} key={index}>
                              <Box sx={{ pl: '1rem', width: '100% ', justifyContent: 'center', display: 'flex' }}><Typography>{item.name}</Typography></Box>
                              <Box sx={{ display: 'flex' }}>
                                 <Box component="img"
                                    sx={{
                                       width: '100px',
                                       height: '100px'
                                    }}
                                    src={item.avatar} />
                                 <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: '1rem' }}>
                                    <Typography>{item.charge}</Typography>
                                    <Typography>{item.rank}</Typography>
                                    <Button variant="contained" onClick={() => { handleDelete(item.ID); }}>Delete Character</Button>
                                 </Box>
                              </Box>
                           </Box>
                        ))
                        }
                     </Box>
                     :
                     <></>
               }
            </Grid>
         </Grid>
      </>
   );
}

export default Playground;