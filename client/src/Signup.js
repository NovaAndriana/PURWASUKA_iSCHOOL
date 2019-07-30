import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from './logo.png';

class Signup extends Component {
  render() {
    return (
      <div>
        <div class="container">
  <div class="login">
  <img src={logo} width="400" height="400"/>
  	<h1 class="login-heading">
      <strong>Welcome.</strong> Please Sign Up.</h1>
      <form method="post">
        <input type="text" name="user" placeholder="User ID" required="required" class="input-txt" />
          <input type="password" name="password" placeholder="Password" required="required" class="input-txt" />
          <div class="login-footer">
             {/* <NavLink to="/" class="lnk">
              <span class="icon icon--min">ಠ╭╮ಠ </span>&nbsp;
              I've forgotten something
            </NavLink> */}
            
            <button type="submit" class="btn btn--right">Sign in  </button>
    
          </div>
      </form>
  </div>
</div>
      </div>
    );
  }
}
 
export default Signup;