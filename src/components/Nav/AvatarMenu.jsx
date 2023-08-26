import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react'
import { logout } from '../../utils/Logout'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSelector, getUserByIdSelector, getMyInfoSelector } from '../../redux/selector/userSelector';
import { getMyInfo, getUserById } from '../../redux/actions/userActions'
import { Box, Typography } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { getUserContext } from '../utils/userContext';


export default function AvatarMenu({ styles }) {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const { userID, username, email, userAvatar } = getUserContext()
  const userId = userID


  const AvatarStyle = { width: 40, height: 40 };
  const ProfilePicture = userAvatar || "";

  return (

    <div>
      <Box
        sx={{ cursor: 'pointer' }}
        onClick={handleClick}>
        <Box sx={styles.avatarContainer} >

          <Avatar sx={AvatarStyle} src={ProfilePicture}></Avatar>
          <Box style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="userName"> {username}</Typography>
            <Typography variant="userEmail">  {email}</Typography>
          </Box>
          {open ? <KeyboardArrowUpRoundedIcon sx={{ mt: 1 }} /> : <KeyboardArrowDownRoundedIcon sx={{ mt: 1 }} />}
        </Box>
      </Box>
      <Menu
        sx={{ mt: '15px' }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem sx={{ minWidth: '230px' }} onClick={handleClose}><Link to={`/profile/${userId}`}>Perfil</Link> </MenuItem>
        <MenuItem onClick={handleClose}>Personajes</MenuItem>
        <MenuItem onClick={handleClose}>Mensajes</MenuItem>
        <MenuItem onClick={() => {
          handleClose()
          logout()
        }}>Logout</MenuItem>
      </Menu>
    </div>
  )
}