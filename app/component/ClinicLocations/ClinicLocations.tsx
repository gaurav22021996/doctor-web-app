"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Content = () => {
  return (
    <Box className="py-10">
      <Box>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box
              sx={{ backgroundColor: "white" }}
              className="p-5 rounded-md !w-full"
            >
              <Box>
                <Typography gutterBottom variant="h5">
                  Address
                </Typography>
                <Typography variant="subtitle1">
                  675, Annapurna Rd, Usha Nagar, Indore, Madhya Pradesh 452009
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    window.open(
                      "https://www.google.com/maps/place/Shree+Shree+Dental+Speciality+Clinic/@22.69662,75.839212,15z/data=!4m6!3m5!1s0x3962fc4d1c08ae19:0xab8483de85def458!8m2!3d22.69662!4d75.839212!16s%2Fg%2F11s4vd94jq?entry=ttu"
                    );
                  }}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    backgroundColor: "rgb(49, 77, 144, 0.62)",
                    "&:hover": {
                      backgroundColor: "rgb(49, 77, 144, 0.8)",
                    },
                    marginTop: "0.5rem",
                  }}
                >
                  Get direction
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const ClinicLocations = () => {
  return (
    <Box sx={{ backgroundColor: "#F8F9FE" }} className="">
      <Container>
        <Box>
          <Grid container>
            <Grid item sm={11} md={6} lg={5}>
              <Typography sx={{ color: "#09A4AD" }} variant="subtitle1">
                Address
              </Typography>
              <Typography variant="h4">Clinic locations</Typography>
            </Grid>

          </Grid>
          <Content />
        </Box>
      </Container>
    </Box>
  );
};

export default ClinicLocations;
