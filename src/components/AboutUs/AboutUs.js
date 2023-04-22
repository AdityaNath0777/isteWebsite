import React, { useEffect } from "react";
import Navbar from "../Navbar";
import CoverPage from "../CoverPage";
import BelowCP from "../BelowCP";
import Footer from "../Footer";
import { appendScript } from "../../AppendScript";
import { alumini01, alumini02, alumini03 } from "../Alumni/images";
import { aboutgif } from "../Alumni/images";
import "./AboutUs.css";
import { Box, Text } from "@chakra-ui/react";

const AboutUs = () => {
  useEffect(() => {
    appendScript("./gradientBackground.js");
    appendScript("./navLinksAnimate.js");
  }, []);
  return (
    <Box className="aboutPage">
      <div className="cover-page">
        <Navbar />
        <div className="cover-page-content">
          <div className="cover-page-text">
            I believe there is <br></br>a better way of <br></br>
            <span id="animated-text"> doing things</span>
          </div>
          <iframe
            src="https://giphy.com/embed/WXmx86CVrJAOEwwjPu"
            width="300"
            height="300"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="aboutCover">
        {/* projects */}
        <div className="aboutCover-header">
          <h1>About Us</h1>
          <p>
            May indulgence difficulty ham can put especially. Bringing remember
            for supplied her why was confined.{" "}
          </p>
        </div>
        <div className="aboutCover-container">
          <Box
            display={"flex"}
            w="100%"
            justifyContent={"space-between"}
            margin="auto"
            p="10"
          >
            <Text fontSize="3xl">ABOUT</Text>
            <Box
              display={"flex"}
              flexDir={"column"}
              w={{ base: "100%", md: "50%", lg: "50%" }} //responsive width
            >
              <Text mb="3">
                May indulgence difficulty ham can put especially. Bringing
                remember for supplied her why was confined.May indulgence
                difficulty ham can put especiallyMay indulgence difficulty ham
                can put especiallyMay indulgence difficulty ham can put
                especiallyMay indulgence difficulty ham can put especially
              </Text>
              <Text mb="3">
                May indulgence difficulty ham can put especially. Bringing
                remember for supplied her why was confined.May indulgence
                difficulty ham can put especially.May indulgence difficulty ham
                can put especially.
              </Text>
              <Text>
                May indulgence difficulty ham can put especially. Bringing
                remember for supplied her why was confined.
              </Text>
            </Box>
          </Box>
        </div>
      
          <Box
            className="workSection"
            display={"flex"}
            w="100%"
            justifyContent={"space-between"}
            margin="auto"
            p="10"
          >
            <Text fontSize="3xl">OUR WORK</Text>
            <Box
              display={"flex"}
              flexDir={"row"}
              justifyContent={"space-between"}
              w={{ base: "100%", md: "50%", lg: "50%" }}
            >
              <Box>
                <Text mb="3">ABC</Text>
                <Text mb="3">DEF</Text>
                <Text mb="3">GHI</Text>
                <Text>JKL</Text>
              </Box>
              <Box>
                <Text mb="3">ABC</Text>
                <Text mb="3">DEF</Text>
                <Text mb="3">GHI</Text>
                <Text>JKL</Text>
              </Box>
            </Box>
          </Box>
          <Box
            className="workSection"
            display={"flex"}
            w="100%"
            justifyContent={"space-between"}
            margin="auto"
            p="10"
          >
            <Text fontSize="3xl">RECOGNITION</Text>
            <Box
              display={"flex"}
              flexDir={"row"}
              justifyContent={"space-between"}
              w={{ base: "100%", md: "50%", lg: "50%" }}
            >
              <Box>
                <Text mb="3">ABC</Text>
                <Text mb="3">DEF</Text>
                <Text mb="3">GHI</Text>
                <Text>JKL</Text>
              </Box>
              <Box>
                <Text mb="3">ABC</Text>
                <Text mb="3">DEF</Text>
                <Text mb="3">GHI</Text>
                <Text>JKL</Text>
              </Box>
            </Box>
          </Box>
      </div>

      <div className="footer">
        <div className="footer-content">
          <div className="img"></div>
          <button>Get in Touch</button>
        </div>
        <div className="footer-links">
          <span>
            <i class="fa-brands fa-linkedin"></i>
          </span>
          <span>
            <i class="fa-brands fa-square-twitter"></i>
          </span>
          <span>
            <i class="fa-brands fa-square-facebook"></i>
          </span>
          <span>
            <i class="fa-brands fa-instagram"></i>
          </span>
        </div>
      </div>
    </Box>
  );
};

export default AboutUs;
