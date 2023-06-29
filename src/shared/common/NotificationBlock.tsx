import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

type NotificationContent = {
    badgeContent : number
}

export default function NotificationBlock({ badgeContent } : NotificationContent) {

  return (
    <Box sx={{ flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={badgeContent} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
    </Box>
  );
}