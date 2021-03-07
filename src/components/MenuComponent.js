import React, { Component } from "react";

import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Canvas from "../shared/ParticleStatic";
class Menu extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
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
          <div className="text-center col-12">
            <p className="d-flex align-items-center justify-content-center project-heading">
				<font className="swing">P</font>
                <font className="swing">r</font>
                <font className="swing">o</font>
                <font className="swing">j</font>
                <font className="swing">e</font>
                <font className="swing">c</font>
                <font className="swing">t</font>
                <font className="swing">s</font>
               
            </p>
          </div>
          <div className="flip-card col-4 text-center">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p>Project 1</p>
              </div>
              <div class="flip-card-back"></div>
            </div>
          </div>
          <div className="flip-card col-4 text-center">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p>Project 2</p>
              </div>
              <div class="flip-card-back"></div>
            </div>
          </div>
          <div className="flip-card col-4 text-center">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p>Project 3</p>
              </div>
              <div class="flip-card-back"></div>
            </div>
          </div>
        </div>
		</StyleRoot>
      </div>
    );
  }
}

export default Menu;
