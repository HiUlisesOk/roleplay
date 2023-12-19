import { IconButton, Badge, Menu, MenuItem } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react'

export default function NotisMenu({ notis = [] }) {
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
        <Badge badgeContent={notis.length} color="secondary">
          <NotificationsIcon color="action" />
        </Badge>
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
        {
          notis.map(
            (item, index) => (
              <MenuItem key={`Notis-${index}`} onClick={handleClose}>{item}</MenuItem>
            )
          )
        }
      </Menu>
    </>
  )
}