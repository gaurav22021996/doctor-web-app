import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "../common/Image";

const Cards = () => {
  return (
    <Box className="mt-10">
      <Box>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box
              sx={{ backgroundColor: "white" }}
              className="flex gap-4 p-5 rounded-md "
            >
              <Box>
                <Image src="/image/mental-health.svg" alt="Beyond delivery" />
              </Box>
              <Box>
                <Box>
                  <Typography gutterBottom variant="h5">
                    Dental Health Service
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    The service provides immediate dental care to patients with
                    acute illnesses or injuries that require immediate attention
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box
              sx={{ backgroundColor: "white" }}
              className="flex gap-4 p-5 rounded-md "
            >
              <Box>
                <Image src="/image/eye-diseasses.svg" alt="Beyond delivery" />
              </Box>
              <Box>
                <Box>
                  <Typography gutterBottom variant="h5">
                    Dental Diseasses Service
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    The service provides immediate dental care to patients with
                    acute illnesses or injuries that require immediate attention
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box
              sx={{ backgroundColor: "white" }}
              className="flex gap-4 p-5 rounded-md "
            >
              <Box>
                <Image src="/image/vaccination.svg" alt="Beyond delivery" />
              </Box>
              <Box>
                <Box>
                  <Typography gutterBottom variant="h5">
                    Teeth Cleaning Service
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    The service provides immediate dental care to patients with
                    acute illnesses or injuries that require immediate attention
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box
              sx={{ backgroundColor: "white" }}
              className="flex gap-4 p-5 rounded-md  "
            >
              <Box>
                <Image src="/image/cardiology.svg" alt="Beyond delivery" />
              </Box>
              <Box>
                <Box>
                  <Typography gutterBottom variant="h5">
                    Dental Service
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    The service provides immediate dental care to patients with
                    acute illnesses or injuries that require immediate attention
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const Specialty = () => {
  return (
    <Box sx={{ backgroundColor: "#F8F9FE" }} className="">
      <Container>
        <Box>
          <Grid container>
            <Grid item sm={11} md={6} lg={5}>
              <Typography sx={{ color: "#09A4AD" }} variant="subtitle1">
                SERVICES & TREATMENTS
              </Typography>
              <Typography variant="h4">
                More than 40 dental health care services
              </Typography>
            </Grid>
            <Cards />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Specialty;
