import { Box, Button, Grid, Typography } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#18A0A9" }} className="text-white py-20" >
      <Grid container className="justify-around">
        <Grid item sm={11} md={11} lg={9} >

          <Box>
            <Grid spacing={3} container className="justify-center ">

              <Grid item xs={11} sm={11} lg={3}>
                <Box className="flex flex-col">
                  <Typography className='text-center' variant='h4' >
                    Medico
                  </Typography>
                  <Box className="mt-5 flex flex-col items-center">
                    <Box>
                      <Button variant="outlined" startIcon={<TelegramIcon />}
                        sx={{
                          backgroundColor: 'rgb(49, 77, 144, 0.62)',
                          '&:hover': {
                            backgroundColor: 'rgb(49, 77, 144, 0.8)',
                          },
                          marginTop: "0.5rem",
                          color: 'rgb(49, 77, 144, 0.62)',
                        }}> Take an Appointment</Button>
                    </Box>
                    <Box>
                      <Button variant="outlined" startIcon={<TelegramIcon />}
                        sx={{
                          backgroundColor: 'rgb(49, 77, 144, 0.62)',
                          '&:hover': {
                            backgroundColor: 'rgb(49, 77, 144, 0.8)',
                          },
                          marginTop: "0.5rem",
                          color: 'rgb(49, 77, 144, 0.62)',
                        }}> Take an Appointment</Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={11} sm={5} lg={2}>
                <Box>
                  <Typography gutterBottom variant='subtitle1' >
                    SERVICES
                  </Typography>
                  <Typography gutterBottom variant='subtitle2' >
                    Pathology
                  </Typography>
                  <Typography gutterBottom variant='subtitle2' >
                    Ambulance
                  </Typography>
                  <Typography gutterBottom variant='subtitle2' >
                    Radiology
                  </Typography>
                  <Typography gutterBottom variant='subtitle2' >
                    Pharmacy
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={11} sm={5} lg={2}>
                <Box>
                  <Typography gutterBottom variant='subtitle1' >
                    HEALTH CHECKUP
                  </Typography>
                  <Typography gutterBottom variant='subtitle2' >
                    Woman Health
                  </Typography>
                  <Typography gutterBottom variant='subtitle2' >
                    Cancer Screening
                  </Typography>
                  <Typography gutterBottom variant='subtitle2' >
                    Cardiac Health
                  </Typography>
                  <Typography gutterBottom variant='subtitle2' >
                    MRI Checkup
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={11} sm={5} lg={2}>
                <Box>
                  <Typography gutterBottom variant='subtitle1' >
                    DEPARTMENTS
                  </Typography>
                  <Typography gutterBottom variant='subtitle2' >
                    General
                  </Typography>
                  <Typography gutterBottom variant='subtitle2' >
                    Dermatology
                  </Typography>
                  <Typography gutterBottom variant='subtitle2' >
                    Cardiology
                  </Typography>
                  <Typography gutterBottom variant='subtitle2' >
                    Cancer
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={11} sm={5} lg={2}>
                <Box>
                  <Typography gutterBottom variant='subtitle1' >
                    QUICK LINKS
                  </Typography>
                  <Typography gutterBottom variant='subtitle2' >
                    License
                  </Typography>
                  <Typography gutterBottom variant='subtitle2' >
                    Changelog
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid item xs={11} sm={11} md={11} lg={11}>
              <Box className="flex gap-3 mt-8 flex-row-reverse">
                <Box><InstagramIcon /></Box>
                <Box><PinterestIcon /></Box>
                <Box><XIcon /></Box>
                <Box><FacebookIcon /></Box>
              </Box>
            </Grid>
          </Box>

        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
