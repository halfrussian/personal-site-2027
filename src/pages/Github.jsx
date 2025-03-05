import React from "react";
import { Text, Heading, Box, Link, Button } from "@primer/react";
import top from "../assets/github/top.webp";
import sub from "../assets/github/sub.png";
import seven from "../assets/github/seven.png";
import eight from "../assets/github/eight.png";
import el from "../assets/github/el.png";
import ten from "../assets/github/ten.png";


import Footer from "../components/Footer";
import op from "../assets/github/op.png";
import gitmap from "../assets/github/gitmap.png";
import key from "../assets/github/key.png";

import one from "../assets/github/1.png";
import two from "../assets/github/2.png";
import three from "../assets/github/3.png";
import four from "../assets/github/4.png";
import five from "../assets/github/5.png";
import six from "../assets/github/6.png";
import sev from "../assets/github/7.png";
import ei from "../assets/github/8.png";


const Github = () => {
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
            maxWidth: "1340px",
            width: ["90%", "90%", "90%", "95%", "87%"],
            margin: "auto",
            marginTop: 3,
          }}
        >
          <div className="container-fluid">
            <div className="row mt-5">
              <div className="col-12">
                <img style={{ width: "50px" }} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Heading
                  as="h1"
                  sx={{
                    fontSize: "50px",
                    marginLeft: "10px",
                    mb: "3",
                    mt: "3",
                    ml: "-2",
                  }}
                >
                  Github - Revamping the Support Portal to Facilitate the
                  Resolution of Challenges Encountered by All Members of the
                  GitHub Community
                </Heading>
              </div>
            </div>
            <div className="row">
              <Text sx={{ fontSize: "4" }}>
                In overhauling the support portal, my focus is on reducing
                ticket submission, currated content, ensuring intuitive
                navigation, and responsive design across devices. By enhancing
                search functionality and incorporating multimedia elements, the
                goal is to a tool that allows user's to find answers on their
                own without the need of human support or filling out a ticket.
              </Text>
            </div>
            <div className="row mt-4">
              <div className="col-lg-3 mb-3">
                <Text sx={{ fontSize: "3", color: "fg.subtle" }}>Role</Text>
                <br />

                <Text sx={{ fontSize: "4" }}>
                  Product Designer & Frontend Developer
                </Text>
              </div>
              <div className="col-lg-3 mb-3">
                <Text sx={{ fontSize: "3", color: "fg.subtle" }}>Timeline</Text>
                <br />
                <Text sx={{ fontSize: "4" }}>5 Months</Text>
              </div>

              <div className="col-lg-6 mb-3">
                <Text sx={{ fontSize: "3", color: "fg.subtle" }}>
                  Core Responsibilities
                </Text>
                <Text sx={{ fontSize: "4" }}>
                  <br />
                  Lead Designer and Frontend Developer of Version 2 of the
                  Support Portal, React, Primer, Typescript
                </Text>
              </div>
            </div>
          </div>
        </Box>
      </Box>

      <Box sx={{ width: "100%" }}>
        <img src={top} className="img-fluid" style={{ width: "100%" }} />
      </Box>

      {/* PROJECT INFO  */}

      <Box
        display="flex"
        sx={{
          width: "100%",
          backgroundColor: "canvas.subtle",
        }}
      >
        <Box
          display="flex"
          sx={{
            maxWidth: "1350px",
            //width: ["90%", "90%", "90%", "95%", "87%"],
            margin: "auto",
            marginTop: 10,
          }}
        >
          <div className="navigate ">
            <Box sx={{ width: "300px", position: "sticky", top: 5 }}>
              <div style={{ marginBottom: "15px" }}>
                <Text
                  sx={{
                    fontSize: "2",
                    color: "fg.muted",
                  }}
                >
                  Overview
                </Text>
              </div>

              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#problem").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                <Link
                  sx={{
                    fontSize: "3",
                    color: "fg.muted",
                    ":hover": { cursor: "pointer" },
                  }}
                >
                  Problem
                </Link>
              </div>
              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#insights").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                <Link
                  sx={{
                    fontSize: "3",
                    color: "fg.muted",
                    ":hover": { cursor: "pointer" },
                  }}
                >
                  Insights
                </Link>
              </div>

              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#goals").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                <Link
                  sx={{
                    fontSize: "3",
                    color: "fg.muted",
                    ":hover": { cursor: "pointer" },
                  }}
                >
                  Goals
                </Link>
              </div>

              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#solution").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                <Link
                  sx={{
                    fontSize: "3",
                    color: "fg.muted",
                    ":hover": { cursor: "pointer" },
                  }}
                >
                  Solution
                </Link>
              </div>
              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#results").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                <Link
                  sx={{
                    fontSize: "3",
                    color: "fg.muted",
                    ":hover": { cursor: "pointer" },
                  }}
                >
                  Results
                </Link>
                <hr style={{ maxWidth: "200px" }} />
              </div>
            </Box>
          </div>

          <div className="aboutBody">
            <Box>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12" id="problem">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      Problems
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      Reduce ticket submissions, while increasing user flow to
                      the appropriate answers
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      The support portal was receiving a vast amount of ticket
                      submissions. Too many in fact for our sales associates to
                      keep up. We can’t keep leaning on the crutch of hiring
                      more people to answer these questions as that would
                      quickly reach a bottleneck.
                      <br />
                      <br />
                      Overall we needed to do an analysis of our current portal,
                      interview our users, and figure out what we can do to
                      reduce tickets while still proactively and efficiently
                      solving our consumer’s issues.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container-fluid mb-5 " id="insights">
                <div className="row mt-5">
                  <div className="col-12">
                  <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      Insights
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      User Profile
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      Conducting research to better understand our users we
                      discovered that often, when looking for support, users
                      looked to 3rd party websites to solve their issues.
                    </p>
                  </div>
                  <div className="col-12">
                    <img src={op} className="img-fluid" />
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-12">
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", }}
                    >
                      Site Analysis
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      
                    </p>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <img src={sub} className="img-fluid" />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-12">
                    <p style={{ fontSize: "20px" }}>
                      
                    </p>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <img src={key} className="img-fluid" />
                  </div>
                </div>

                {/* section start */}
                <div className="row">
                  <div className="col-12" id="goals">
                    <h3
                      style={{
                        fontSize: "30px",
                        fontWeight: "bold",
                        mb: "2",
                        marginTop: "45px",
                      }}
                    >
                     New Sitemap
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                    This new site map aligns with our user’s pain points. 
                    We’ve now broken down our products into categories,
                     implemented a unified global search, community posts, 
                     and popular relevant articles. 
                    </p>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12">
                    <img src={gitmap} className="img-fluid" />
                  </div>
                </div>
                {/* section end */}
              </div>

              <div className="container-fluid">
                <div className="row">
                  <div className="col-12" id="goals">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      Goals
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      Incorporate user’s feedback, to lessen ticket submission,
                       and increase proactive solutions.
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      GitHub has cultivated a theme-oriented library named
                      "Primer." Harnessing this library's capabilities for
                      out-of-the-box accessibility, we can meticulously craft a
                      UI design that not only adheres to industry standards but
                      also exudes aesthetic excellence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="container-fluid">
                <div className="row">
                  <div className="col-12" id="solution">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      Solutions
                    </Text>
                    
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      Reinvigorated and poised for action
                    </h3>

                    <p style={{ fontSize: "20px" }}>
                      Remaining faithful to our brand, we can draw inspiration
                      from a diverse array of sources incorporating elements
                      such as GitHub's gradient patterns and leveraging the
                      versatility of out-of-the-box Primer components, among
                      other compelling influences
                    </p>
                    <Button
                      sx={{
                        marginTop: 4,
                        padding: "5px 20px",
                        marginBottom: 5,
                        textAlign: "center",
                        display: "inline-block",
                        borderRadius: "25px",
                        marginRight: 3,
                        height: "40px",
                        fontSize: 2,
                        backgroundColor: "accent.muted",
                      }}
                      onClick={() =>
                        window.open(
                          "https://www.figma.com/file/kP8HHHi8E63nnTeSJ29Wuk/V2-Support-Portal?type=design&node-id=946%3A2600&mode=design&t=QgLXgJncZWV5KFir-1"
                        )
                      }
                    >
                      Figma File
                    </Button>
                    
                  </div>
                </div>
              </div>
              <div className="container-fluid">
               
                <div className="row mb-5">
                  <div className="col-12">
                    <img src={two} className="img-fluid" />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12">
                    <img src={three} className="img-fluid" />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 ">
                    <img src={four} className="img-fluid" />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 ">
                    <img src={five} className="img-fluid" />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 ">
                    <img src={six} className="img-fluid" />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 ">
                    <img src={sev} className="img-fluid" />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 ">
                    <img src={ei} className="img-fluid" />
                  </div>
                </div>
              </div>

              <div className="container-fluid mb-5">
                <div className="row">
                  <div className="col-12" id="results">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      Results
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      Support Portal Version 2 has launched 🚀 !
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      General feedback from our users on the design of the
                      portal has been positive. Ticket Submission has decreased
                      by 14%. The portal is functioning much more smoothly due
                      to the switch from Ruby to React. Dead clicks have been
                      reduced by 91%. Avg page load time has decreased by 37%.
                    </p>
                    <Button
                      sx={{
                        marginTop: 3,
                        padding: "5px 20px",
                        marginBottom: 5,
                        textAlign: "center",
                        display: "inline-block",
                        borderRadius: "25px",
                        marginRight: 3,
                        height: "40px",
                        fontSize: 2,
                        backgroundColor: "accent.muted",
                      }}
                      onClick={() => window.open("https://support.github.com/")}
                    >
                      Live Code on GitHub
                    </Button>
                   
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Github;
