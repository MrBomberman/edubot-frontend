import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BookImageSlider from '../components/BookImageSlider';
import ChatUI from '../components/ChatUI';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function StudyEdubotChat() {
  return (
    <Box sx={{ blockSize: 'auto', marginTop: '1em'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Item sx={{minHeight: '85vh', maxHeight: '85vh',  borderRadius: '10px', overflow: 'auto'}}>
            <ChatUI/>
          </Item>
        </Grid>
        <Grid item xs>
          <Item sx={{minHeight: '85vh', maxHeight: '85vh',  borderRadius: '10px', overflow: 'auto'}}>
            <BookImageSlider/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}