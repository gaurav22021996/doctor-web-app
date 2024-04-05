import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "../common/Image";

const TrustedExpertise = () => {
  return (
    <Box sx={{ backgroundColor: "#F8F9FE" }} className="py-16">
      <Container>
        <Box>
          <Typography
            sx={{ color: "#09A4AD" }}
            variant="subtitle1"
            gutterBottom
          >
            CERTIFICATION
          </Typography>
          <Typography gutterBottom variant="h4">
            {'"'}Trusted Expertise: Our Certifications and Accolades{'"'}
          </Typography>
          <Typography variant="subtitle1" gutterBottom className="mb-20">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine.
          </Typography>

          <Box>
            <Grid spacing={4} container>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Box>
                  <Image src="/image/certificats.svg" className="w-full" alt="Beyond delivery" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Box>
                  <Image src="/image/certificats.svg" className="w-full" alt="Beyond delivery" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Box>
                  <Image src="/image/certificats.svg" className="w-full" alt="Beyond delivery" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TrustedExpertise;
