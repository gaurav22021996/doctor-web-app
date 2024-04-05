import { Box, Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box className="bg-[#F8F9FE] !min-h-[90vh]">
      <Container className="pt-8">
        <Typography variant="h4" className="uppercase" gutterBottom>
          About us
        </Typography>
        <Box className="flex flex-col gap-3 pt-3">
          <Typography variant="body1">
            Sri Sri Dental Clinic in Indore is one of the leading businesses in
            the Dentists. Also known for Dentists, Dental Surgeons, Dental
            Clinics and much more. Find Address, Contact Number, Reviews &
            Ratings, Photos, Maps of Sri Sri Dental Clinic, Indore.
          </Typography>
          <Box>
            <Typography variant="h6" className="!font-bold" gutterBottom>
              Location and Overview:
            </Typography>
            <Typography variant="body1">
              Established in the year 2004, Sri Sri Dental Clinic in Annapurna
              Road, Indore is a top player in the category Dentists in the
              Indore. This well-known establishment acts as a one-stop
              destination servicing customers both local and from other parts of
              Indore. Over the course of its journey, this business has
              established a firm foothold in it{"'"}s industry. The belief that
              customer satisfaction is as important as their products and
              services, have helped this establishment garner a vast base of
              customers, which continues to grow by the day. This business
              employs individuals that are dedicated towards their respective
              roles and put in a lot of effort to achieve the common vision and
              larger goals of the company. In the near future, this business
              aims to expand its line of products and services and cater to a
              larger client base. In Indore, this establishment occupies a
              prominent location in Annapurna Road. It is an effortless task in
              commuting to this establishment as there are various modes of
              transport readily available. It is at , Opp Dushera Maidan, which
              makes it easy for first-time visitors in locating this
              establishment. It is known to provide top service in the following
              categories: Dentists, Dental Surgeons, Dental Clinics.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" className="!font-bold" gutterBottom>
              Products and Services offered:
            </Typography>
            <Typography variant="body1">
              Sri Sri Dental Clinic in Annapurna Road has a wide range of
              products and / or services to cater to the varied requirements of
              their customers. The staff at this establishment are courteous and
              prompt at providing any assistance. They readily answer any
              queries or questions that you may have. Pay for the product or
              service with ease by using any of the available modes of payment,
              such as Cash, Cheques. This establishment is functional from 10:00
              - 19:00. Please scroll to the top for the address and contact
              details of Sri Sri Dental Clinic at Annapurna Road, Indore.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" className="!font-bold" gutterBottom>
              Hours of operation:
            </Typography>
            <Typography variant="body1" gutterBottom>
              The establishment is functional on
            </Typography>
            <Typography variant="body1" gutterBottom>
              Monday:-{" "}
              <span className="font-bold">
                10:00 Am - 1:00 Pm, 6:00 Pm - 10:00 Pm
              </span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Tuesday:-{" "}
              <span className="font-bold">
                10:00 Am - 1:00 Pm, 6:00 Pm - 10:00 Pm
              </span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Wednesday:-{" "}
              <span className="font-bold">
                10:00 Am - 1:00 Pm, 6:00 Pm - 10:00 Pm
              </span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Thursday:-{" "}
              <span className="font-bold">
                10:00 Am - 1:00 Pm, 6:00 Pm - 10:00 Pm
              </span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Friday:-{" "}
              <span className="font-bold">
                10:00 Am - 1:00 Pm, 6:00 Pm - 10:00 Pm
              </span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Saturday:-{" "}
              <span className="font-bold">
                10:00 Am - 1:00 Pm, 6:00 Pm - 10:00 Pm
              </span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Sunday:- <span className="font-bold">Closed</span>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
