import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
import { appendScript } from "../../AppendScript";
import { Box, Image, Text } from "@chakra-ui/react";
import Navbar from "../Navbar";
import './Project.css'
import {projectss1, softech} from '../Alumni/images'
const Project = () => {
  useEffect(() => {
    appendScript("./gradientBackground.js");
    appendScript("./navLinksAnimate.js");
  }, []);
  return (
    <Box className="projectPage">
      <Helmet>
        <title>BVP-ISTE-Projects</title>
      </Helmet>
      <div className="cover-page">
        <Navbar />
        <div className="cover-page-content">
          <div className="cover-page-text">
            I believe there is <br></br>a better way of <br></br>
            <span id="animated-text"> doing things</span>
          </div>
          <iframe
            title="iste-gif"
            src="https://giphy.com/embed/WXmx86CVrJAOEwwjPu"
            width="300"
            height="300"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="projectDesc">
        {/* projects */}
        <div className="projectDesc-header">
          <h1>Projects</h1>
          <p>
            Projects indulgence difficulty ham can put especially. Bringing remember
            for supplied her why was confined.{" "}
          </p>
        </div>
        <div className="projectDesc-container">
          <Box
            display={"flex"}
            w="100%"
            justifyContent={"space-between"}
            alignItems={"center"}
            margin="auto"
            p="10"
            bgImg='linear-gradient(#2e2d2e,#232024,#302d2d,#615c62)'
          >
            <Box
            pos="relative"
            top='4rem'
            >
               <Image src={softech}
               position='absolute'
               h='10vh'
               w='7vw'
               transform='translate(3rem,-3rem)'
               borderRadius='2xl'
               />
               <Image src={projectss1}/>
               <Image src={projectss1}
               position="relative"
               left='7rem'
               bottom='10rem'
               opacity='0.8'
               />
            </Box>
            <Box>
                <Text fontSize='3xl'>Projects XYZ  description</Text>
            </Box>
          </Box>
          <Box
            display={"flex"}
            w="100%"
            justifyContent={"space-between"}
            alignItems={"center"}
            margin="auto"
            p="10"
            bgImg='linear-gradient(#2e2d2e,#232024,#302d2d,#615c62)'
            mt='10'
          >
            <Box
            pos="relative"
            top='4rem'
            >
               <Image src={softech}
               position='absolute'
               h='10vh'
               w='7vw'
               transform='translate(3rem,-3rem)'
               borderRadius='2xl'
               />
               <Image src={projectss1}/>
               <Image src={projectss1}
               position="relative"
               left='7rem'
               bottom='10rem'
               opacity='0.8'
               />
            </Box>
            <Box>
                <Text fontSize='3xl'>Projects XYZ  description</Text>
            </Box>
          </Box>
         
        </div>
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

export default Project;
