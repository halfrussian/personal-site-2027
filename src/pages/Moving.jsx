import React from "react";
import { Text, Heading, Box, Avatar } from "@primer/react";
import farm from "../assets/farm.png" ;

const Moving = () => {
  return (
    <>
      <Box
        display="flex"

        sx={{
          
          padding: '20%',
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        }}
      >
        <Box
          sx={{
           
            display: ["block","block", "block", "flex"],
         
           padding: '20px'
          }}
        >
          <Text
            as="h1"
            className="anim-Left"
            sx={{
                marginLeft: ["60px", "60px","60px","0px"],
              fontWeight: "800 !important",
              fontSize: ["42px",],
              marginBottom: 3,
            }}
          >
            Moved to
          </Text>
          <img
          style={{marginLeft: "20px", width: '300px', height: '43px', marginTop:'5px'}}
          src={farm}
          className="anim-Left"
          />
        </Box>
      </Box>
    </>
  );
};

export default Moving;
