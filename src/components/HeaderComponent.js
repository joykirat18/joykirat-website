import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, ModalHeader,Modal, Button, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
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
                {/* <Jumbotron> */}
                    {/* <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div> */}
                {/* </Jumbotron> */}
                <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal}>
                    <ModalHeader toggle = {this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Header;
