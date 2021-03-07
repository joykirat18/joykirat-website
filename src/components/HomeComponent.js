import React, { Component } from "react";
import Canvas from "../shared/Particles";
import Typewriter from "typewriter-effect";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { BsFillXDiamondFill } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import Raise from "./Raise.js";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offsetX: "",
      offsetY: "",
      friction: 1 / 32,
    };
    this._mouseMove = this._mouseMove.bind(this);
  }
  handleClick = (event) => {
    alert(event);
  };
  componentDidMount() {
    document.addEventListener("mousemove", this._mouseMove);
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._mouseMove);
  }
  _mouseMove(e) {
    let followX = window.innerWidth / 2 - e.clientX;
    let followY = window.innerHeight / 2 - e.clientY;

    let x = 0,
      y = 0;
    x += (-followX - x) * this.state.friction;
    y += (followY - y) * this.state.friction;
    this.setState({
      offsetX: x,
      offsetY: y,
    });
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
            <div className="col-12 col-md home-intro">
              <p className="hi">
                Hello<br></br>
              </p>
              <p className="intro">
                <font className="swing">I</font>
                <font className="swing">'</font>
                <font className="swing">m</font>
                <font className="swing">&nbsp;</font>
                <font className="swing">J</font>
                <font className="swing">o</font>
                <font className="swing">y</font>
                <font className="swing">k</font>
                <font className="swing">i</font>
                <font className="swing">r</font>
                <font className="swing">a</font>
                <font className="swing">t</font>
              </p>
              <p className="description">
                <Typewriter
                  options={{
                    strings: ["A web developer", "A coder", "A designer"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </p>
            </div>

            <div className=" icon col-12 text-center">
              <Raise height={10} timing={200}>
                <IconContext.Provider value={{ className: "github" }}>
                  <a
                    href="https://github.com/joykirat18"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                </IconContext.Provider>
              </Raise>
              <IconContext.Provider
                value={{
                  style: {
                    margin: "10px",
                    fontSize: "10px",
                    color: "rgb(255,250,250)",
                  },
                }}
              >
                <BsFillXDiamondFill />
              </IconContext.Provider>
              <Raise height={10} timing={200}>
                <IconContext.Provider
                  value={{
                    style: {
                      margin: "10px",
                      fontSize: "40px",
                      color: "rgb(245,133,41)",
                    },
                  }}
                >
                  <a
                    href="https://www.instagram.com/joykirat18/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <AiOutlineInstagram />
                  </a>
                </IconContext.Provider>
              </Raise>
              <IconContext.Provider
                value={{
                  style: {
                    margin: "10px",
                    fontSize: "10px",
                    color: "rgb(255,250,250)",
                  },
                }}
              >
                <BsFillXDiamondFill />
              </IconContext.Provider>
              <Raise height={10} timing={200}>
                <IconContext.Provider
                  value={{
                    style: {
                      margin: "10px",
                      fontSize: "35px",
                      color: "rgb(255,250,0)",
                    },
                  }}
                >
                  <a
                    href="mailto:joykirat19166@iiitd.ac.in"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <SiGmail />
                  </a>
                </IconContext.Provider>
              </Raise>
              <IconContext.Provider
                value={{
                  style: {
                    margin: "10px",
                    fontSize: "10px",
                    color: "rgb(255,250,250)",
                  },
                }}
              >
                <BsFillXDiamondFill />
              </IconContext.Provider>
              <Raise height={10} timing={200}>
                <IconContext.Provider
                  value={{
                    style: {
                      margin: "10px",
                      fontSize: "40px",
                      color: "rgb(255,0,0)",
                    },
                  }}
                >
                  <AiFillYoutube />
                </IconContext.Provider>
              </Raise>
              <IconContext.Provider
                value={{
                  style: {
                    margin: "10px",
                    fontSize: "10px",
                    color: "rgb(255,250,250)",
                  },
                }}
              >
                <BsFillXDiamondFill />
              </IconContext.Provider>
              <Raise height={10} timing={200}>
                <IconContext.Provider
                  value={{
                    style: {
                      margin: "10px",
                      fontSize: "40px",
                      color: "rgb(8,160,233)",
                    },
                  }}
                >
                  <AiOutlineTwitter />
                </IconContext.Provider>
              </Raise>
              <IconContext.Provider
                value={{
                  style: {
                    margin: "10px",
                    fontSize: "10px",
                    color: "rgb(255,250,250)",
                  },
                }}
              >
                <BsFillXDiamondFill />
              </IconContext.Provider>
              <Raise height={10} timing={200}>
                <IconContext.Provider
                  value={{
                    style: {
                      margin: "10px",
                      fontSize: "40px",
                      color: "rgb(59,89,152)",
                    },
                  }}
                >
                  <AiFillFacebook />
                </IconContext.Provider>
              </Raise>
              <IconContext.Provider
                value={{
                  style: {
                    margin: "10px",
                    fontSize: "10px",
                    color: "rgb(255,250,250)",
                  },
                }}
              >
                <BsFillXDiamondFill />
              </IconContext.Provider>
              <Raise height={10} timing={200}>
                <IconContext.Provider
                  value={{
                    style: {
                      margin: "10px",
                      fontSize: "45px",
                      color: "rgb(0, 123, 255)",
                    },
                  }}
                >
                  <AiFillLinkedin />
                </IconContext.Provider>
              </Raise>
            </div>
          </div>
        </StyleRoot>
      </div>
    );
  }
}

export default Home;
