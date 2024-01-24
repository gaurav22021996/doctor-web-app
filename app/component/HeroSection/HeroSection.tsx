import { Box, Button, Grid, Typography, } from '@mui/material'
import React from 'react'
import Image from '../common/Image'

const HeroSection = () => {
  return (
    <Box sx={{ backgroundColor: "#F8F9FE" }} className="py-16">
      <Grid container className="justify-around">

        <Grid item sm={11} md={11} lg={9} >
          <Box>
            <Grid spacing={4} container  >
              <Grid item sm={11} md={6} lg={6}>
                <Box><Image src="/image/doctor.svg" alt="Beyond delivery" /></Box>
              </Grid>

              <Grid item sm={11} md={6} lg={6} >
                <Box className='pt-8 pl-8'>
                  <Typography gutterBottom sx={{ color: "#09A4AD" }} variant='subtitle1'>
                    Welcome to Medico Healthcare
                  </Typography>
                  <Typography gutterBottom variant='h2'>
                    Your Journey to
                    Better Health
                    Starts Here
                  </Typography>

                  <Box>
                    <Button variant="outlined" color="primary"
                      sx={{
                        backgroundColor: 'rgb(49, 77, 144, 0.62)',
                        '&:hover': {
                          backgroundColor: 'rgb(49, 77, 144, 0.8)',
                        },
                        marginTop: "0.5rem",
                        color: 'rgb(49, 77, 144, 0.62)',
                      }}>Discover More</Button>
                  </Box>

                </Box>
              </Grid >

            </Grid >
          </Box>
        </Grid >


      </Grid >
    </Box >
  )
}

export default HeroSection
