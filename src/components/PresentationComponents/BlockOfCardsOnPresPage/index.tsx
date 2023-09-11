import { Box, Grid } from "@mui/material";
import ResponsiveCard from "../../../shared/common/ResponsiveCard";
// import useMediaQuery from "@mui/material/useMediaQuery";

const steps = [
  {
    label: "On-the-Go Q&A",
    description: `Immediate answers to your burning questions, anytime, anywhere.`,
  },
  {
    label: "Cambridge Mock Test Environment",
    description: `Simulate the real exam vibe with Boston's AI-driven mock tests.`,
  },
  {
    label: "Real-time Progress Insights",
    description: `Witness your growth, highlight strengths, and focus on areas awaiting mastery.`,
  },
  {
    label: "Dynamic Learning Modules",
    description: `Dive into a range of content - from riveting video lessons to quick quizzes and recap flashcards.`,
  },
];

export default function BlockOfCardsOnPresPage() {

  return (
    <Box sx={{ marginTop: 5 }}>
      <Box component={"h2"} sx={{ textAlign: "center", fontFamily: "DM Sans" }}>
        What can you get with Boston the Edubot?
      </Box>
      <Grid
        container
        sx={{
          minHeight: "400px",
          p: 5,
          fontFamily: "DM Sans",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {steps.map((label, i) => {
          return (
            <Grid
              item
              sm={12}
              md={6}
              lg={3}
              spacing={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ResponsiveCard
                title={label.label}
                text={label.description}
                responsiveCard={false}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
