import React, { Component } from "react";
import Canvas from '../shared/Particles';


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
    return (
		<div className="container">
			<Canvas />
		  <div className="row row-content">
			<div className = "text-center col-12">
			<span className="d-flex align-items-center justify-content-center project-heading">
              Projects
            </span>
			</div>
			<div className="flip-card col-4 text-center">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p>Project 1</p>
              </div>
              <div class="flip-card-back">
              </div>
            </div>
          </div>
		  <div className="flip-card col-4 text-center">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p>Project 2</p>
              </div>
              <div class="flip-card-back">
              </div>
            </div>
          </div>
		  <div className="flip-card col-4 text-center">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p>Project 3</p>
              </div>
              <div class="flip-card-back">
              </div>
            </div>
          </div>
		  </div>
		</div>
	);

    

  }
}

export default Menu;
