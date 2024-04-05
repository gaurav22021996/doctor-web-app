import { Box, Button } from "@mui/material";
import Specialty from "./component/Specialty/Specialty";
import HeroSection from "./component/HeroSection/HeroSection";
import TrustedExpertise from "./component/TrustedExpertise/TrustedExpertise";
import WhyChooseUs from "./component/WhyChooseUs/WhyChooseUs";
import ClinicLocations from "./component/ClinicLocations/ClinicLocations";
import Appointment from "./component/Appointment/Appointment";
import Navbar from "./component/Navbar/Navbar";
import WhatPeopleSay from "./component/WhatPeopleSay/WhatPeopleSay";
import Footer from "./component/Footer/Footer";

export default function Home() {
  return (
    <Box>
      <Box>
        <HeroSection />
      </Box>
      <Box>
        <Specialty />
      </Box>
      <Box>
        <TrustedExpertise />
      </Box>
      <Box>
        <WhyChooseUs />
      </Box>
      <Box id="contact">
        <Appointment />
      </Box>
      <Box>
        <ClinicLocations />
      </Box>
    </Box>
  );
}
