import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';


const styles = {
	avatarContainer: {
		display: 'inline-block',
		position: 'relative',
	},
	avatar: {
		width: '150px', /* Ajusta el tamaño del avatar según tus necesidades */
		height: '150px', /* Ajusta el tamaño del avatar según tus necesidades */
	},
	cameraIcon: {
		position: 'absolute',
		bottom: '0',
		right: '10px',
		backgroundColor: '#1976d2', /* Cambia el color del fondo del ícono según tus necesidades */
		color: '#ffffff', /* Cambia el color del ícono según tus necesidades */
		padding: '8px',
		borderRadius: '50%',
		transition: 'background-color 0.3s',
	},
	cameraIconHover: {
		backgroundColor: 'primary', /* Cambia el color del fondo del ícono al hacer hover según tus necesidades */
	},
};


function ProfileAvatarWithCamera() {
	return (
		<div style={styles.avatarContainer}>
			<Avatar style={styles.avatar} alt="Profile Image" src={""} />
			<IconButton style={styles.cameraIcon}>
				<PhotoCameraIcon />
			</IconButton>
		</div>
	);
}

export default ProfileAvatarWithCamera;

