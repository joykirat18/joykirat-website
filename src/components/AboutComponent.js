import React, { Component } from "react";
import Canvas from "../shared/ParticleStatic";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
class About extends Component {
  componentDidMount() {
    const TagCloud = require("TagCloud");

    const container = ".tagcloud";
    const texts = [
      "Github",
      "JavaScript",
      "React",
      "CSS",
      "HTML",
      "SQL",
      "Python",
      "Swift",
      "Bootstrap",
      "Java",
      "Linux",
      "PhotoShop",
      "Illustrator",
      "C++",
      "C#"
    ];
    const options = {
      radius: 300,

      maxSpeed: "fast",
      initSpeed: "fast",

      direction: 135,
      keep: true,
    };
    TagCloud(container, texts, options);
  }
  render() {
    const styles = {
      fadeInDown: {
        animation: "x 1.5s",
        animationName: Radium.keyframes(fadeIn, "fadeIn"),
      },
    };
    return (
      <div className="container">
        <Canvas />
        <StyleRoot>
          <div className="row row-content" style={styles.fadeInDown}>
            <div className="skill col-12 col-md-6">
              <span className=" skill-heading">
                <font className="swing">S</font>
                <font className="swing">k</font>
                <font className="swing">i</font>
                <font className="swing">l</font>
                <font className="swing">l</font>
                <font className="swing">s</font>
                <font className="swing">&nbsp;</font>
                <font className="swing">&</font>
                <font className="swing">&nbsp;</font>
                <font className="swing">E</font>
                <font className="swing">x</font>
                <font className="swing">p</font>
                <font className="swing">e</font>
                <font className="swing">r</font>
                <font className="swing">i</font>
                <font className="swing">e</font>
                <font className="swing">n</font>
                <font className="swing">c</font>
                <font className="swing">e</font>
              </span>
              <br />
              <span className="skill-info">
                Hi, I am a second-year college student at Indraprastha Institute
                of Information Technology Delhi. I am very passionate about
                designing and web dev. I am currently working on some very cool
                projects. <br></br>
                <br></br>In the past, I have worked on javascript, python,
                swift, React and also did a small intership in java
                micro-services. I have recently started looking at open source
                development and would like to be part of some big projects and
                contribute to them.
              </span>
              <br></br>
              <div class="button" id="button-3">
                <div id="circle"></div>
                <a
                  className="resume"
                  href="https://docs.google.com/document/d/1WcXFwwUGgMWiHJ45fHJ2q954oDc4AQQX96n3YCgrQiE/edit?usp=sharing"
                  rel="noreferrer"
                  target="_blank"
                >
                  Resume
                </a>
              </div>
            </div>
            <div className="tagcloud col-12 col-md-6 tag"></div>
          </div>
        </StyleRoot>
      </div>
    );
  }
}

export default About;
