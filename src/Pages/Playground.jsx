import FormControl from '@mui/material/FormControl';
import { createCharacter, getAllCharacters, deleteCharacter, getCharacterInfo, updateCharacter } from "../redux/actions/characterActions";
import { getAllCharacterSelector, getCharacterInfoSelector } from '../redux/selector/characterSelector';
import { Box, Button, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography, getNativeSelectUtilityClasses } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Playground() {
   const dispatch = useDispatch();
   const [name, setName] = useState('');
   const [avatar, setAvatar] = useState('');
   const [charge, setCharge] = useState('');
   const [rank, setRank] = useState('');

   const [newName, setNewName] = useState('');
   const [newAvatar, setNewAvatar] = useState('');
   const [newCharge, setNewCharge] = useState('');
   const [newRank, setNewRank] = useState('');

   const [character, setCharacter] = useState(null);
   const [editOpen, setEditOpen] = useState(Boolean(false));
   const [deletOpen, setDeletOpen] = useState(Boolean(false));
   const { userData } = useSelector((state) => state);
   const userId = userData?.userInfo?.ID;
   const allCharacterSelector = useSelector(getAllCharacterSelector);
   const allCharacters = allCharacterSelector.getAllCharactersState;
   const characterInfoSelector = useSelector(getCharacterInfoSelector);
   const characterInfo = characterInfoSelector.getCharacterInfoState;
   console.log(allCharacters, 'selector');

   const charges = ['Charge 1', 'Charge 2', 'Charge 3',];
   const ranks = ['Rank 1', 'Rank 2', 'Rank 3',];

   useEffect(() => {
      dispatch(getAllCharacters());
   }, []);

   useEffect(() => {
      character && dispatch(getCharacterInfo(character));
      console.log(characterInfo);
   }, [character]);

   useEffect(() => {
      if (characterInfo) {
         setNewName(characterInfo.name);
         setNewAvatar(characterInfo.avatar);
         setNewCharge(characterInfo.charge);
         setNewRank(characterInfo.rank);

      }
   }, [characterInfo]);

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
   const handleUpdate = (e) => {
      dispatch(updateCharacter({
         ID: character,
         name: newName,
         avatar: newAvatar,
         charge: newCharge,
         rank: newRank,
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
                        onChange={(e) => {
                           setRank(e.target.value);
                        }}  >
                        {
                           ranks.map((rank) => (
                              <MenuItem value={rank}>{rank}</MenuItem>
                           ))
                        }
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
                                    setEditOpen(false);
                                    setDeletOpen(false);
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
                                    }}><EditIcon color="secondary" /></IconButton>
                                    <IconButton onClick={() => {
                                       setDeletOpen(prevOpen => !prevOpen);
                                       setEditOpen(false);
                                    }}>
                                       <DeleteIcon color="secondary" /></IconButton>
                                 </Box>
                              </Box>

                              <Box
                                 component='form'
                                 sx={{
                                    m: '1rem',
                                    display: editOpen ? 'flex' : 'none',
                                    backgroundColor: '#1e1e1e',
                                    borderRadius: '10px',
                                    flexDirection: 'column',
                                    gap: '2vh',
                                    py: '2vh',
                                    px: '1vw'
                                 }}
                                 onSubmit={handleUpdate}
                              >
                                 <TextField label="nombre"
                                    value={newName}
                                    onChange={(e) => {
                                       setNewName(e.target.value);
                                    }} />
                                 <TextField label="avatar"
                                    value={newAvatar}
                                    onChange={(e) => {
                                       setNewAvatar(e.target.value);
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
                                 <Button type="Submit" color='secondary'>Submit</Button>
                              </Box>
                              <Box
                                 component="form"
                                 sx={{
                                    m: '1rem',
                                    display: deletOpen ? 'flex' : 'none',
                                    backgroundColor: '#1e1e1e',
                                    borderRadius: '10px',
                                    flexDirection: 'column',
                                    gap: '2vh',
                                    py: '2vh',
                                    px: '1vw'
                                 }}
                                 onSubmit={() => handleDelete(characterInfo.ID)}
                              >
                                 <Box sx={{ textAlign: 'center', }}>
                                    <Typography>Estás seguro que quieres borrar a: </Typography>
                                    <Typography color="secondary" sx={{ textDecoration: 'underline', }}>{characterInfo.name}</Typography>
                                    <Typography> No podrá ser recuperado!</Typography>
                                 </Box>
                                 <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                                    <Button color="secondary" type="submit">Borrar</Button>
                                    <Button color="secondary" onClick={() => { setDeletOpen(false); }}>Cancelar</Button>
                                 </Box>

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
         </Grid >
      </>
   );
}

export default Playground;;