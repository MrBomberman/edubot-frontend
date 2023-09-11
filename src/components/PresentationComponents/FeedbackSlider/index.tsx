import {useState} from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import useMediaQuery from '@mui/material/useMediaQuery';

const steps = [
  {
    label: 'Alex, Grade 11 student',
    description: `Boston the Edubot was a game changer for me. It’s like having a tutor in my pocket, always ready to help.`,
  },
  {
    label: 'Priya, Grade 10 student',
    description:
      'Boston adapts to how I learn. It challenges me when I need it and supports me when things get tough.',
  },
];

export default function FeedbackSlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep : number) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  };


  const matches = useMediaQuery('(min-width:600px)');
  return (
    <Box sx={{ maxWidth: matches ? 450 : 320, flexGrow: 1, fontFamily: 'DM Sans' }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: '#fff',
          borderRadius: '4px 4px 0 0',
          boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14)'
        }}
      >
        <Typography sx={{fontFamily: 'DM Sans'}}>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 205, maxWidth: matches ? 450 : 320, p: 2 , bgcolor: '#fff', whiteSpace: 'break-space'}}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{borderRadius: '0 0 4px 4px',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'}}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
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
          </Button>
        }
      />
    </Box>
  );
}