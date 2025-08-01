import React from "react";
import { Text, Heading, Box, Button} from "@primer/react";
import "./Hero.css";


import { ArrowRightIcon } from "@primer/octicons-react";
const HeroIntro = () => {
  return (
    <>
      <Box
        display="flex"
        sx={{
          width: "100%",
          backgroundColor: "canvas.subtle",
        }}
      >
        <Box
          sx={{
            maxWidth: "1300px",
            width: ["90%", "90%", "90%", "95%", "87%"],
            margin: "auto",
            marginTop: 8,
          }}
        >
          <Heading
            as="h1"
            className="anim-Left"
            sx={{
              fontWeight: "800 !important",
              fontSize: "42px",
              marginBottom: 3,
            }}
          >
            I’m a strategic Design Technologist (ex GitHub)
          </Heading>

          <Text
            sx={{
              fontSize: 3,
              color: "fg.default",
            }}
            className="anim-Bottom"
          >
           Design Technologist specializing in bridging the gap between design and engineering 
           through code-driven UX innovation, scalable systems, and rapid prototyping.
            {/* <Button
            sx={{
              padding: "10px 20px 10px 20px",
             width: "170px",
              borderRadius: "6px",
              marginRight: 3,
              height: "40px",
              fontSize: 3,
              backgroundColor: "fg.default",
              marginBottom: 3,
              boxShadow: " 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
              transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
              color: "canvas.default",
              "&:hover": {
                backgroundColor: "fg.muted", // Change background color
                boxShadow: "0 4px 6px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.15)", // Adjust shadow
               

              }}}
           
            onClick={() => window.location.href = "mailto:jshracken@gmail.com"}
          >
            Contact me
            
          </Button> */}
          </Text>
          <Box
            sx={{
              paddingTop: 4,
              paddingBottom:4
            }}
          >
            <div className="heroIntro anim-Right" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroIntro;
