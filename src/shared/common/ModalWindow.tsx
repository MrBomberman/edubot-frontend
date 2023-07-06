import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Modal} from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type ModalProps = {
  textTitle: string,
  buttonElem?: JSX.Element,
  mainText?: string,
  openModal: boolean,
  handleClose: () => void
}

export default function ModalWindow({textTitle, buttonElem, mainText, openModal, handleClose}: ModalProps) {
  
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" sx={{textAlign: 'center'}} variant="h6" component="h2">
            {textTitle}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {mainText}
          </Typography>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            {buttonElem}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}