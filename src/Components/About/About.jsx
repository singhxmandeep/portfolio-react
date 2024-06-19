import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
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
              I'm Mandeep Singh, a Full-Stack Developer and a Computer
              Programming student at Algonquin College. My passion for web
              development drives me to create functional and visually appealing
              web solutions. I have a solid foundation in HTML, CSS, JavaScript,
              React JS, and Next JS, and I'm always eager to learn new
              technologies to stay updated in this dynamic field
            </p>
            <p>
              In addition to my studies, I have worked on several personal and
              collaborative projects, including a Google Gemini clone, an AI
              Image Generator, a Notes Taking App using the MERN stack, and a
              News App utilizing the News API. These experiences have enhanced
              my technical skills and taught me the importance of user-centric
              design and problem-solving. I'm excited to contribute to
              innovative projects and create meaningful digital experiences.
            </p>
          </div>
          <div>
            <div className="about-skills">
            <div className="about-skill">
              <p>HTML and CSS</p>
              <div className="skill-bar" style={{ width: '70%' }}></div>
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <div style={{ width: "75%" }} ></div>
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <div style={{ width: "60%" }} ></div>
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <div style={{ width: "50%" }} ></div>
            </div>
            <div className="about-skill">
              <p>Java</p>
              <div style={{ width: "45%" }} ></div>
            </div>
            <div className="about-skill">
              <p>Python</p>
              <div style={{ width: "70%" }} ></div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF LEARNING <br />AND DEVELOPMENT</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
