import React from "react";
import { Text, Heading, Box } from "@primer/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import './Hero.css'

const Projects = (props) => {
 
  const navigate = useNavigate();
  return (
    <Box>
      <Box sx={{ maxWidth: "100%", backgroundColor:"canvas.subtle", }}>
        <Box
          sx={{
            backgroundColor: "canvas.subtle",
            paddingTop: 3,
            maxWidth: "1400px",
            margin: "auto",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              {props.data.map((cardItem) => {
                const { id, image, categories, title, desc, link } = cardItem;

                return (
                  <>
                    <div
                      className="col-lg-6 anim-Bottom"
                      key={id}
                      onClick={() => {
                          navigate(link)
                      }}
                    >
                      <Box sx={{ ":hover": { cursor: "pointer" } }}>
                        <Box
                        sx={{
                          boxShadow: 'shadow.large',
                          transition: 'transform 0.3s ease-in-out',
                          ':hover': {
                            transform: 'scale(1.02)',
                          },
                        }}
                        >
                          <img
                            src={image}
                            alt=""
                            className="img-fluid"
                            style={{
                              borderRadius: "6px",
                              border: "solid 1px lightgray",
                            }}
                          />
                        </Box>
                        <Box
                          display="flex"
                          sx={{ fontFamily: "Gill Sans", mt: 3 }}
                        >
                          {categories.map((catItem) => {
                            return (
                              <>
                                <Text
                                  sx={{ marginRight: 2, color: "fg.subtle" }}
                                >{`${catItem} /`}</Text>
                              </>
                            );
                          })}
                        </Box>
                        <Box>
                          <Heading as="h2" sx={{ fontSize: 3, marginTop: '10px', marginBottom:'10px' }}>
                            {title}
                          </Heading>
                          <Text as="p" sx={{ fontSize: 3 }}>
                            {desc}
                          </Text>
                        </Box>
                      </Box>
                    </div>
                  </>
                );
              })}
              {/* Card is in one column */}

              <div className="col-lg-6 bg-info"></div>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
