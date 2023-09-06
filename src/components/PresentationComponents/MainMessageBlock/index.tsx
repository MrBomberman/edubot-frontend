import { Box, Grid, Typography } from "@mui/material"

function MainMessageBlock(){
    return (
        <Box sx={{minHeight: '400px'}}>
            <Grid container>
                <Grid item xs={7} sx={{display: 'flex',alignItems: 'center', justifyContent: 'center',
            minHeight: '400px'}}>
                    <Box sx={{textAlign: 'left'}}>
                        <Box component={'h1'}>  
                            <span>WELCOME TO BOSTON THE EDUBOT!</span>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={5}>

                </Grid>
            </Grid>


        </Box>
    )
}

export default MainMessageBlock