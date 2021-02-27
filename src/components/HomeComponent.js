import React, { Component } from "react";
import Canvas from '../shared/Particles';
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
    return (
      <div className="container">
	   <Canvas width="2880" height="1576" style="width: 1440px;right: 0;height: 788px;"/>
        <div className="row row-content">
        
          <div className="col-12 col-md home-intro">
            <p className="hi">
              Hello<br></br>
            </p>
            <p className="intro">
              I'm Joykirat<br></br>
            </p>
            <p className="description"><Typewriter
      options={{
        strings: [
          "A web developer",
          "A coder",
          "A designer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    /></p>
          </div>
          
          <div className=" icon col-12 text-center">
            <Raise height={10} timing={200}>
              <IconContext.Provider
                value={{
                  style: {
                    margin: "10px",
                    fontSize: "34px",
                    color: "rgb(0, 123, 255)",
                  },
                }}
              >
                <a href="https://github.com/joykirat18" target="_blank">
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
                <a href="https://www.instagram.com/joykirat18/" target="_blank">
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
                <a href="mailto:joykirat19166@iiitd.ac.in" target="_blank">
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
      </div>
    );
  }
}

export default Home;
