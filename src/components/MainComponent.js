import React, { Component } from "react";
import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".centered");
      if (el) {
        el.remove(); // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "1") {
        this.props.history.push("/home");
      }
      if (e.key === "2") {
        this.props.history.push("/aboutus");
      }
      if (e.key === "3") {
        this.props.history.push("/menu");
      }
      if (e.key === "4") {
        this.props.history.push("/contactus");
      }
    });
  }

  fakeRequest = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 3000));
  };

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }
    document.body.style.background = "#1d1d1d";

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={() => <Home />} />
          <Route exact path="/menu" component={() => <Menu />} />
          <Route exact path="/contactus" component={Contact} />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.state.leaders} />}
          />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
