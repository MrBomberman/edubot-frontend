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

export default function SwipeableSendTextBlock({toggleDrawer, state}) {
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
       <Grid container spacing={0} sx={{alignItems: 'center', minHeight: '100px'}}>
        <Grid item sm={9} xs={12} md={10}>
            <TextField
              size="small"
              fullWidth
              autoFocus
              placeholder="Type a message"
              variant="outlined"
            //   value={input}
            //   onChange={handleInputChange}
            //   onKeyUp={handleKeyUP}
            />
          </Grid>
          <Grid item sm={2} xs={2} md={1}>
          <FormControl sx={{ minWidth: 100 }} size="small">
          <InputLabel id="demo-select-small-label">Command</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                // value={command}
                label="Command"
                // sx=s
                // onChange={handleSelectChange}
              >
                <MenuItem value="">
                  <em>Command</em>
                </MenuItem>
                <MenuItem value={'/quiz'}>/quiz</MenuItem>
                {/* <MenuItem value={20}></MenuItem> */}
                {/* <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
            </FormControl>  
          </Grid>
          <Grid item sm={1} xs={10} md={1}>
            <LoadingButton
              fullWidth
              color="primary"
              variant="contained"
            //   loading={loading}
            //   endIcon={<SendIcon />}
            //   onClick={handleSend}
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