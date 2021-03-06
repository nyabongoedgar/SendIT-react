import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignUp from '../../components/signup/SignUp';
import M from 'materialize-css/dist/js/materialize.js';

import { userSignupRequest } from '../../actions/signup/signUpActions';



export class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
    };
  }


  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.password === this.state.password2) {
      const data = {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
      };
      this.props.userSignupRequest(data);
    } else {
      M.toast({html: 'Passwords do not match!', classes: 'red'});

    }
  };


  render() {
    return (
      <div className="container">
        <SignUp
          
          submitHandler = {this.submitHandler}
          inputHandler={this.inputHandler}
          password={this.state.password}
          password2={this.state.password2}
          email={this.state.email}
          username={this.state.username}
          userSignupRequest= {this.props.userSignupRequest}  
          isLoading={this.props.loading}
        />
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => {
  return { loading: state.registrationReducer.loading }
}


export default connect(
  mapStateToProps,
  { userSignupRequest }
)(SignupPage);
