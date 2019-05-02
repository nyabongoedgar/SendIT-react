import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignupPage from "../../containers/signup/SignupContainer";
import LoginContainer from "../../containers/login/LoginContainer";
import NavBar from "../NavBar";
import ParcelContainer from "../../containers/parcel/ParcelContainer";
import retrieveParcel from "../../containers/parcel/retriveParcel";
class LandingPage extends Component {
  render() {
 
    return (
 
        <BrowserRouter>
          <NavBar />
          <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route exact path="/login"  component={LoginContainer} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/parcels" component={ParcelContainer} />
          <Route path="/view-parcels" component={retrieveParcel} />
          </Switch>
         
        </BrowserRouter>
    
    );
  }
}

export default LandingPage;
