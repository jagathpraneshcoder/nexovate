import React from 'react';
import './AboutUs.css';
import kecLogo from '../assets/kec_logo.svg';
import csdaLogo from '../assets/csda.svg';
import cdccLogo from '../assets/cdcc.svg';
import spadeIcon from '../assets/spade.svg';
import clubIcon from '../assets/club (2).svg';
 
import diamondIcon from '../assets/diamond.svg';
import pokerChip from '../assets/poker.svg';
import bottom_poker from '../assets/bottom_poker.svg'
 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="header-section">
        <div className="header">
            <img src={spadeIcon} alt="Spade" className="icon-left" />
            <h2>ABOUT US</h2>
        </div>
       
        <img src={pokerChip} alt="Poker Chip" className="icon-right" />
      </div>

      <div className="card-container">
        <div className="about-card">
          <div className="card-corner top-left">
            <img src={diamondIcon} alt="alt" />
          </div>
          <div className="card-header">
            <h3>Kongu <br /> Engineering <br /> College</h3>
            <img src={kecLogo} alt="KEC Logo" className="college-logo" />
          </div>
          <p>
          Kongu Engineering College, one of the foremost multi professional research-led Institutions is internationally a recognized leader in professional and career-oriented education. It provides an integral, inter-disciplinary education - a unique intersection between theory and practice, passion and reason. The College offers courses of study that are on the frontiers of knowledge and it connects the spiritual and practical dimensions of intellectual life, in a stimulating environment that fosters rigorous scholarship and supportive community. This Institute is a great possession of the committed Trust. The noble Trust has taken the institute to greater heights and has established the college as a forum for imparting value based education.
          </p>
          <div className='card1-space'>
              
          </div>
          <div className="card-corner bottom-right">
         
            <img src={diamondIcon} alt="alt" />
          </div>
        </div>
        {/* <div className="mid">
        <img src={clubIcon} alt="Club Icon" className="mid-club" />
        </div> */}
        <div className="card2">
                <div className="about-card">
                    <div className="card-corner top-left">
                        <img src={diamondIcon} alt="alt" />
                    </div>
                    
                    <div className="card-header">
                    <h3>CSDA <br />AND <br /> CDCC</h3>
                        <img src={kecLogo} alt="KEC Logo" className="college-logo" />
                    
                    </div>
                    <p>
                    B.E. Computer Science and Design programme aims to develop graduates with computing tools and technologies, along with the interactive design approaches and its technologies. The program will prepare students to work in the IT industry as well as in design industry like virtual/augmented reality, gaming, IoT, etc., . Nowadays, good use of interaction design principles and techniques is a very high priority for software development companies. We have established Center of Excellence in VR/AR in collaboration with Unity, USA. Our vision is to be a centre of excellence for bringing up skilled computer professionals with enriching interactive design skills, high caliber and quality for catering to the dynamic needs of the industry and society.
                    </p>
                    <div className="club_logo">
                        <img src={csdaLogo} alt="CSDA Logo" className="college-logo small-logo" />
                        <img src={cdccLogo} alt="CDCC Logo" className="college-logo small-logo" />
                    </div>
                    
                    <div className="card-corner bottom-right">
                        <img src={diamondIcon} alt="alt" />
                    </div>
                    
                </div>
                
                <img src={clubIcon} alt="Poker Chip" className="bottom-chip" />
                
                <img src={bottom_poker} alt="Poker Chip" className="bottom-poker" />
        </div>
        
       
      </div>

      <div className="footer-icons">
        {/*  */}
        <img src={clubIcon} alt="Club Icon" className="footer-club" />
        
      </div>
    </div>
  );
};

export default AboutUs;