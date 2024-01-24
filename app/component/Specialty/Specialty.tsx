import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from '../common/Image';



const Cards = () => {
  return (
    <Box className="mt-10">
      <Grid container className="justify-around">
        <Grid item sm={11} md={11} lg={9}>

          <Box>
            <Grid container spacing={5} className="justify-center" >

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box sx={{ backgroundColor: "white" }} className="flex gap-4 p-5 rounded-md ">
                  <Box>
                    <Image src="/image/mental-health.svg" alt="Beyond delivery" />
                  </Box>
                  <Box>
                    <Box>
                      <Typography gutterBottom variant='h5'>
                        Mental Health Service
                      </Typography>
                      <Typography gutterBottom variant='subtitle1'>
                        The service provides immediate
                        medical care to patients with acute illnesses or injuries that require immediate attention
                      </Typography>
                    </Box>

                    <Box className="flex flex-row-reverse">
                      <Button variant="outlined" color="primary" startIcon={<ArrowForwardIcon />}
                        sx={{
                          backgroundColor: 'rgb(49, 77, 144, 0.62)',
                          '&:hover': {
                            backgroundColor: 'rgb(49, 77, 144, 0.8)',
                          },
                          marginTop: "0.5rem",
                          color: 'rgb(49, 77, 144, 0.62)',
                        }}></Button></Box>
                  </Box>
                </Box>
              </Grid>



              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box sx={{ backgroundColor: "white" }} className="flex gap-4 p-5 rounded-md ">
                  <Box>
                    <Image src="/image/eye-diseasses.svg" alt="Beyond delivery" />
                  </Box>
                  <Box>
                    <Box>
                      <Typography gutterBottom variant='h5'>
                        Eye Diseasses Service
                      </Typography>
                      <Typography gutterBottom variant='subtitle1'>
                        The service provides immediate
                        medical care to patients with acute illnesses or injuries that require immediate attention
                      </Typography>
                    </Box>
                    <Box className="flex flex-row-reverse">
                      <Button variant="outlined" color="primary" startIcon={<ArrowForwardIcon />}
                        sx={{
                          backgroundColor: 'rgb(49, 77, 144, 0.62)',
                          '&:hover': {
                            backgroundColor: 'rgb(49, 77, 144, 0.8)',
                          },
                          marginTop: "0.5rem",
                          color: 'rgb(49, 77, 144, 0.62)',
                        }}></Button></Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box sx={{ backgroundColor: "white" }} className="flex gap-4 p-5 rounded-md ">
                  <Box>
                    <Image src="/image/vaccination.svg" alt="Beyond delivery" />
                  </Box>
                  <Box>
                    <Box>
                      <Typography gutterBottom variant='h5'>
                        Vaccination Service
                      </Typography>
                      <Typography gutterBottom variant='subtitle1'>
                        The service provides immediate
                        medical care to patients with acute illnesses or injuries that require immediate attention
                      </Typography>
                    </Box>
                    <Box className="flex flex-row-reverse">
                      <Button variant="outlined" color="primary" startIcon={<ArrowForwardIcon />}
                        sx={{
                          backgroundColor: 'rgb(49, 77, 144, 0.62)',
                          '&:hover': {
                            backgroundColor: 'rgb(49, 77, 144, 0.8)',
                          },
                          marginTop: "0.5rem",
                          color: 'rgb(49, 77, 144, 0.62)',
                        }}></Button></Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box sx={{ backgroundColor: "white" }} className="flex gap-4 p-5 rounded-md  ">
                  <Box>
                    <Image src="/image/cardiology.svg" alt="Beyond delivery" />
                  </Box>
                  <Box>
                    <Box>
                      <Typography gutterBottom variant='h5'>
                        Cardiology Service
                      </Typography>
                      <Typography gutterBottom variant='subtitle1'>
                        The service provides immediate
                        medical care to patients with acute illnesses or injuries that require immediate attention
                      </Typography>
                    </Box>
                    
                    <Box className="flex flex-row-reverse">
                      <Button variant="outlined" color="primary" startIcon={<ArrowForwardIcon />}
                        sx={{
                          backgroundColor: 'rgb(49, 77, 144, 0.62)',
                          '&:hover': {
                            backgroundColor: 'rgb(49, 77, 144, 0.8)',
                          },
                          marginTop: "0.5rem",
                          color: 'rgb(49, 77, 144, 0.62)',
                        }}></Button>
                    </Box>

                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

        </Grid>
      </Grid >
    </Box >
  )
}

const Specialty = () => {
  return (
    <Box sx={{ backgroundColor: "#F8F9FE" }} className="">
      <Grid container className="justify-around">
        <Grid item sm={11} md={11} lg={9}>
          <Box>
            <Grid container>
              <Grid item sm={11} md={6} lg={5}>
                <Typography sx={{ color: "#09A4AD" }} variant='subtitle1'>
                  SERVICES & TREATMENTS
                </Typography>
                <Typography variant='h4'>
                  More than 40 specialty and health care services
                </Typography>
              </Grid>

              <Grid className="flex items-end justify-end" item sm={11} md={6} lg={7}>
                <Box >
                  <Button variant="outlined"
                    size="large"
                    sx={{
                      backgroundColor: 'rgb(49, 77, 144, 0.62)',
                      '&:hover': {
                        backgroundColor: 'rgb(49, 77, 144, 0.8)',
                      },
                      color: 'blue',
                    }}>See All Services</Button>
                </Box>
              </Grid>
              <Cards />
            </Grid>
          </Box>
        </Grid >
      </Grid >
    </Box >
  )
}

export default Specialty