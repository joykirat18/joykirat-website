import React, { Component } from "react";
import Particles from "react-particles-js";

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
      // radius in px
      radius: 300,

      // animation speed
      // slow, normal, fast
      maxSpeed: "fast",
      initSpeed: "fast",

      // 0 = top
      // 90 = left
      // 135 = right-bottom
      direction: 135,

      // interact with cursor move on mouse out
      keep: true,
    };
    TagCloud(container, texts, options);
  }
  render() {
    return (
      <div className="container">
        <Particles />
        <div className="row row-content">
          <div className="skill col-12 col-md-6">
            <span className=" skill-heading">Skills & Experience</span>
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
      </div>
    );
  }
}

export default About;
