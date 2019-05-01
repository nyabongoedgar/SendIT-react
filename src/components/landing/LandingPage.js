import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignupPage from "../../containers/signup/SignupContainer";
import LoginContainer from "../../containers/login/LoginContainer";
import M from "materialize-css/dist/js/materialize.js";
import NavBar from "../NavBar";
import ParcelContainer from "../../containers/parcel/ParcelContainer";

class LandingPage extends Component {
  render() {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems);
    return (
 
        <BrowserRouter>
          <NavBar />
          <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route exact path="/login"  component={LoginContainer} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/parcels" component={ParcelContainer} />

          </Switch>
         
        </BrowserRouter>
    
    );
  }
}

export default LandingPage;
