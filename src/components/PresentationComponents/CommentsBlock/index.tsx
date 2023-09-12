import { Box, Grid,Typography , Button} from "@mui/material";
import { useState } from "react";
import FeedbackSlider from "../FeedbackSlider";
import backgroundMainImage from "../../../images/gradient-haikei.png";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";


const faqInfo = [
    {
        label: 'Is Boston suitable for all high school grades?  ',
        description: `Absolutely! Boston caters to Grades 9 to 12 of the Cambridge curriculum.`,
      },
      {
        label: 'How does Boston adapt to individual learning styles? ',
        description:
          `Leveraging sophisticated algorithms, Boston evaluates your engagement, answers, and study rhythm to customize your learning experience.`,
      },
      {
        label: 'Special software or tools required?',
        description:
          `Not at all. Access Boston from any internet-connected device – PC, tablet, or smartphone.`,
      },
]

export default function CommentsBlock() {
  const matches = useMediaQuery("(min-width:900px)");

  const navigate = useNavigate();
  const [openIndex, setOpen] = useState();
  const handleClick = (index : any) => {
    if(openIndex === index){
        setOpen(undefined)
    } else {
        setOpen(index);
    }
  };
  return (
    <Box
      sx={{
        background: `url(${backgroundMainImage})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        p: 5,
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          p: 5,
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FeedbackSlider />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={
            matches
              ? {}
              : {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }
          }
        >
          <List
            sx={{
              width: matches ? "100%" : "450px",
              bgcolor: "background.paper",
             borderRadius: '4px',
             boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
             fontFamily: 'DM Sans'
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader"
              sx={{borderRadius: '4px', fontFamily: 'DM Sans'}}>
                FAQ
              </ListSubheader>
            }
          >
            {faqInfo.map((item, i) => {
                return (
                    <Box key={Math.random() * 2}>
                        <ListItemButton onClick={() => handleClick(i)}>
                        <ListItemText primary={item.label}/>
                        {openIndex === i ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openIndex === i} timeout='auto'>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={item.description}/>
                            </ListItemButton>
                        </List>
                        </Collapse>
                  </Box>
                )
            })}
          </List>
        </Grid>
        {/* <Box sx={{width: '100%', mt: 7, fontFamily: 'DM Sans'}}>
            <Divider sx={{fontSize: '1.7rem', whiteSpace: 'break-spaces'}}>Embark on Your Learning Journey with Boston! </Divider>
        </Box> */}
        <Grid item xs sx={{textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center',
    mt: 6}}>
            <Box>
                <Typography sx={{fontSize: '1.7rem', whiteSpace: 'break-spaces', fontFamily: 'DM Sans'}}>
                Embark on Your Learning Journey with Boston! 
                </Typography>
                <Typography sx={{fontFamily: 'DM Sans'}}>
                    Experience educational transformation and conquer the Cambridge curriculum with Boston by your side.
                </Typography>
                <Button sx={{fontFamily: 'DM Sans', mt: 2, background: '#628f4d'}} variant="contained"
                onClick={() => navigate('/signup')}>
                    Start Your Free Trial with Boston
                </Button>
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
