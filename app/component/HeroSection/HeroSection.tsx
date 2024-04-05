"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "../common/Image";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  return (
    <Box sx={{ backgroundColor: "#F8F9FE" }} className="py-16">
      <Container>
        <Box>
          <Grid spacing={4} container>
            <Grid item sm={11} md={6} lg={6}>
              <Box>
                <Image src="/image/doctor.svg" alt="Beyond delivery" />
              </Box>
            </Grid>

            <Grid item sm={11} md={6} lg={6}>
              <Box className="pt-8 pl-8">
                <Typography
                  gutterBottom
                  sx={{ color: "#09A4AD" }}
                  variant="subtitle1"
                >
                  Welcome to Sri Sri Dental Clinic
                </Typography>
                <Typography gutterBottom variant="h2">
                  Your Journey to Better Dental Health Starts Here
                </Typography>

                <Box>
                  <Button
                    size="large"
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      router.push("/about");
                    }}
                    sx={{
                      backgroundColor: "rgb(49, 77, 144, 0.62)",
                      "&:hover": {
                        backgroundColor: "rgb(49, 77, 144, 0.8)",
                      },
                      marginTop: "0.5rem",
                    }}
                  >
                    Discover More
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
