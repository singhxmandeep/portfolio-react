import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,
              blanditiis ad! Ipsum sed facilis consequatur impedit. Enim
              doloremque corporis iure, animi repudiandae consequatur expedita
              eum eligendi laborum earum, hic sunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              nulla ea, eligendi optio quas obcaecati. Quidem odio
              exercitationem assumenda ad, possimus vel, atque vitae similique
              quaerat qui quia rerum incidunt.
            </p>
          </div>
          <div className="about-skills">
          <div className="about-skill">
            <p>HTML and CSS</p>
            <hr style={{ width: "70%" }} />
          </div>
          <div className="about-skill">
            <p>JavaScript</p>
            <hr style={{ width: "75%" }} />
          </div>
          <div className="about-skill">
            <p>React JS</p>
            <hr style={{ width: "60%" }} />
          </div>
          <div className="about-skill">
            <p>Next JS</p>
            <hr style={{ width: "50%" }} />
          </div>
        </div>
        </div>
        
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
