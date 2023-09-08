import {Box, Grid} from '@mui/material'

const steps = [
    {
      label: 'Tailored Curriculum',
      description: `Exclusively adapted for Cambridge Assessment International Education. Cover every key topic seamlessly.`,
    },
    {
      label: '24/7 Availability',
      description:
        'From late-night queries to early morning revisions, Boston is here to support you non-stop.',
    },
    {
      label: 'Adaptive Learning',
      description: `Boston understands your unique learning pace, adjusting content for optimal comprehension and retention.`,
    },
    {
        label: 'Absolute Privacy',
        description: `Rest easy knowing your data and progress are safeguarded with top-tier encryption.`,
      },
  ];

export default function BlockOfCardsOnPresPage(){
    return (
        <Box>
            <Grid container sx={{minHeight: "400px", p: 5, fontFamily: 'DM Sans',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"}}>
                {
                    steps.map((label, i) => {
                        return (
                            <Grid item xs={12} md={6}>
                                {label.description}
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}