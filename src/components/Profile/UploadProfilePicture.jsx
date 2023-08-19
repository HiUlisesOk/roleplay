import React, { useEffect } from 'react';
import { Avatar, Button, IconButton } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { ProfileStyles } from '../../css/ProfileStyles';
import { useState } from 'react';
import { updateProfilePicture } from '../../redux/actions/userActions';
import { useDispatch } from 'react-redux';


const styles = {
	avatarContainer: {
		display: 'inline-block',
		position: 'relative',
	},
	Avatar: { width: 250, height: 250, mt: -10, mb: 2, ml: -1.5, border: 'solid 6px', cursor: 'pointer', borderColor: 'secondary.main', '& img': { objectPosition: 'top' } },
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

function ProfileAvatarWithCamera({ ID, userData, closeModal }) {
	const [picture, setPicture] = useState(userData?.profilePicture || "");
	const [picture64, setPicture64] = useState(null);
	const dispatch = useDispatch();


	useEffect(() => {
		setPicture(userData?.profilePicture || "")
	}, [userData?.profilePicture])


	const handleSave = () => {
		dispatch(updateProfilePicture({ imagen64: picture64, ID }));
		closeModal();
	}

	const handleUploadPicture = () => {
		// Crear un elemento de entrada de archivo
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = 'image/*';

		// Manejar el evento de cambio cuando se selecciona un archivo
		input.onchange = (event) => {
			const selectedFile = event.target.files[0];
			console.log(selectedFile);

			if (selectedFile) {
				const fileReader = new FileReader();

				// Cuando se complete la carga del archivo
				fileReader.onload = (e) => {
					const uploadedImageUrl = e.target.result;

					// Establecer la imagen en el estado (¿setPicture?)
					setPicture(uploadedImageUrl);

					// Convertir la imagen a base64 y establecerla en el estado (¿setPicture64?)
					const base64Image = uploadedImageUrl.split(',')[1]; // Eliminar el encabezado "data:image/jpeg;base64,"
					setPicture64(base64Image);
				};

				// Leer el archivo como una URL de datos
				fileReader.readAsDataURL(selectedFile);
			}
		};

		// Hacer clic en el elemento de entrada de archivo para abrir el selector de archivos
		input.click();
	};



	return (
		<div style={styles.avatarContainer} >

			<Avatar style={styles.Avatar} alt="Profile Image" src={picture} onClick={handleUploadPicture} />
			<IconButton style={styles.cameraIcon} onClick={handleUploadPicture}>
				<PhotoCameraIcon />
			</IconButton>
			<button onClick={handleSave}>Save</button>
		</div>
	);
}

export default ProfileAvatarWithCamera;

