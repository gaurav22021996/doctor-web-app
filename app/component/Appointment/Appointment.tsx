import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Image from '../common/Image'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Appointment = () => {
  return (
    <Box sx={{ backgroundColor: "#F8F9FE" }} className="py-16">
      <Grid container className="justify-around">
        <Grid item sm={11} md={11} lg={9}>

          <Box>
            <Grid spacing={4} container >

              <Grid item sm={11} md={6} lg={6}>
                <Typography sx={{ color: "#09A4AD" }} variant='subtitle1'>
                  APPOINTMENT
                </Typography>
                <Typography gutterBottom variant='h4'>
                  Get in touch to book
                  your first appointment
                </Typography>
                <Typography variant='subtitle1'>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                </Typography>

                <Box className="flex gap-5 mt-8">
                  <Box><Image src="/image/phone.svg" alt="Beyond delivery" /></Box>
                  <Box>
                    <Typography variant='subtitle1'>
                      Call on +91 6204567890
                    </Typography>
                  </Box>
                </Box>

                <Box className="mt-8">
                  <Button variant="outlined" color="primary" startIcon={<WhatsAppIcon />}
                    sx={{
                      backgroundColor: 'rgb(49, 77, 144, 0.62)',
                      '&:hover': {
                        backgroundColor: 'rgb(49, 77, 144, 0.8)',
                      },
                      marginTop: "0.5rem",
                      color: 'rgb(49, 77, 144, 0.62)',
                    }}> Connect on Whatsapp</Button>
                </Box>
              </Grid >

              <Grid item sm={11} md={6} lg={6}>
                <Box>
                  <Image src="/image/appointment.svg" alt="Beyond delivery" />
                </Box>
              </Grid>
            </Grid >
          </Box>

        </Grid >
      </Grid >
    </Box >
  )
}

export default Appointment
