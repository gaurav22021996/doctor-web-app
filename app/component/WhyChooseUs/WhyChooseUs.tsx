"use client"
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import React from "react";
import Image from "../common/Image";

const TakeAppointment = () => {
  return (
    <Grid item sm={11} md={11} lg={9}>
      <Box className="mt-8">
        <Typography gutterBottom variant="h4">
          Wellness, Compassion, Quality
        </Typography>

        <Typography variant="subtitle1">
          They live in Bookmarks grove right at the coast of the Semantics, a
          large language ocean. A small river named Duden flows by their place
          and supplies it.
        </Typography>

        <Box className="mt-5">
          <Button
            size="large"
            variant="outlined"
            onClick={() => {
              window.open("tel:+919425640765")
            }}
            color="primary"
            sx={{
              backgroundColor: "rgb(49, 77, 144, 0.62)",
              "&:hover": {
                backgroundColor: "rgb(49, 77, 144, 0.8)",
              },
            }}
          >
            Call now
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

const WhyChooseUs = () => {
  return (
    <Box sx={{ backgroundColor: "white" }} className="py-16">
      <Container>
        <Box>
          <Grid spacing={4} container>
            <Grid item sm={11} md={6} lg={6}>
              <Box>
                <Image src="/image/girl.svg" alt="Beyond delivery" />
              </Box>
            </Grid>

            <Grid item sm={11} md={6} lg={6} className=" flex justify-around">
              <Box>
                <Typography gutterBottom variant="h4">
                  Why Choose Us?
                </Typography>
                <Box>
                  <Box className="flex gap-5 mt-4">
                    <Box>
                      <Image src="/image/check.svg" alt="Beyond delivery" />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1">
                        Safety First Quality Must
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="flex gap-5 mt-4">
                    <Box>
                      <Image src="/image/check.svg" alt="Beyond delivery" />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1">
                        Patient-Centric Approach
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="flex gap-5 mt-4">
                    <Box>
                      <Image src="/image/check.svg" alt="Beyond delivery" />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1">
                        Focused Leadership
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="flex gap-5 mt-4">
                    <Box>
                      <Image src="/image/check.svg" alt="Beyond delivery" />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1">
                        Cutting-Edge Technology
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="flex gap-5 mt-4">
                    <Box>
                      <Image src="/image/check.svg" alt="Beyond delivery" />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1">
                        Transparent Pricing
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="flex gap-5 mt-4">
                    <Box>
                      <Image src="/image/check.svg" alt="Beyond delivery" />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1">
                        Coordinated Care
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <TakeAppointment />
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
