import { Box, Button, Container, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import { Google, InfoOutlined, Phone } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <Box sx={{ backgroundColor: "#18A0A9" }} className="text-white py-20">
      <Container>
        <Box>
          <Grid spacing={3} container>
            <Grid item xs={12} sm={12} lg={3}>
              <Box className="flex flex-col">
                <Typography className="!font-bold" variant="h4">
                  Sri Sri Dentical Clinic
                </Typography>
                <Box className="mt-5 flex items-center justify-around">
                  <Button
                    onClick={() => {
                      router.push("/about");
                    }}
                    variant="outlined"
                    startIcon={<InfoOutlined />}
                    sx={{
                      backgroundColor: "rgb(49, 77, 144, 0.62)",
                      "&:hover": {
                        backgroundColor: "rgb(49, 77, 144, 0.8)",
                      },
                    }}
                  >
                    About us
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      window.open("tel:+919425640765");
                    }}
                    startIcon={<Phone />}
                    sx={{
                      backgroundColor: "rgb(49, 77, 144, 0.62)",
                      "&:hover": {
                        backgroundColor: "rgb(49, 77, 144, 0.8)",
                      },
                    }}
                  >
                    Call us
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={5} lg={2}>
              <Box>
                <Typography gutterBottom variant="subtitle1">
                  SERVICES
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                  Service1
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                  Service2
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                  Service3
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                  Service4
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={5} lg={2}>
              <Box>
                <Typography gutterBottom variant="subtitle1">
                  DENTAL CHECKUP
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                  Checkup1
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                  Checkup2
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                  Checkup3
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                  Checkup4
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={5} lg={2}>
              <Box>
                <Typography gutterBottom variant="subtitle1">
                  DEPARTMENTS
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                  Department1
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                  Department2
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                  Department3
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                  Department4
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={5} lg={2}>
              <Box>
                <Typography gutterBottom variant="subtitle1">
                  QUICK LINKS
                </Typography>
                <Typography
                  className="cursor-pointer"
                  onClick={() => {
                    router.push("/about");
                  }}
                  gutterBottom
                  variant="subtitle2"
                >
                  About
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box className="flex gap-3 mt-8 flex-row-reverse">
              <Box>
                <InstagramIcon />
              </Box>
              <Box>
                <FacebookIcon />
              </Box>
              <Box>
                <Google />
              </Box>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
