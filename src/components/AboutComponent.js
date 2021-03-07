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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic
            </span>
          </div>
          <div className="tagcloud col-12 col-md-6 tag"></div>
        </div>
		</StyleRoot>
      </div>
    );
  }
}

export default About;
