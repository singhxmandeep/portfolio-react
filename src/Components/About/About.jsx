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
          <img className="profile_img" src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p className="full-paragraph">
              👋 Hi, I'm Mandeep Singh! Experienced software developer with 2+ years of expertise in JavaScript, HTML5, CSS3, React.js, and Next.js. I excel in building responsive, user-focused web applications and optimizing performance.
              <br /><br />
              Currently studying Computer Programming at Algonquin College, where I’m honing my skills in various programming languages and frameworks.
              <br /><br />
              Projects:
              <br />
              - Food Delivery App: Full-stack application with React.js, MongoDB, and Stripe.
              <br />
              - AI Image Generator: AI-based image generator using React.js and the OpenAI API.
              <br />
              - Notes Taking App: MERN stack web app with authentication and CRUD operations.
              <br />
              - News App: News application integrating third-party APIs.
              <br />
              - Google Gemini Clone: Replica of Google Gemini’s core functionalities.
              <br /><br />
              Seeking 2024 internship opportunities: Eager to apply my skills to innovative projects and contribute to dynamic teams.
              <br /><br />
              Check out my work on GitHub | <a href="https://github.com/singhxmandeep" target="_blank" rel="noopener noreferrer">https://github.com/singhxmandeep</a>
              <br /><br />
              Let’s connect and explore how we can drive impactful tech solutions together!
            </p>
            <p className="short-paragraph">
              👋 Hi, I'm Mandeep Singh! I'm an experienced software developer with 2+ years of expertise in JavaScript, HTML5, CSS3, React.js, and Next.js. Currently studying Computer Programming at Algonquin College.
              <br /><br />
              Projects: Food Delivery App, AI Image Generator, Notes Taking App, News App, Google Gemini Clone.
              <br /><br />
              Seeking 2024 internship opportunities. Check out my work on GitHub | <a href="https://github.com/singhxmandeep" target="_blank" rel="noopener noreferrer">GitHub</a>
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
                <div style={{ width: "75%" }}></div>
              </div>
              <div className="about-skill">
                <p>React JS</p>
                <div style={{ width: "60%" }}></div>
              </div>
              <div className="about-skill">
                <p>Next JS</p>
                <div style={{ width: "50%" }}></div>
              </div>
              <div className="about-skill">
                <p>Java</p>
                <div style={{ width: "45%" }}></div>
              </div>
              <div className="about-skill">
                <p>Python</p>
                <div style={{ width: "70%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p className="achievement-text">YEARS OF LEARNING </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p className="achievement-text">PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p className="achievement-text">HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
