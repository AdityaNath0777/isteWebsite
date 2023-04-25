import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { appendScript } from "../../AppendScript";
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
              w={{ base: "100%", md: "50%", lg: "70%" }} //responsive width
            >
              <Text mb="3">
                ISTE was founded in the year 1967 with a mission to advance for the cause of education in general and all its function which pertain to engineering and allied branches of engineering and technology, architecture and town planning, pharmacy, management, process of teaching and learning, research, extension services and public relations in particular.
              </Text>
              <Text mb="3">
                BVP ISTE is the non-profit student chapter of Indian Society for Technical Education (ISTE) which was established in Bharati Vidyapeeth College of Engineering in 2011 to advance the education in engineering and technology. In addition to it , ISTE also promotes research, like Electronica, Sahitye and NGO work, Groot in the college.
              </Text>
              <Text mb="3">
                BVP ISTE has constantly strived to achieve its goal of focusing more on practical knowledge and hands-on approach.We have tried to achieve this through various sessions, workshops and competitions in the field of hardware, software and research. As of 2014, the society has more than 300 registered members in the college.
              </Text>
              <Text mb="3">
                Our ideology and enthusiasm for technology is summed up in our motto – Innovation & Technology. Since its inception in April, 2011, the society has been very active in working towards its goal of promotion of technical knowledge.
              </Text>
            </Box>
          </Box>
        </div>
        <Box
          display={"flex"}
          w="100%"
          justifyContent={"space-between"}
          margin="auto"
          p="10"
        >
          <Text fontSize="3xl">PERKS OF JOINING</Text>
          <Box
            display={"flex"}
            flexDir={"column"}
            w={{ base: "100%", md: "50%", lg: "70%" }} //responsive width
          >
            <Text mb="3">
              ISTE continues to be a leading non-profit making professional body in engineering in India.
            </Text>
            <Text mb="3">
              Membership fees: One time fees for becoming a member for 4 years(All members will be provided the membership card, certificate of membership and login Id for online support)
            </Text>
            <Text mb="3">
              <ul>
                <li> A Member of a National Professional Organization. </li>
                <li>Joined an academic Fraternity of over 45,000 strong professional.</li>
                <li>Preference to attend short-term training programme for the academic excellence and to become eligible for career advancement opportunities. </li>
                <li>Getting bi-monthly Newsletter. </li>
                <li>Quarterly Indian journal of Technical Education (at concessional rates). </li>
                <li>Many more publications for Self Development, Institution Development etc (at concessional rates). </li>
                <li>Eligible to participate in Chapter level, Section level and National Navel Conferences, Workshops and other activities of your academic interest etc.</li>
              </ul>
            </Text>
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
