import React from "react";
import { Text, Heading, Box, Link, Timeline } from "@primer/react";
import "../components/About.css";
import Image from "../assets/heroimg.webp";
import bImage from "../assets/belgium.webp";
import aboutImage from "../assets/about.png";
import Footer from "../components/Footer";
import "../components/About.css";

const About = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Optional: Unobserve to improve performance after the animation is done
          observer.unobserve(entry.target);
        }
      });
    });

    document.querySelectorAll(".hidden").forEach((element) => {
      observer.observe(element);
    });
  });

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
          display="flex"
          sx={{
            maxWidth: "1350px",
            width: ["90%", "90%", "90%", "95%", "87%"],
            margin: "auto",
            marginTop: 3,
          }}
        >
          <div className="navigate  anim-Left">
            <Box sx={{ width: "300px", position: "sticky", top: 5, ml: "3" }}>
              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#design").offsetTop,
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
                  Why I Design
                </Link>
              </div>
              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#love").offsetTop,
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
                  What I Love Designing
                </Link>
              </div>
              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#personality").offsetTop,
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
                  Personality
                </Link>
              </div>
              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#hobbies").offsetTop,
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
                  Hobbies
                </Link>
              </div>

              <div className="link">
                <Link
                  sx={{
                    fontSize: "3",
                    color: "fg.muted",
                    ":hover": { cursor: "pointer" },
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top: document.querySelector("#social").offsetTop,
                      behavior: "smooth",
                    });
                  }}
                >
                  Social Links
                </Link>
              </div>
            </Box>
          </div>

          <div className="aboutBody">
            <Box>
              <div className="typewriter">
                <h1
                  sx={{
                    fontSize: "50px",
                  }}
                >
                  About me
                </h1>
              </div>

              <div className="container-fluid animBottom">
                <div className="row">
                  <div className="col-12" id="design">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      Why I Design
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      Design is my opportunity to provide empathy and
                      inclusivity — principles that I lacked growing up
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      In my formative years as an individual of biracial
                      heritage, I encountered a distinct sense of not belonging
                      to any specific social group. This nuanced challenge arose
                      from not aligning seamlessly with either of my communities
                      of ancestry.
                      <br />
                      <div className="mt-3" />
                      Through designing, and developing, for both myself and
                      clients, I’ve discovered myself and strived to be
                      inclusive and empathetic in all projects I work on.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center text-center mt-3">
                  <div className="col-lg-6 align-items-center">
                    <img
                      style={{ width: "500px" }}
                      src={Image}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6 align-items-center mt-1">
                    <img
                      style={{ width: "500px" }}
                      src={bImage}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="container-fluid animBottom">
                <div className="row">
                  <div className="col-12" id="love">
                    <Heading
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "10",
                        mb: "2",
                      }}
                    >
                      What I Love Designing
                    </Heading>
                    <Heading
                      as="h3"
                      sx={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      Innovative and empowering consumer products
                    </Heading>
                    <Text sx={{ fontSize: "20px" }}>
                      I've always been drawn to the thrill of building from the
                      ground up. My passion extends from startups to enterprise
                      Saas products, always intertwining people and uniting them
                      under a single vision. Currently, I'm exploring 3D design
                      and Virtual Reality game development, combining my love
                      for innovation and a touch of my Matrix fan enthusiasm.
                      Most recently, I was designing a space Virtual Reality
                      first person shooter game.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="container-fluid animBottom">
                <div className="row">
                  <div className="col-12" id="personality">
                    <Heading
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "10",
                        mb: "2",
                      }}
                    >
                      Personality
                    </Heading>
                    <Heading
                      as="h3"
                      sx={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      I'm an athletic, open, and quirky product designer who
                      loves to challenge the status quo inside and outside of
                      work
                    </Heading>
                    <Text sx={{ fontSize: "20px" }}>
                      My design philosophy and life are guided by my
                      adventurous, open, and slightly quirky compass. From
                      swimming a mile, running a marathon, dunking a basketball,
                      or sparring in the boxing gym, to impromptu adventures to
                      new countries, my determined spirit pervades all I do. I
                      find joy in venturing into the unknown, challenging
                      assumptions, and embracing vulnerability as a tool to
                      explore varied perspectives.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="container-fluid animBottom">
                <div className="row">
                  <div className="col-12" id="hobbies">
                    <Heading
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "10",
                        mb: "2",
                      }}
                    >
                      Hobbies
                    </Heading>
                    <Heading
                      as="h3"
                      sx={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      All things exercise, travel, and health
                    </Heading>
                    <Text sx={{ fontSize: "20px" }}>
                      Whether sparing at the reading, lifting weights,
                      snorkeling, traversing global destinations, or preparing
                      for a hypothetical zombie apocalypse, I embrace a
                      multi-faceted approach to life and hobbies. From 1 year
                      dedicated to training for a marathon to a half-year
                      training to swim a mile without stopping, my adventurous
                      spirit is always up for new exploratory challenges – and
                      I'm all ears for your hobby suggestions!
                    </Text>
                  </div>
                </div>
                <div className="row mt-5 mb-5">
                  <div className="col-12 mb-5">
                    <img src={aboutImage} className="img-fluid" />
                  </div>
                </div>
                <div className="row" id="social">
                  <div className="col-12">
                    <Heading
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "5",
                        mb: "2",
                      }}
                    >
                      Social Links
                    </Heading>
                    <Heading
                      as="h3"
                      sx={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      Feel free to reach out — preferably through LinkedIn
                    </Heading>
                  </div>
                </div>

                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                    <Box
                  sx={{
                    width: "",
                    whiteSpace: "normal", // Allows text to wrap within the container
    overflow: "hidden",   // Prevents content overflow
    wordBreak: "break-word",
                  }}
                >
                  <Text sx={{ mt: "1", fontSize: "3", fontWeight: "bold" }}>
                    LinkedIn -
                    <Link href="https://www.linkedin.com/in/joshua-bracken">
                      https://www.linkedin.com/in/joshua-bracken/
                    </Link>
                  </Text>
                  <br />
                  <Text sx={{ mt: "1", fontSize: "3", fontWeight: "bold" }}>
                    Instagram -
                    <Link href="https://www.instagram.com/joshuabracken__/">
                      https://www.instagram.com/joshuabracken__/
                    </Link>
                  </Text>
                  {/* <Text sx={{mt: '1', fontSize: '3', fontWeight: 'bold'}}> YouTube - 
                    <Link
                    href="https://www.youtube.com/@TheDesignerDeveloper"
                    >https://www.youtube.com/@TheDesignerDeveloper</Link>
                    </Text> */}
                </Box>
                    </div>
                  </div>
                </div>
               
              </div>
            </Box>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default About;
