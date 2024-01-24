import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Navbar = () => {
  return (
    <Box>
      <Grid container className="justify-around">
        <Grid item sm={11} md={11} lg={9}>
          <Box>
            <Grid container>

              <Grid item sm={12} md={6} lg={6}>
                <Box>
                  <Typography variant='h5'>Medico</Typography>
                </Box>
                <Box className="flex gap-4 ">
                  <Typography variant="subtitle1">Services</Typography>
                  <Typography variant="subtitle1">About</Typography>
                  <Typography variant="subtitle1">Contact</Typography>
                </Box>
              </Grid>

              <Grid item sm={12} md={6} lg={6}>

                <Box>
                  <Button variant="outlined" color="primary" startIcon={<LocalPhoneIcon />}
                    sx={{
                      backgroundColor: 'rgb(49, 77, 144, 0.62)',
                      '&:hover': {
                        backgroundColor: 'rgb(49, 77, 144, 0.8)',
                      },
                      marginTop: "0.5rem",
                      color: 'rgb(49, 77, 144, 0.62)',
                    }}>1005-346-272</Button>
                </Box>
                <Box>
                  <Button variant="outlined" color="primary" startIcon={<WhatsAppIcon />}
                    sx={{
                      backgroundColor: 'rgb(49, 77, 144, 0.62)',
                      '&:hover': {
                        backgroundColor: 'rgb(49, 77, 144, 0.8)',
                      },
                      marginTop: "0.5rem",
                      color: 'rgb(49, 77, 144, 0.62)',
                    }}>Book Appointment</Button>
                </Box>

              </Grid>

            </Grid>


          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Navbar
