import {useState} from 'react'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Divider from '@mui/material/Divider'
import ModalWindow from '../../shared/common/ModalWindow';
import ImageListItem from '@mui/material/ImageListItem';

const steps = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
          'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        label: 'Bird',
        imgPath:
          'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        label: 'Bali, Indonesia',
        imgPath:
          'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
      },
      {
        label: 'Goč, Serbia',
        imgPath:
          'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
      },
];

type imageObjProps = {
  label: string,
  imgPath: string
}

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const [imageCurrentObj, setImageCurrentObj] = useState<imageObjProps>({
    label: '',
    imgPath: ''
  });

  // for modal window
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{margin: '15px', color: 'rgba(0, 0, 0, 1)', fontWeight: 'bold'}}>
                    Here is the book 
            from your syllabus:
        </Typography>
        <Divider variant="middle" />
        <Box sx={{margin: '45px 10px 10px 10px'}}>
        <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 520, width: '100%', p: 2 }}>
      {steps.map((step, index) => (
          <div key={step.label}>
            {activeStep == index ? (
              <Box
                component="img"
                sx={{
                  height: 505,
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                  backgroundPosition: '50%',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setImageCurrentObj(step)
                  setOpenModal(true)
                }}
                src={`${step.imgPath}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${step.imgPath}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
        </Box>
        <ModalWindow openModal={openModal} handleClose={handleClose} 
        imageBook={
        <ImageListItem key={imageCurrentObj.imgPath}>
          <img
            src={`${imageCurrentObj.imgPath}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${imageCurrentObj.imgPath}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={imageCurrentObj.label}
            loading="lazy"
          />
      </ImageListItem>
    }/>
    </Box>
  );
}