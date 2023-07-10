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
  minWidth: 300,
  maxWidth: 600,
  minHeight: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

type ModalProps = {
  textTitle?: string,
  buttonElem?: JSX.Element,
  mainText?: string,
  openModal: boolean,
  handleClose: () => void,
  imageBook?: JSX.Element
}

export default function ModalWindow({textTitle, buttonElem, mainText, openModal, handleClose, imageBook}: ModalProps) {
  
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Boolean(imageBook) ? imageStyle : style}>
          {Boolean(imageBook) ? 
            imageBook :
            <>
              <Typography id="modal-modal-title" sx={{textAlign: 'center'}} variant="h6" component="h2">
                {textTitle}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'center', marginBottom: '15px' }}>
              {mainText}
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