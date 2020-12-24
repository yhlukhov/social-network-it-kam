import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import Login from './Login';

const LoginContainer = (props) => {
   return(
      <Login login={props.login} />
   )
}



export default connect(null, {login})(LoginContainer)