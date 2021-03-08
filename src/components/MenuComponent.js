import React from "react";
import { Button } from "react-bootstrap";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Canvas from "../shared/ParticleStatic";
import color from "../images/color-switch.jpg";
import blm from "../images/BLM.png";
import su from "../images/su.jpg";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import useSound from "use-sound";
import tap from "../sound/air.wav";
function Menu(props) {
  const [play, { stop }] = useSound(tap, { volume: 0.05});
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
            <p className="align-items-center justify-content-center project-heading">
              <font className="swing">P</font>
              <font className="swing">R</font>
              <font className="swing">O</font>
              <font className="swing">J</font>
              <font className="swing">E</font>
              <font className="swing">C</font>
              <font className="swing">T</font>
              <font className="swing">S</font>
            </p>
          </div>

          <div className="flip-card col-12 col-md-4 text-center">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <Button onMouseEnter={play} onMouseLeave={stop}>
                  <img alt = "color switch " className="color-img" src={color}></img>
                  <p className="color-switch">Color Switch</p>
                </Button>
              </div>
              <div class="flip-card-back">
                <p className="color-switch-info">
                  Developed color switch game in java using JavaFX and fxml. The
                  game supported multiple users and multiple saved games. Made
                  use of all the concepts of object-orientated programming in
                  making this application.
                </p>
              </div>
            </div>
          </div>

          <div className="flip-card col-12 col-md-4 text-center">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <Button onMouseEnter={play} onMouseLeave={stop}>
                  <img alt = "black life matter" className="blm-img" src={blm}></img>
                  <p className="blm-switch">George Floyd Web Typography</p>
                </Button>
              </div>
              <div class="flip-card-back">
                <p className="blm-info">
                  George Floyd said he couldn't breathe more than 20 times,
                  called out for his children and late mother and said officers
                  would "kill" him before he died in Minneapolis police custody.
                  This web typography shows his breathing, and on pressing the
                  letters, the breathing action changes. The
                  <a style={{ color: "#febe55" }}
                    href="https://web-typo.vercel.app/#"
                    rel="noreferrer"
                    target="_blank"
                  >
                    link
                  </a>
                  to the website.
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card col-12 col-md-4 text-center">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <Button onMouseEnter={play} onMouseLeave={stop}>
                  <img alt = "sudoku" className="su-img" src={su}></img>
                  <p className="su-switch">Automatic sudoku solver</p>
                </Button>
              </div>
              <div class="flip-card-back">
                <p className="su-info">
                  Worked on the IOS app, which scans the Sudoku image and solves
                  it using the Apple vision kit and text Recognition kit.
                  Learned the basics of the Swift language.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="project-info">For more project visit my github Page.</p>
          <IconContext.Provider value={{ className: "github2" }}>
            <a
              href="https://github.com/joykirat18"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
          </IconContext.Provider>
        </div>
      </StyleRoot>
    </div>
  );
}

export default Menu;
