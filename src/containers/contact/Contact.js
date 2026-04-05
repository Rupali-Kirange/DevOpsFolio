import React from "react";
import {Fade} from "react-reveal";
import Button from "../../components/button/Button";
import {contactInfo} from "../../portfolio";
import "./Contact.scss";

export default function Contact() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="contact-main" id="contact">
        <div className="contact-container">
          <h1 className="contact-title">{contactInfo.title}</h1>
          <p className="contact-subtitle">{contactInfo.subtitle}</p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <a href={`mailto:${contactInfo.email_address}`}>
                {contactInfo.email_address}
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <a href={`tel:${contactInfo.number}`}>{contactInfo.number}</a>
            </div>
          </div>
          <div className="contact-actions">
            <a href="/Rupali-Kirange-DevOps-Resume.pdf" download="Rupali-Kirange-DevOps-Resume.pdf">
              <Button text="Download Resume" className="button-resume" />
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
}
