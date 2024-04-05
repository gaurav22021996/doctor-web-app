import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "../common/Image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Appointment = () => {
  return (
    <Box sx={{ backgroundColor: "#F8F9FE" }} className="py-16">
      <Container>
        <Box>
          <Grid spacing={4} container>
            <Grid item sm={11} md={6} lg={6}>
              <Typography sx={{ color: "#09A4AD" }} variant="subtitle1">
                APPOINTMENT
              </Typography>
              <Typography gutterBottom variant="h4">
                Get in touch to book your first appointment
              </Typography>
              <Typography variant="subtitle1">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </Typography>

              <Box className="flex gap-5 mt-8">
                <Box>
                  <Image src="/image/phone.svg" alt="Beyond delivery" />
                </Box>
                <Box>
                  <Typography variant="subtitle1">
                    Call on +91 94256 40765
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item sm={11} md={6} lg={6}>
              <Box>
                <Image src="/image/appointment.svg" alt="Beyond delivery" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Appointment;
