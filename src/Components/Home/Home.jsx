import React from "react";
import "./Home.css";
import profile_img from "../../assets/profile_img.jpeg";
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Home = () => {
  return (
    <div id="home" className="home">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Mandeep Singh,</span> <br></br> Full-Stack Developer based in
        Canada.
      </h1>
      <p>
      With a strong foundation in web technologies and a passion for creating dynamic and responsive web applications, I specialize in building and maintaining websites that offer seamless user experiences. As a student at Algonquin College, I am constantly learning and applying new skills to my projects. Explore my portfolio to see some of the innovative solutions I've developed.
      </p>
      <div className="home-action">
        <div className="home-connect"><AnchorLink className='anchor-link'offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <div className="home-resume">
          <a href="/resume.pdf" download="Mandeep_Singh_Resume.pdf" className="resume-link">My resume</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
