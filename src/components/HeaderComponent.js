import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import React, {Component} from 'react';
import jletter from "../images/j-letter.svg";
class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
      }
      componentDidMount(){
            this.handleKeyPress(this);
      }
      handleKeyPress = (event) => {
        //   alert(event.key);
            if(event.key === '49'){
                document.getElementById("home").click();
            }
      }
      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
      }
      handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

      }

    render() {
        return(
            <div>
                <Navbar expand="lg">
                    <div className = "container">
                        <NavbarToggler onClick={this.toggleNav} />
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link topBotomBordersOut" to='/home'>
                                <div className = "container topBotomBordersOut">
                                    <a href = "#1" id = "home" onKeyPress = {this.handleKeyPress}>
                                        HOME
                                    </a>
                                </div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><div className = "container topBotomBordersOut">
                                    <a href = "#1" id = "skill">
                                        SKILLS
                                    </a>
                                </div></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><div className = "container topBotomBordersOut">
                                    <a  href = "#1" id = "project">
                                        PROJECTS
                                    </a>
                                </div></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><div className = "container topBotomBordersOut">
                                    <a href = "#1" id = "contact">
                                        CONTACT
                                    </a>
                                </div></NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                            <NavbarBrand className=" logo-J mr-auto" href="/"><a href = "#1"><img src={jletter} width = "30" alt="React Logo" className = "logo"/></a></NavbarBrand>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;
