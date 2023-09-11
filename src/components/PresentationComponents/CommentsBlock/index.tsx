import { Box, Grid } from "@mui/material";
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
  const [openIndex, setOpen] = useState();
  const handleClick = (index : number) => {
    if(openIndex === index){
        setOpen(null)
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
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                FAQ
              </ListSubheader>
            }
          >
            {faqInfo.map((item, i) => {
                return (
                    <Box key={Math.random() * 2} sx={{            fontFamily: 'DM Sans',}}>
                        <ListItemButton onClick={() => handleClick(i)}>
                        <ListItemText primary={item.label} sx={{            fontFamily: 'DM Sans',}}/>
                        {openIndex === i ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openIndex === i} timeout='auto'>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={item.description} 
                            sx={{fontFamily: 'Dm Sans'}}/>
                            </ListItemButton>
                        </List>
                        </Collapse>
                  </Box>
                )
            })}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
