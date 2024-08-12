import React from "react";
import "./Home.css";
import profile_img from "../../assets/profile_img.jpeg";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Home = () => {
  return (
    <div id="home" className="home">
      <img src={profile_img} alt="Profile" />
      <h1>
        <span className="typing-effect">I'm Mandeep Singh,</span> <br /> Full-Stack Developer based in Canada.
      </h1>
      <p className="full-paragraph">
        With a strong foundation in web technologies and a passion for creating dynamic and responsive web applications, I specialize in building and maintaining websites that offer seamless user experiences. As a student at Algonquin College, I am constantly learning and applying new skills to my projects. Explore my portfolio to see some of the innovative solutions I've developed.
      </p>
      <p className="short-paragraph">
        Web developer with a passion for creating dynamic and responsive applications. Currently studying at Algonquin College and eager to explore new technologies. Check out my portfolio for innovative projects.
      </p>
      <div className="home-action">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          <div className="home-connect">Connect</div>
        </AnchorLink>
        <a href="/resume.pdf" download="Mandeep_Singh_Resume.pdf" className="resume-link">
          <div className="home-resume">My resume</div>
        </a>
      </div>
    </div>
  );
};

export default Home;
