import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
// import classes from './navigationPanel.module.css';
// import startWithUpperCase from '../../utils/common/startWithUpperCase';
// import getPageNameFromUrl from '../../utils/common/getPageNameFromUrl';
// import AccountButton from '../AccountButton';
// import SearchInput from '../SearchInput';

const drawerWidth = 240;

function NavigationPanel({window ,children}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const pages = ['new', 'confirmed', 'hold', 'trash'];

  const location = useLocation();

  const drawer = (
    <div>
      <Toolbar>Edubot</Toolbar>
      <Divider />
      {/* <List>
        {pages.map((text, index) => (
          <Link 
          key={text} to={`/${text}`} onClick={handleDrawerToggle} 
          className={getPageNameFromUrl(location.pathname) === startWithUpperCase(text) ? 
          classes.currentLink : classes.link}
          >
            <ListItem disablePadding 
              className={getPageNameFromUrl(location.pathname) === startWithUpperCase(text) ? 
              classes.currentBack : ''}
              >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List> */}
      {/* <Divider /> */}
      {/* <List>
        {['history'].map((text, index) => (
          <Link 
          key={text} to={`/${text}`} onClick={handleDrawerToggle} 
            className={getPageNameFromUrl(location.pathname) === startWithUpperCase(text) ? 
            classes.currentLink : classes.link}
            >
            <ListItem disablePadding 
              className={getPageNameFromUrl(location.pathname) === startWithUpperCase(text) ? 
              classes.currentBack : ''}
              >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {/* {getPageNameFromUrl(location.pathname)} */}
          </Typography>
          <Typography sx={{display: 'flex'}} noWrap component="div">
              {/* <SearchInput/>
              <AccountButton/> */}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={menuOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

NavigationPanel.propTypes = {
  window: PropTypes.func,
};

export default NavigationPanel;