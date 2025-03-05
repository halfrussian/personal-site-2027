import React from "react";
import { Text, Heading, Box, Link, Button } from "@primer/react";
import top from "../assets/github-success/top.webp";
import sub1 from "../assets/github-success/sub1.png";
import sub2 from "../assets/github-success/sub2.png";

import slide1 from "../assets/github-success/slide1.png";
import slide2 from "../assets/github-success/slide2.png";
import slide3 from "../assets/github-success/slide3.png";
import slide4 from "../assets/github-success/slide4.png";
import journey from "../assets/github-success/journey.png";
import Footer from "../components/Footer";
import map from "../assets/github-success/map.png";

import user from "../assets/github-success/user.png";
import doub from "../assets/github-success/doub.png";
import admin from "../assets/github-success/admin.png";
import dash from "../assets/github-success/dash.png";
import dual from "../assets/github-success/dual.png";
import users from "../assets/github-success/users.png";
import user1 from "../assets/github-success/user1.png";
import user2 from "../assets/github-success/user2.png";
import user3 from "../assets/github-success/user3.png";
import user4 from "../assets/github-success/user4.png";
import user5 from "../assets/github-success/user5.png";
import user6 from "../assets/github-success/user6.png";
import user7 from "../assets/github-success/user7.png";

const GitHubSuccess = () => {
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
                  GitHub Success Portal - Building a Portal that will allow
                  Enterprise customer's to succeed without the need of Human
                  Support
                </Heading>
              </div>
            </div>
            <div className="row">
              <Text sx={{ fontSize: "4" }}>
                In this project, I conceptualized and designed the GitHub
                Success Portal, a groundbreaking platform tailored for
                Enterprise customers. With a user-centric approach, the portal
                was crafted to empower users with the tools and resources
                necessary to navigate GitHub seamlessly, eliminating the
                dependency on human support. By streamlining the user experience
                and anticipating the needs of Enterprise clients, the GitHub
                Success Portal serves as a self-sufficient hub for unlocking
                success in the GitHub ecosystem.
              </Text>
            </div>
            <div className="row mt-4">
              <div className="col-lg-3 mb-3">
                <Text sx={{ fontSize: "3", color: "fg.subtle" }}>Role</Text>
                <br />

                <Text sx={{ fontSize: "4" }}>UX Designer</Text>
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
                  Lead Design of the Sucess Portal with Figma, Figjam, and Adobe
                  Creative Cloud
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
          {/* NAV START */}
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
                    top: document.querySelector("#context").offsetTop,
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
                  Context
                </Link>
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
                    top: document.querySelector("#mission").offsetTop,
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
                  Mission
                </Link>
              </div>
              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#user").offsetTop,
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
                  User
                </Link>
              </div>

              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#navigation").offsetTop,
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
                  Navigation
                </Link>
              </div>

              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#dashboard").offsetTop,
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
                  Main Dashboard
                </Link>
              </div>

              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#journ").offsetTop,
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
                  User Journey
                </Link>
              </div>

              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#copilot").offsetTop,
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
                  A/B Test Copilot
                </Link>
              </div>

              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#expectations").offsetTop,
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
                  Expectations
                </Link>
              </div>

              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#impact").offsetTop,
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
                  Potential Impact & Success
                </Link>
              </div>
            </Box>
          </div>

          {/* NAV END */}

          {/* BODY START */}
          <div className="aboutBody">
            <Box>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12" id="context">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      Context
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      The data
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      At github we have enterprise metrics that we keep track on
                      our end. We call these metrics a health score. Our
                      customers can see very basic things like their billing,
                      and of course developer pull request via the repository
                      charts on their end.
                    </p>

                    <p style={{ fontSize: "20px" }}>
                      However they dont see the deatiled metrics that we have on
                      our end. This data is T shaped in that it goes more in
                      depth on how the organiation is being run. And some key
                      pit falls - that we believe - the organization could
                      improve upon.
                      <br />
                      <br />
                      Our Customer Support Represeatives use this data to better
                      inform these Entpreise Admins, who are our users, or
                      consumers, on potential gaps in where they may not be
                      using their products to their fullest potential. This is
                      good for us, but bad for our Users. Because they dont have
                      access to it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="container-fluid mb-5">
                <div className="row">
                  <div className="col-12">
                    <img src={dual} className="img-fluid" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    
                  </div>

                  <div className="col-lg-6">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      Enterprise Admins often get lost in Tickets that go
                      unanswered
                    </Text>
                  </div>
                </div>
              </div>

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
                      The Problem
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      1. How do we share this valuable data with our enterprise
                      admins in a consumable manner?
                    </h3>

                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      2. How do we incorporate Copilot AI in the experience so
                      that its genuinely helpful and adds value to their
                      workflow.
                    </h3>
                  </div>
                </div>
              </div>

              <div className="container-fluid">
                <div className="row">
                  <div className="col-12" id="mission">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      Mission
                    </Text>
                    <h3
                      style={{
                        fontSize: "30px",
                        fontWeight: "bold",
                        mb: "2",
                        fontStyle: "italic",
                      }}
                    >
                      “Our mission is to create a seamless Support Portal
                      experience that empowers Enterprise Admins to unlock the
                      full potential of their data, enhancing their workflows
                      with Copilot for maximum productivity and impact.”
                    </h3>
                  </div>
                </div>
              </div>

              <div className="container-fluid">
                <div className="row">
                  <div className="col-12" id="user">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      User
                    </Text>

                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      What do our users or our consumers believe right now?
                    </h3>
                    <div className="row mb-5">
                      <div className="col-12">
                        <img
                          style={{ borderRadius: "6px" }}
                          src={user}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <p style={{ fontSize: "20px" }}>
                      We did an initial interviews,to gauge what their
                      predispositions were on their own Enterprise accounts what
                      success would look like to them and is this an experience
                      that they would find valuable. Here are some of the
                      questions we asked.
                      <br />
                      <br />
                      What was your role in the organization: More often than
                      not, the enterprise admin also acted as the lead developer
                      on their team. We only had 1 occasion where the Enterprise
                      admin didnt know how to code, and was just a manger.
                      <br />
                      <br />
                      How do you measure your organizations success? We received
                      answers like: Not overspending, Pipeline Efficiency, how
                      high quality is their output is, and that their developers
                      are using the license or seats they've purchased.
                      <br />
                      <br />
                      Whats the most valuable metric in your organization?
                      Simply put, it’s about the investment. Every Enterprise
                      Admin we spoke with placed a high priority on
                      understanding their spend on consumable products, like
                      actions and justifying it to upper management.
                      <br />
                      <br />
                      What are your expectations of how Copilot can fit into
                      this experience? We had various responses like: Answer
                      questions I have when I get stuck.
                    </p>
                  </div>
                </div>
              </div>

              <div className="container-fluid">
                <div className="row">
                  <div className="col-12" id="navigation">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      Navigation
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      Friction with a lack of universal navigation
                    </h3>
                    <div className="row">
                      <div className="col-12">
                        <img
                          style={{ borderRadius: "6px" }}
                          src={doub}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <p style={{ fontSize: "20px" }}>
                      First we need to establish an entrance to this new
                      experience.
                      <br />
                      <br />
                      We looked at our home page at Support.github.com and I
                      realised that we don't have a general navigation like
                      github.com does. We've mostly relied on our Product Area
                      cards for users to navigate the portal. Which is a tad
                      backwards since its for product feature pages.
                      <br />
                      <br />
                      So we decided go the route of creating a sidebar fold out
                      navigation that dynamically renders a lists for Admin
                      Essentials Resources.
                    </p>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      Admin Essentials. A new section that will now only render
                      to Enterprise Admins. Giving them access to this new
                      experience until we move to a more general navigation
                      approach.
                    </h3>
                    <div className="row">
                      <div className="col-12">
                        <img
                          style={{ borderRadius: "6px" }}
                          src={admin}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <br /> <br />
                    <p style={{ fontSize: "20px" }}>
                      We ran into a hiccup. The component we needed from GitHubs
                      Primer design system, was currently only available in
                      rails, and I had just redesigned and rebuilt the entire
                      Support Portal in React.
                      <br />
                      <br />
                      In this situation we adapted and chose to create a section
                      called Admin essentials above the product area cards for
                      now until the component can be created in react first.
                      <br />
                      <br />
                      Thankfully the development team has just completed this
                      sidebar fold out component, and a Pull request fro the
                      sidebar navigation was just created this week.
                      <br />
                      <br />
                      While this presented a challenge, it ultimately
                      highlighted our ability to stay flexible and find a
                      creative, I'll be it not perfect solution within current
                      technical constraints.
                    </p>
                  </div>
                </div>
              </div>

              <div className="container-fluid">
                <div className="row">
                  <div className="col-12" id="dashboard">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      Main Dashboard
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      Drilling down or everything at once?
                    </h3>
                    <div className="row">
                      <div className="col-12">
                        <img
                          style={{ borderRadius: "6px" }}
                          src={dash}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <p style={{ fontSize: "20px" }}>
                      <br />
                      Our Product manager was curious if our Enterprise Admins
                      preferred having a home page dashboard that contained
                      all of the information on it. So about 10-15ish tables
                      based on the products they purchased. Or just key
                      information that they personally felt was most important
                      that they could then later on drill down into for more
                      detail.
                      <br />
                      <br />
                      We sent out a quick survey to our Enterprise admins who we
                      interview in the first round, and they preferred the
                      latter.
                      <br />
                      <br />
                      Once an enterprise admin enters this new experience their
                      presented with just a few tables. All containing the
                      information they told us they cared the most about. Billed
                      Usage License or Seat Usage Active Developers And a break
                      down of their productivity of their products
                    </p>
                  </div>
                </div>
              </div>

              <div className="container-fluid">
                <div className="row">
                  <div className="col-12" id="journ">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      User journey
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      A real life scenario
                    </h3>
                    <div className="row">
                      <div className="col-12">
                        <img
                          style={{ borderRadius: "6px" }}
                          src={users}
                          className="img-fluid"
                        />
                      </div>
                    </div>

                    <p style={{ fontSize: "20px" }}>
                      <br />
                      But lets tie it together and go through a user journey to
                      full understand the impact of the product.
                      <br />
                      <br />
                      Lets say stakeholder approaches our enterprise admin and
                      asks,"Do we reeeally need GitHub Advanced security? The
                      higher ups are looking to cut costs and we cant seem to
                      find justification for it. Since you were the one who
                      suggested us purchasing this product, can you please just
                      show us some data or metrics so that we know it benefits
                      our workflow."
                      <br />
                      <br />
                      Our Enterprise Admin knows that GitHub does show some
                      metrics, but doesn't show any kind of nitty gritty
                      productivity metrics like this, but she remembers that she
                      once had a conversation about health checks with a Support
                      Staff member.
                      <br />
                      <br />
                      So she has to reach out to a Support member - either by
                      phone, email, or submit a ticket, and hope to hear back
                      soon. To do this she navigates to support.github.com
                    </p>

                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      New section - Admin essentials
                    </h3>
                    <div className="row">
                      <div className="col-12">
                        <img
                          style={{ borderRadius: "6px" }}
                          src={user1}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <br />
                    <p style={{ fontSize: "20px" }}>
                      Once she's there she notices a new Section that wasnt
                      there before called Admin essentials, and the first card
                      is label Enterprise Metrics. She click its to investigate
                      and see what potential metrics she could be shown. To her
                      surprise...
                    </p>
                    <br />
                    <p style={{ fontSize: "20px" }}>
                      She's presented with a dashboard that shows a high level
                      overview of her Organisation. Theres Billing usage, Seat
                      Usage, but what she cares most about at this moment is
                      GitHub Advanced Security. She notices that its listed
                      under Product Breakdown so she clicks through to get
                      clarity.
                    </p>
                    <div className="col-12">
                      <img
                        style={{ borderRadius: "6px" }}
                        src={user2}
                        className="img-fluid"
                      />
                    </div>
                    <br />
                    <p style={{ fontSize: "20px" }}>
                      There she sees various charts all of which are overviews
                      of the products she's purchased. She laser focusing in on
                      the GitHub Advanced Security chart and click through
                      again.
                    </p>
                    <img
                      style={{ borderRadius: "6px" }}
                      src={user2}
                      className="img-fluid"
                    />
                    <br />
                    <br />
                    <p style={{ fontSize: "20px" }}>
                      There she sees various charts all of which are overviews
                      of the products she's purchased. She laser focuses on
                      the GitHub Advanced Security chart and click through
                      again.
                    </p>
                    <img
                      style={{ borderRadius: "6px" }}
                      src={user3}
                      className="img-fluid"
                    />
                    <br />
                    <br />
                    <p style={{ fontSize: "20px" }}>
                      On this page she sees all the metrics for her
                      organizations usage and productivity in relation to GitHub
                      Advanced Security. This is what she's been looking for.
                      <br />
                      <br />
                      She goes to take a screen shot, but she notices that she
                      can simply export the data and filter the report by the
                      dates she prefers. So if she prefers a certain semester or
                      even the whole year she filters as needed.
                      <br />
                      <br />
                      She exports the data and before she leaves she also
                      notices that some of here metrics are trending downwards.
                      Which seem to prompt a link out to asking Copilot for
                      suggestions.
                    </p>
                    <img
                      style={{ borderRadius: "6px" }}
                      src={user4}
                      className="img-fluid"
                    />
                    <p style={{ fontSize: "20px" }}>
                      <br />
                      <br />
                    
                    </p>
                  </div>
                </div>
              </div>

              <div className="container-fluid">
                <div className="row">
                  <div className="col-12" id="journ">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      A/B Copilot AI
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      We compared two seperate Copilot AI experiences
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      We first showed Copilot in Github support chat. Thats
                      essentially open ended.
                      <br />
                      <br />
                      <img
                        style={{ borderRadius: "6px" }}
                        src={user5}
                        className="img-fluid"
                      />
                      <br />
                      <br />
                      It can offer instructions or steps that our enterprise
                      admins can take to improve their organization's product.
                      Or it can even suggest investing and enrolling in a
                      Service or Certification program for long term Enterprise
                      health.
                      <br />
                      <br />
                      This is a very open ended approach where we simply place a
                      copilot chat and offer it as a potential assistant on how
                      can they can improve their GitHub Advanced Security usage.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <img
                    style={{ borderRadius: "6px" }}
                    src={user6}
                    className="img-fluid"
                  />
                  <p style={{ fontSize: "20px" }}>
                    Now the B test. The former was in the form of a chatbot,
                    that took in simple suggestions and was a lighter
                    engineering lift, in that it only appeared when users were
                    trending down and gave a simple nudge in the direction of
                    asking copilot for suggestions.
                    <br />
                    <br />
                    This version was much more hands on, in that it provided a
                    dynamic list of insights, suggestions and a open ended
                    conversation with Copilot. Our users immediately gave us
                    push back. They felt that they were being told how to run
                    their organization and that we were defining what
                    productivity meant for them.
                    <br />
                    <br />
                    When really its up to the consumer to define what
                    productivity looks like to their own personal Enterprise.
                    And so we decided to choose the former. Make copilot an open
                    ended tool and simply places it as a subtle option. And what
                    even greater is was a more simple solution and was less of
                    an engineering lift as well
                  </p>
                </div>
              </div>

              <div className="container-fluid">
                <div className="row">
                  <div className="col-12" id="expectations">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      Expectation
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      What can the Enterprise Admin expect?
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      So what can the Enterprise Admin expect from this
                      experience? Well to circle back to our journey. Remember
                      that our Enterprise Admin can now enter the Support
                      Portal, view detailed metrics about their product and
                      produce reports that justify - and track their own
                      progress. All with the very subtle help of Copilot as a
                      guide as needed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="container-fluid">
                <div className="row">
                  <div className="col-12" id="impact">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      Potential Impact & Success
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      In the process as you read
                    </h3>
                    
                    <br />
                    <br />
                    <p style={{ fontSize: "20px" }}>
                      This experience hasn't been fully launched just yet, but
                      its in the process as we speak.
                      <br />
                      <br />
                      And here are some more interesting takeaways from our last
                      prototyping session which I've just presented.
                      <br />
                      <br />
                      First off all the users, that we interviewed, believed
                      that this experience added value to their enterprise
                      Second 87% of the Enterprise admins we interviewed
                      believed that this experience should not only be available
                      to them but also their developers. They like the idea of
                      transparency across there organisation and would love all
                      team members to constantly be aware of their own
                      productivity to effectively stay self aware and self
                      motivated. 
                      <br />
                      <br />
                      <img
                      style={{ borderRadius: "6px" }}
                      src={user7}
                      className="img-fluid"
                    />
                      <br />
                      <br />
                      Not too surprisingly our Enterprise admins
                      valued having access to more data and the ability to point
                      to metrics to justify their use of our products to upper
                      management or to their clients.
                      <br />
                      <br />
                      Because what gets measured gets tracked and what gets
                      tracked can be improved upon.
                      <br />
                      <br />
                      As it stand now, this experience has the potential impact
                      to add value to our consumer's workflow and make their
                      organisation more successful.
                      <br />
                      <br />
                      
                    
                    </p>
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

export default GitHubSuccess;
