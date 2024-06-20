import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "0e4629d1-b1cc-4594-af0a-27f87b3b3a89");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>If you have any questions, want to discuss a project, or just want to say hello, feel free to get in touch. I'm always open to new opportunities and collaborations.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email Icon" /> 
              <p><a href="mailto:mandeepsingh.71ms31@gmail.com">mandeepsingh.71ms31@gmail.com</a></p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Phone Icon" /> 
              <p><a href="tel:+13439782823">+1 (343) 978-2823</a></p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" /> 
              <p>Ottawa, ON, Canada</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" required />
          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>
          <button className="contact-submit" type="submit">Submit now</button>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
