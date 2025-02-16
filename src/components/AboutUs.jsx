import React from "react";
import "./AboutUs.css";
import kecLogo from "../assets/kec_logo.svg";
import csdaLogo from "../assets/csda.svg";
import cdccLogo from "../assets/cdcc.svg";
import spadeIcon from "../assets/spade.svg";
import clubIcon from "../assets/club (2).svg";
import { motion } from "framer-motion";
import diamondIcon from "../assets/diamond.svg";
import pokerChip from "../assets/poker.svg";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="header">
          <img
            src={spadeIcon}
            alt="Spade"
            className="icon-left"
            loading="lazy"
          />
          <h2>ABOUT US</h2>
        </div>
        <motion.img
          src={pokerChip}
          alt="Poker Chip"
          className="icon-right"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>

      {/* Cards Section */}
      <div className="card-container">
        {/* Kongu Engineering College Card */}
        <motion.div
          className="about-card"
          whileHover={{ boxShadow: "0px 0px 15px 5px rgba(255, 215, 0, 0.8)" }}
          animate={{
            boxShadow: [
              "0px 0px 10px rgba(255, 255, 255, 0.3)",
              "0px 0px 20px rgba(255, 215, 0, 0.7)",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="card-corner top-left">
            <img src={diamondIcon} alt="Diamond Icon" loading="lazy" />
          </div>
          <div className="card-header">
            <h3>
              Kongu <br /> Engineering <br /> College
            </h3>
          </div>
          <p>
            Kongu Engineering College is a leading research-driven institution
            known for its professional and career-oriented education. It blends
            theory with practice, fostering a dynamic learning environment that
            encourages innovation and interdisciplinary excellence. Guided by a
            committed trust, the college upholds value-based education, academic
            rigor, and a strong community spirit.
          </p>
          <div className="club_logo">
            <img
              src={kecLogo}
              alt="CSDA Logo"
              className="college-logo small-logo"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* CSDA and CDCC Card */}
        <motion.div
          className="about-card"
          whileHover={{ boxShadow: "0px 0px 15px 5px rgba(255, 215, 0, 0.8)" }}
          animate={{
            boxShadow: [
              "0px 0px 10px rgba(255, 255, 255, 0.3)",
              "0px 0px 20px rgba(255, 215, 0, 0.7)",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="card-corner top-left">
            <img src={diamondIcon} alt="Diamond Icon" />
          </div>
          <div className="card-header">
            <h3>
              &nbsp;&nbsp;&nbsp;&nbsp;CSDA&nbsp;&nbsp;&nbsp;&nbsp;
              <br /> &nbsp;&nbsp;&nbsp;&nbsp;&&nbsp;&nbsp;&nbsp;&nbsp; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;CDCC&nbsp;&nbsp;&nbsp;&nbsp;
            </h3>
          </div>
          <p>
            The B.E. Computer Science and Design programme aims to develop
            graduates with computing tools and interactive design technologies.
            The program prepares students to work in the IT industry as well as
            in design fields like virtual/augmented reality, gaming, IoT, etc.
            Our department has established a Center of Excellence in VR/AR in
            collaboration with Unity, USA.
          </p>
          <div className="club_logo">
            <img
              src={csdaLogo}
              alt="CSDA Logo"
              className="college-logo small-logo"
              loading="lazy"
            />
            <img
              src={cdccLogo}
              alt="CDCC Logo"
              className="college-logo small-logo"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Bottom Poker Chip Animation */}
        <motion.img
          src={pokerChip}
          alt="Poker Chip"
          className="bottom-poker"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>

      {/* Footer Icons */}
      <div className="footer-icons">
        <img
          src={clubIcon}
          alt="Club Icon"
          className="footer-club"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AboutUs;
