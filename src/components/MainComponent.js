import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Home from './HomeComponent';
// import Footer from './FooterComponent';
// import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import About from './AboutComponent';
// import { DISHES } from '../shared/dishes';
// import { COMMENTS } from '../shared/comments';
// import { LEADERS } from '../shared/leaders';
// import { PROMOTIONS } from '../shared/promotions';
import Contact from './ContactComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
// import ReactLoading from 'react-loading';
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
      
    };
  }
  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".centered");
      if (el) {
        el.remove();  // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }

  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 3000));
  };

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }
    document.body.style.background = "#1d1d1d";
    // const DishWithId = ({match}) => {
    //     return(
    //         <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
    //             comments = {this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
    //         />

    //     );
    // }
    return (
      <div>
      <Header />
      <Switch>
          <Route path = "/home" component = {() => <Home />} />
          <Route exact path = "/menu" component = {() => <Menu />} /> 
          {/* <Route path = "/menu/:dishId" component = {DishWithId} /> */}
          <Route exact path = "/contactus" component = {Contact} />
          <Route exact path = "/aboutus" component = {() => <About leaders = {this.state.leaders} />} />
          <Redirect to = "/home" />
      </Switch>
      
      </div>
    );
  }
}

export default Main;