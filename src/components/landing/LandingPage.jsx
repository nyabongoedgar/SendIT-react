import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SignupPage from "../../containers/signup/SignupContainer";
import LoginContainer from "../../containers/login/LoginContainer";
import M from "materialize-css/dist/js/materialize.js";
import NavBar from "../NavBar";

class LandingPage extends Component {
  render() {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems);
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route path="/login" component={LoginContainer} />
          <Route path="/signup" component={SignupPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default LandingPage;
