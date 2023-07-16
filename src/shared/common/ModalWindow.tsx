import Box from '@mui/material/Box';
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

const imageStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 750,
  height: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY : 'auto'
}

type ModalProps = {
  textTitle?: string,
  buttonElem?: JSX.Element,
  mainText?: string,
  openModal: boolean,
  handleClose: () => void,
  imageBook?: JSX.Element,
  errorMessage?: string
}

export default function ModalWindow({textTitle, buttonElem, mainText, openModal, handleClose, imageBook, errorMessage}: ModalProps) {
  
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // sx={Boolean(imageBook) ? {width: '800px'} : {}}
      >
        <Box sx={Boolean(imageBook) ? imageStyle : style}>
          {Boolean(imageBook) ? 
            imageBook :
            <>
              <Typography id="modal-modal-title" sx={{textAlign: 'center'}} variant="h6" component="h2">
                {Boolean(errorMessage) ? errorMessage : textTitle}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'center', marginBottom: '15px' }}>
              {Boolean(errorMessage) ? '' : mainText}
              </Typography>
              <Box sx={{display: 'flex', justifyContent: 'center'}}>
                {buttonElem}
              </Box>
            </>
          }
        </Box>
      </Modal>
    </div>
  );
}