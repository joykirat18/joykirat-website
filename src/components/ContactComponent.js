import React, { Component } from "react";
import ReactLogo from "../images/remote-team.svg";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Canvas from "../shared/ParticleStatic";
class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate(firstname, lastname, telnum, email) {
    const errors = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
    };

    if (this.state.touched.firstname && firstname.length < 3)
      errors.firstname = "First Name should be >= 3 characters";
    else if (this.state.touched.firstname && firstname.length > 10)
      errors.firstname = "First Name should be <= 10 characters";

    if (this.state.touched.lastname && lastname.length < 3)
      errors.lastname = "Last Name should be >= 3 characters";
    else if (this.state.touched.lastname && lastname.length > 10)
      errors.lastname = "Last Name should be <= 10 characters";

    const reg = /^\d+$/;
    if (this.state.touched.telnum && !reg.test(telnum))
      errors.telnum = "Tel. Number should contain only numbers";

    if (
      this.state.touched.email &&
      email.split("").filter((x) => x === "@").length !== 1
    )
      errors.email = "Email should contain a @";

    return errors;
  }
  render() {
    const styles = {
      fadeInDown: {
        animation: "x 2s",
        animationName: Radium.keyframes(fadeIn, "fadeIn"),
      },
    };
    
    return (
	<StyleRoot>
      <div className="container " >
	  <Canvas />
        <div className="row row-content" style={styles.fadeInDown}>
          <div className="col-5 col-md-5">
            <p className="contact-heading">Have a Question for me?</p>
            <p className="contact-info">Contact Me</p>
            <div className="call-me-button">
              <div class="phone cta">Call Me</div>
              <div class="phone number">9717522342</div>
            </div>
            <div className="email-me-button">
              <div class="phone cta">Email Me</div>
              <div class="phone email">joykirat19166@iiitd.ac.in</div>
            </div>
          </div>
          <div className="col-7 col-md-6 contact-logo">
            <img src={ReactLogo} alt="React Logo" />
          </div>
        </div>
        <div className="row">
          <span className="contact-info-2">
            Lets make some amazing projects together
          </span>
        </div>
      </div>
	  </StyleRoot>
    );
  }
}

export default Contact;
