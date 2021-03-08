import React from "react";
import ReactLogo from "../images/remote-team.svg";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Canvas from "../shared/ParticleStatic";
function Contact(props) {
  const styles = {
    fadeInDown: {
      animation: "x 2s",
      animationName: Radium.keyframes(fadeIn, "fadeIn"),
    },
  };

  return (
    <StyleRoot>
      <div className = "container">
        <Canvas />
        <div className = "row row-content" style={styles.fadeInDown}>
          <div className= "col-5 col-md-5 contact-div">
            <p className= "contact-heading">Have a Question for me?</p>
            <p className= "contact-info">Contact Me</p>
            <div className= "call-me-button">
              <div className = "phone cta"><a style = {{color: "white"}} href = "href=tel:+919717522342">Call Me</a></div>
              <div className = "phone number">9717522342</div>
            </div>
            <div className="email-me-button">
              <div className ="phone cta"><a style = {{color: "white"}} href = "mailto:joykirat19166@iiitd.ac.in">Email Me</a></div>
              <div className ="phone email">joykirat19166@iiitd.ac.in</div>
            </div>
            <div className = "contact-info-2">
              Lets make some amazing projects together
            </div>
          </div>
          <div className = "col-7 col-md-6 contact-logo">
            <img src={ReactLogo} alt="React Logo" />
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Contact;
