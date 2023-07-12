import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react'
import { logout } from '../../utils/Logout'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSelector, getUserByIdSelector } from '../../redux/selector/userSelector';
import { getUserById } from '../../redux/actions/userActions'
export default function AvatarMenu() {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { userData, loginInfo } = useSelector((state) => state);
  const userId = loginInfo?.loginInfo?.user?.ID || userData?.userInfo?.ID;

  const { getUserByIdState } = useSelector(getUserByIdSelector)

  useEffect(() => {
    dispatch(getUserById(userId))
  }, [getUserByIdSelector, userId])
  console.log(userId)

  const AvatarStyle = { width: 40, height: 40 };
  const ProfilePicture = getUserByIdState?.profilePicture || "";

  return (

    <div>
      <IconButton
        sx={{ width: 50, height: 50 }}
        onClick={handleClick}>
        <Avatar sx={AvatarStyle} src={ProfilePicture}></Avatar>
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
        <MenuItem onClick={handleClose}><Link to={`/profile/${userId}`}>Perfil</Link> </MenuItem>
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