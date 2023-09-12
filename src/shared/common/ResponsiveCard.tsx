import * as React from 'react';
// import { styled } from '@mui/material/styles';
import {Card} from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import useMediaQuery from '@mui/material/useMediaQuery';

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

type InfoCardObj = {
  title: string,
  text: string,
  responsiveCard: boolean 
}

export default function ResponsiveCard({title, text, responsiveCard} : InfoCardObj) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const matches = useMediaQuery('(min-width:1150px)');
  const matchesMinWidthMediumScreen = useMediaQuery("(min-width:900px)");
  return (
    <Card sx={{ maxWidth: 345, maxHeight: !matches ? 270 : 300, overflowY: 'auto' , minHeight: 200, display: 'flex', justifyContent: 'center',
  flexDirection: 'column', m: !matchesMinWidthMediumScreen ? 3 : 1.5}}
    onClick={handleExpandClick}>
      <CardHeader
      sx={{textAlign: 'center', fontFamily: "DM Sans"}}
        title={`~ ${title} ~`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{fontFamily: "DM Sans"}}>
          {text}
        </Typography>
      </CardContent>
      {responsiveCard && 
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
              </Typography>
            </CardContent>
          </Collapse>
      }
    </Card>
  );
}