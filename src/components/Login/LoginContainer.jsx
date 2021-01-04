import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import Login from './Login';

const LoginContainer = ({login}) => {
   return(
      <Login
         login={login}
         // error={props.loginError}
      />
   )
}

const mapStateToProps = (state) => {
   return {
      // loginError: state.auth.loginError
   }
}

export default connect(mapStateToProps, {login})(LoginContainer)