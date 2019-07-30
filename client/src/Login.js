import React, { Component } from "react";
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
// import Route from 'react-router-dom/Route';
// import Signup from "./Signup";
import logo from './logo.png';
class Login extends Component {
  render() {
    return (
        <Router>
      <div>
        <div class="container">
  <div class="login">
  <img src={logo} width="400" height="400"/>
  	<h1 class="login-heading">
      <strong>Welcome.</strong> Please login.</h1>
      <form method="post">
        <input type="text" name="user" placeholder="User ID" required="required" class="input-txt" />
          <input type="password" name="password" placeholder="Password" required="required" class="input-txt" />
          <div class="login-footer">
              
             <NavLink to="/" class="lnk">
              <span class="icon icon--min">ಠ╭╮ಠ </span>&nbsp;
              I've forgotten something
            </NavLink>
            <button type="submit" class="btn btn--right">Sign in  </button>
          </div>
      </form>
  </div>
</div>
      </div>
      {/* <Route path="/Signup" exact strict render={
          () => {
            return ( <h1>Welcome Home</h1>);
          }
        }/>*/}
        {/* <Switch>
        
        <Route path='/Signup' component={Signup}/> 
        </Switch> */}
      </Router> 
    );
  }
}
 
export default Login;