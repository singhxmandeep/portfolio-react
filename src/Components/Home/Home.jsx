import React from "react";
import "./Home.css";
import profile_img from "../../assets/profile_img.jpeg";

const Home = () => {
  return (
    <div className="home">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Mandeep Singh,</span> <br></br> Full-Stack Developer based in
        Canada.
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis,
        veritatis tempore numquam voluptatem nulla laudantium aspernatur porro
        fugit a sed!
      </p>
      <div className="home-action">
        <div className="home-connect">Connect with me</div>
        <div className="home-resume">My resume</div>
      </div>
    </div>
  );
};

export default Home;
