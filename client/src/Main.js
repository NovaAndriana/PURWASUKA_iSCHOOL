import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import logo from './logo.png';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li><NavLink to="/">Login</NavLink></li>
            <li><NavLink to="/Signup">Register</NavLink></li>
            <p><img src={logo} width="400" height="400"/></p>
          </ul> 
          <div className="content">
             <Route exact path="/" component={Login}/>
            <Route path="/Signup" component={Signup}/>
            {/*<Route path="/contact" component={Contact}/> */}
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;