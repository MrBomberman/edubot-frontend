import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Grid, InputLabel, FormControl, Select, MenuItem, TextField } from '@mui/material';
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';





export default function SwipeableSendTextBlock({toggleDrawer, state, loading, input, handleKeyUP, handleInputChange,
    handleSend, handleSelectChange, command} : any) {


    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
        };
    
    const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
    };

    const StyledTextarea = styled(TextareaAutosize)(
        ({ theme }) => `
        width: 80vw;
        height: 6vh;
        font-family: Inter, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 12px;
        resize: none;
        border-radius: 12px 12px 0 12px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
        
        &:hover {
            border-color: ${blue[400]};
        }
        
        &:focus {
            border-color: ${blue[400]};
            box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
        }
        
        // firefox
        &:focus-visible {
            outline: 0;
        }
        `,
        );
        
//   const [state, setState] = React.useState({
//     bottom: false
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event &&
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    //   onClick={toggleDrawer(anchor, false)}
    //   onKeyDown={toggleDrawer(anchor, false)}
    >
       <Grid container spacing={2} sx={{alignItems: 'center', minHeight: '15vh', padding: '15px'}}>
        <Grid item sm={9} xs={12} md={10}>
            <StyledTextarea
              minRows={2}
              maxRows={2}
              autoFocus
              placeholder="Type a message..."
            //   value={input}
              onChange={(e) => console.log(e.target.value)}
              onKeyUp={handleKeyUP}
            />
          </Grid>
          <Grid item sm={2} xs={2} md={1}>
          <FormControl sx={{ minWidth: 100 }} size="small">
          <InputLabel id="demo-select-small-label">Command</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={command}
                label="Command"
                sx={{height: '5vh'}}
                onChange={handleSelectChange}
              >
                <MenuItem value="">
                  <em>Command</em>
                </MenuItem>
                <MenuItem value={'/quiz'}>/quiz</MenuItem>
            </Select>
            </FormControl>  
          </Grid>
          <Grid item sm={1} xs={10} md={1}>
            <LoadingButton
              fullWidth
              color="primary"
              variant="contained"
              sx={{height: '5vh'}}
              loading={loading}
              endIcon={<SendIcon />}
              onClick={handleSend}
            >
              Send
            </LoadingButton>
          </Grid>
          </Grid>
      <Divider />
    </Box>
  );

  return (
    <div>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}