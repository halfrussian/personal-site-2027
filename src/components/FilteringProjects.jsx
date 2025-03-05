import React, { useState } from "react";
import { Box, Button } from "@primer/react";
import { projectData } from "../data/projectData";
import Projects from "./Projects";
import './Hero.css'
import {Label} from '@primer/react-brand'

const FilteringProjects = () => {
  const [filteredData, setFilteredData] = useState(projectData);
  const bTooBFilter = () => {
    setFilteredData(
      projectData.filter((item) => item.categories.includes("B2B"))
    );
  };

  const bTooCFilter = () => {
    setFilteredData(
      projectData.filter((item) => item.categories.includes("B2C"))
    );
  };

  const mobileFilter = () => {
    setFilteredData(
      projectData.filter((item) => item.categories.includes("Mobile"))
    );
  };

  const brandingFilter = () => {
    setFilteredData(
      projectData.filter((item) => item.categories.includes("Branding"))
    );
  };

  const webFilter = () => {
    setFilteredData(
      projectData.filter((item) => item.categories.includes("Web"))
    );
  };

  return (
    <>
  

      <Box
        display="flex"
        className="anim-Left"
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
            marginTop: 3,
          }}
        >
          <Button
        sx={{
          position: "relative",
          padding: "5px 20px",
          textAlign: "center",
          display: "inline-block",
          borderRadius: "25px",
          background: "canvas.subtle",
          color: "fg.default",
          marginRight: 3,
          height: "40px",
          fontSize: 2,
          marginBottom: 3,
        //  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
            padding: "2px",
            background: "linear-gradient(92deg, #D2A8FF 12.09%, #F778BA 42.58%, #FF7B72 84.96%)",
            WebkitMask: "linear-gradient(white, white) content-box, linear-gradient(white, white)",
            WebkitMaskComposite: "destination-out",
            maskComposite: "exclude",
          },
        }}
        onClick={bTooBFilter}
      >
        B2B
      </Button>
      

          <Button
             sx={{
              position: "relative",
              padding: "5px 20px",
              textAlign: "center",
              display: "inline-block",
              borderRadius: "25px",
              background: "canvas.subtle",
              color: "fg.default",
              marginRight: 3,
              height: "40px",
              fontSize: 2,
              marginBottom: 3,
            //  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
              transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                padding: "2px",
                background: "linear-gradient(92deg, #D2A8FF 12.09%, #F778BA 42.58%, #FF7B72 84.96%)",
                WebkitMask: "linear-gradient(white, white) content-box, linear-gradient(white, white)",
                WebkitMaskComposite: "destination-out",
                maskComposite: "exclude",
              },
            }}
            onClick={bTooCFilter}
          >
            B2C
          </Button>
          <Button
             sx={{
              position: "relative",
              padding: "5px 20px",
              textAlign: "center",
              display: "inline-block",
              borderRadius: "25px",
              background: "canvas.subtle",
              color: "fg.default",
              marginRight: 3,
              height: "40px",
              fontSize: 2,
              marginBottom: 3,
            //  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
              transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                padding: "2px",
                background: "linear-gradient(92deg, #D2A8FF 12.09%, #F778BA 42.58%, #FF7B72 84.96%)",
                WebkitMask: "linear-gradient(white, white) content-box, linear-gradient(white, white)",
                WebkitMaskComposite: "destination-out",
                maskComposite: "exclude",
              },
            }}
            onClick={webFilter}
          >
            Web
          </Button>
          <Button
              sx={{
                position: "relative",
                padding: "5px 20px",
                textAlign: "center",
                display: "inline-block",
                borderRadius: "25px",
                background: "canvas.subtle",
                color: "fg.default",
                marginRight: 3,
                height: "40px",
                fontSize: 2,
                marginBottom: 3,
              //  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                  padding: "2px",
                  background: "linear-gradient(92deg, #D2A8FF 12.09%, #F778BA 42.58%, #FF7B72 84.96%)",
                  WebkitMask: "linear-gradient(white, white) content-box, linear-gradient(white, white)",
                  WebkitMaskComposite: "destination-out",
                  maskComposite: "exclude",
                },
              }}
            onClick={mobileFilter}
          >
            Mobile
          </Button>
          <Button
              sx={{
                position: "relative",
                padding: "5px 20px",
                textAlign: "center",
                display: "inline-block",
                borderRadius: "25px",
                background: "canvas.subtle",
                color: "fg.default",
                marginRight: 3,
                height: "40px",
                fontSize: 2,
                marginBottom: 3,
              //  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                  padding: "2px",
                  background: "linear-gradient(92deg, #D2A8FF 12.09%, #F778BA 42.58%, #FF7B72 84.96%)",
                  WebkitMask: "linear-gradient(white, white) content-box, linear-gradient(white, white)",
                  WebkitMaskComposite: "destination-out",
                  maskComposite: "exclude",
                },
              }}
            onClick={brandingFilter}
          >
            Branding
          </Button>
        </Box>
      </Box>
      <Projects data={filteredData} />
    </>
  );
};

export default FilteringProjects;
