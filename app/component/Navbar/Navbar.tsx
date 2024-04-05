import { AppBar, Box, Button, Container, Slide, Toolbar, Typography, useScrollTrigger } from '@mui/material'
import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useRouter } from 'next/navigation';


function HideOnScroll(props: any) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props: any) => {
  const router = useRouter();
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar className="!bg-white">
        <Container>
          <Toolbar className="!px-0">
            <Typography
            onClick={() => {
              router.push("/");
            }}
            className='cursor-pointer'
            sx={{ fontWeight: "bold" }} variant='h5'>Sri Sri Dental Clinic</Typography>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box className="flex justify-between gap-5 items-center ">
              <Typography onClick={() => {
                router.push("/about");
              }} className="hover:underline !cursor-pointer" variant="subtitle1">About</Typography>
              <Typography onClick={() => {
                router.push("/#contact");
              }} className="hover:underline !cursor-pointer" variant="subtitle1">Contact</Typography>
            </Box>
            <Box sx={{
              flexGrow: 1, display: {
                xs: "none", sm: "none", md: "block", lg: "block"
              }
            }}></Box>
            <Box sx={{
              display: {
                xs: "none", sm: "none", md: "block", lg: "block"
              }
            }}>
              <Button variant="outlined"
                onClick={() => {
                  window.open("tel:+919425640765")
                }}
                color="primary" startIcon={<LocalPhoneIcon />}
                sx={{
                  backgroundColor: 'rgb(49, 77, 144, 0.62)',
                  '&:hover': {
                    backgroundColor: 'rgb(49, 77, 144, 0.8)',
                  },
                }}>094256 40765</Button>
              {/* <Button variant="outlined" color="primary" startIcon={<WhatsAppIcon />}
                      sx={{
                        backgroundColor: 'rgb(49, 77, 144, 0.62)',
                        '&:hover': {
                          backgroundColor: 'rgb(49, 77, 144, 0.8)',
                        },
                      }}>Book Appointment</Button> */}
            </Box>
          </Toolbar>
        </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}

export default Navbar
