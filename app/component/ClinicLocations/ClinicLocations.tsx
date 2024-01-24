import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Content = () => {
  return (
    <Box className="py-10">
      <Grid container className="justify-around">
        <Grid item sm={11} md={11} lg={9}>

          <Box>
            <Grid container spacing={5} className="justify-center" >

              <Grid sx={{ height: "100%"}} item xs={12} sm={12} md={6} lg={6}>
                <Box sx={{ backgroundColor: "white" }} className="p-5 rounded-md ">
                  <Box>
                    <Typography gutterBottom variant='h5'>
                    Address 1
                    </Typography>
                    <Typography  variant='subtitle1'>
                    Plot No. 8, PU04 Commercial Scheme 54, Rasoma Square, AB Rd, Vijay Nagar, Indore, Madhya Pradesh 452010
                    </Typography>
                  </Box>
                  <Box>
                    <Button variant="outlined" color="primary" endIcon={<ArrowForwardIcon />}
                      sx={{
                        backgroundColor: 'rgb(49, 77, 144, 0.62)',
                        '&:hover': {
                          backgroundColor: 'rgb(49, 77, 144, 0.8)',
                        },
                        marginTop:"0.5rem",
                        color: 'rgb(49, 77, 144, 0.62)',
                      }}> Get direction</Button></Box>
                </Box>
              </Grid>

              <Grid sx={{ height: "100%" }} item xs={12} sm={12} md={6} lg={6}>
                <Box sx={{ backgroundColor: "white" }} className=" p-5 rounded-md ">
                  <Box>
                    <Typography gutterBottom variant='h5'>
                    Address 2
                    </Typography>
                    <Typography variant='subtitle1'>
                    Plot No. 8, PU04 Commercial Scheme 54, Rasoma Square, AB Rd, Vijay Nagar, Indore, Madhya Pradesh 452010
                    </Typography>
                  </Box>
                  <Box>
                    <Button variant="outlined" color="primary" endIcon={<ArrowForwardIcon />}
                      sx={{
                        backgroundColor: 'rgb(49, 77, 144, 0.62)',
                        '&:hover': {
                          backgroundColor: 'rgb(49, 77, 144, 0.8)',
                        },
                        marginTop:"0.5rem",
                        color: 'rgb(49, 77, 144, 0.62)',
                      }}> Get direction</Button></Box>
                </Box>
              </Grid>

            </Grid>
          </Box>

        </Grid>
      </Grid >
    </Box >
  )
}

const ClinicLocations = () => {
  return (
    <Box sx={{ backgroundColor: "#F8F9FE" }} className="">
      <Grid container className="justify-around">
        <Grid item sm={11} md={11} lg={9}>
          <Box>
            <Grid container>
              <Grid item sm={11} md={6} lg={5}>
                <Typography sx={{ color: "#09A4AD" }} variant='subtitle1'>
                Address
                </Typography>
                <Typography variant='h4'>
                Clinic locations
                </Typography>
              </Grid>

              <Content />

            </Grid>
          </Box>
        </Grid >
      </Grid >
    </Box >
  )
}

export default ClinicLocations
