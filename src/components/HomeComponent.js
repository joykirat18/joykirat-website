import React from "react";
import Canvas from "../shared/Particles";
import Typewriter from "typewriter-effect";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { BsFillXDiamondFill } from "react-icons/bs";
import useSound from "use-sound";
import tap from "../sound/tap.wav";
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

function Home(props) {
  const [play, { stop }] = useSound(tap, { volume: 15 });
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

          <div className="icon col-12 text-center">
            <Raise height={10} timing={200}>
              <IconContext.Provider value={{ className: "github" }}>
                <a
                  onMouseEnter={play}
                  onMouseLeave={stop}
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
                    color: "#FD1D1D",
                  },
                }}
              >
                <a
                  onMouseEnter={play}
                  onMouseLeave={stop}
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
                    color: "#FBBC05",
                  },
                }}
              >
                <a
                  onMouseEnter={play}
                  onMouseLeave={stop}
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
                <a
                  href="https://www.youtube.com/"
                  onMouseEnter={play}
                  onMouseLeave={stop}
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiFillYoutube />
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
                    color: "rgb(8,160,233)",
                  },
                }}
              >
                <a
                  href="https://twitter.com/justjoyking_"
                  onMouseEnter={play}
                  onMouseLeave={stop}
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiOutlineTwitter />
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
                    color: "#4267B2",
                  },
                }}
              >
                <a
                  href="https://www.facebook.com/people/Joykirat-Singh/100002417005588"
                  onMouseEnter={play}
                  onMouseLeave={stop}
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiFillFacebook />
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
                    fontSize: "45px",
                    color: "rgb(0, 123, 255)",
                  },
                }}
              >
                <a
                  href="https://www.linkedin.com/"
                  onMouseEnter={play}
                  onMouseLeave={stop}
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiFillLinkedin />
                </a>
              </IconContext.Provider>
            </Raise>
          </div>
        </div>
      </StyleRoot>
    </div>
  );
}

export default Home;
