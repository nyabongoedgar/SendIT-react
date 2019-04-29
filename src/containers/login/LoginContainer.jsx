import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from '../../components/login/Login';

import { userLoginRequest } from '../../actions/login/loginActions';



export class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }


  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.setState({isLoading:true})
      const data = {
        user: {
          username: this.state.username,
          password: this.state.password,
        },
      };
      this.props.userLoginRequest(data);
    } ;

  render() {

    return (
      <div className="container">
        <Login
          
          submitHandler = {this.submitHandler}
          inputHandler={this.inputHandler}
          password={this.state.password}
          username={this.state.username}
          userLoginRequest= {this.props.userLoginRequest}  
          error ={this.props.data.error} 
        />
      </div>
    );
  }
}

LoginContainer.propTypes = {
  userLoginRequest: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => {
  return { data: state.LoginReducer }
}


export default connect(
  mapStateToProps,
  { userLoginRequest }
)(LoginContainer);
