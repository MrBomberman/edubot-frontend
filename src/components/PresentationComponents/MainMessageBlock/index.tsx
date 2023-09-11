import { Box, Grid, Typography } from "@mui/material";
// import backgroundMainImage from '../../../images/scene-haikei.png';
import backgroundMainImage from '../../../images/gradient-haikei.png';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import useMediaQuery from '@mui/material/useMediaQuery';

const steps = [
    {
      label: 'Tailored Curriculum',
      description: `Exclusively adapted for Cambridge Assessment International Education. Cover every key topic seamlessly.`,
    },
    {
      label: '24/7 Availability',
      description:
        'From late-night queries to early morning revisions, Boston is here to support you non-stop.',
    },
    {
      label: 'Adaptive Learning',
      description: `Boston understands your unique learning pace, adjusting content for optimal comprehension and retention.`,
    },
    {
        label: 'Absolute Privacy',
        description: `Rest easy knowing your data and progress are safeguarded with top-tier encryption.`,
      },
  ];

function MainMessageBlock() {

    const matches = useMediaQuery('(min-width:600px)');
  return (
    <Box sx={{background: `url(${backgroundMainImage})`, backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
     mt: '64px'}}>
      <Grid container sx={{minHeight: "800px", p: 5,}}>
        <Grid
          item
          xs
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={matches ? { textAlign: "left",  maxWidth: 650 } : { textAlign: "center", maxWidth: 650 }}>
            <Box
              sx={{
                fontFamily: "DM Sans"
              }}
              component={"h3"}
            >
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 600, maxWidth: '650px'}}>WELCOME TO BOSTON THE EDUBOT !</Typography>
              <Box 
              sx={{ fontWeight: 200,fontSize: '1rem'}}>Your premier AI guide tailored specifically for high school students pursuing the Cambridge curriculum. 
              Dive into a personalized learning experience like no other.</Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>

        <Box sx={{ maxWidth: 400 }}>
            <Stepper orientation="vertical">
                {steps.map((step, index) => (
                <Step key={step.label} active>
                    <StepLabel 
                    >
                        <Typography
                        sx={{fontFamily: "DM Sans", fontSize: '1.1rem'}}>
                            {step.label}</Typography>
                    </StepLabel>
                    <StepContent>
                        <Typography sx={{fontFamily: "DM Sans"}}>{step.description}</Typography>
                    </StepContent>
                </Step>
                ))}
            </Stepper>
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainMessageBlock;
