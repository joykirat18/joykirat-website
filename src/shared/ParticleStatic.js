import React, { Component } from "react";
import Particles from "react-particles-js";

class Canvas extends Component {
  state = { width: "200px", height: "200px" };

  render() {
    const { width, height } = this.state;
    console.log(width, height);
    return (
      <Particles
        // {...this.state}
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 700,
              },
            },
            // color: {
            //   value: "#19456b",
            // },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#19456b",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 0.1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 10,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#19456b",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          retina_detect: true,
        }}
      />
    );
  }
}

export default Canvas;
