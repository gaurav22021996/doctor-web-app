import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Navbar = () => {
  return (
    <Box className="py-4">
      <Grid container className="justify-around">
        <Grid item sm={11} md={11} lg={9}>
          <Box className="flex justify-between items-center">
            <Grid container>

              <Grid item sm={12} md={6} lg={6}>
                <Box className="flex justify-between items-center">
                  <Box>
                    <Typography variant='h5'>Medico</Typography>
                  </Box>
                  <Box className="flex justify-between gap-5 items-center ">
                    <Typography variant="subtitle1">Services</Typography>
                    <Typography variant="subtitle1">About</Typography>
                    <Typography variant="subtitle1">Contact</Typography>
                  </Box>
                </Box>

              </Grid>

              <Grid item sm={12} md={6} lg={6}>
                <Box className="flex justify-end gap-3 items-center">
                  <Box>
                    <Button variant="outlined" color="primary" startIcon={<LocalPhoneIcon />}
                      sx={{
                        backgroundColor: 'rgb(49, 77, 144, 0.62)',
                        '&:hover': {
                          backgroundColor: 'rgb(49, 77, 144, 0.8)',
                        },
                       
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
                   
                        color: 'rgb(49, 77, 144, 0.62)',
                      }}>Book Appointment</Button>
                  </Box>
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
