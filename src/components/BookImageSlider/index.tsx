import {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Divider from '@mui/material/Divider'
// import ModalWindow from '../../shared/common/ModalWindow';
// import ImageListItem from '@mui/material/ImageListItem';
import { useSelector } from 'react-redux';
import { RootStateOrAny } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';

// type imageObjProps = {
//   label: string,
//   imgPath: string
// }

export default function BookImageSlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState<number>(0);
  // const maxSteps = steps.length;

  // const [imageCurrentObj, setImageCurrentObj] = useState<imageObjProps>({
  //   label: '',
  //   imgPath: ''
  // });
  

  // for store 

  const imagesArray = useSelector((state: RootStateOrAny) => state.imageControllerReducer.imagesArray)

  const loading = useSelector((state: RootStateOrAny) => state.imageControllerReducer.loading);

  const openInNewTab = (url : string) => {
    window.open(url, '_blank', "width=800, height=800");
  };

  // for modal window
  // const [openModal, setOpenModal] = useState(false);
  // const handleClose = () => setOpenModal(false)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  useEffect(() => {
    console.log(imagesArray)
  }, [])

  // console.log('loading', loading)

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{margin: '15px', color: 'rgba(0, 0, 0, 1)', fontWeight: 'bold'}}>
                    Here is the book 
            from your syllabus:
        </Typography>
        <Divider variant="middle" />

        {loading ? <Skeleton height={600}/> : 

        imagesArray.length === 0 ? "There isn't any page from book for your last message" :
        <>
                    <MobileStepper
              variant="text"
              steps={imagesArray.length}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === imagesArray.length - 1}
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
            <Box sx={{margin: '15px 10px 10px 10px'}}>          
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
              <Typography>{`Page: ${imagesArray[activeStep].label}`}</Typography>
            </Paper>
            <Box sx={{ height: 540, width: '100%', p: 2 }}>
            {imagesArray.map((step : any, index : number) => (
                <div key={step.label}>
                  {activeStep == index ? (
                    <Box
                      component="img"
                      sx={{
                        height: 'auto',
                        display: 'block',
                        overflow: 'hidden',
                        width: '100%',
                        backgroundPosition: '50%',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        cursor: 'pointer'
                      }}
                      onClick={() => {
                        // setImageCurrentObj(step)
                        // setOpenModal(true)
                        openInNewTab(step.imgPath)
                      }}
                      src={`${step.imgPath}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${step.imgPath}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </Box>
          </Box>
        </>
        }
        {/* <ModalWindow openModal={openModal} handleClose={handleClose} 
        imageBook={
        <ImageListItem key={imageCurrentObj.imgPath}>
          <img
            src={`${imageCurrentObj.imgPath}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${imageCurrentObj.imgPath}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={imageCurrentObj.label}
            loading="lazy"
            style={{overflow: 'auto'}}
          />
      </ImageListItem>
        }/> */}
    </Box>
  );
}