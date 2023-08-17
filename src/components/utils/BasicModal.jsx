import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useModal } from './ModalContext';

const style = {
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 8,
  },
  button: { color: 'white', position: 'absolute', top: 0, right: 0 },
};

export default function BasicModal({ children }) {
  const { modalOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.container}>

          <Button sx={style.button} onClick={closeModal}>X</Button>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
