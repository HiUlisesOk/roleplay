import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react'
import { logout } from '../utils/Logout'
import { Link } from 'react-router-dom';
export default function AvatarMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        sx={{ width: 50, height: 50 }}
        onClick={handleClick}>
        <Avatar sx={{ width: 40, height: 40 }}></Avatar>
      </IconButton>
      <Menu
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
        <MenuItem onClick={handleClose}><Link to="/profile/1">Perfil</Link> </MenuItem>
        <MenuItem onClick={handleClose}>Personajes</MenuItem>
        <MenuItem onClick={handleClose}>Mensajes</MenuItem>
        <MenuItem onClick={() => {
          handleClose()
          logout()
        }}>Logout</MenuItem>
      </Menu>
    </>
  )
}