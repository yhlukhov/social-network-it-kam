import React from 'react';
import Header from './Header'
import { connect } from 'react-redux';
import { logout} from '../../redux/authReducer'
import { getEmail, getLogin, getIsAuth } from '../../redux/authSelectors';

class HeaderContainer extends React.Component {
   

   render() {
      return(
         <Header {...this.props} />
      )
   }
}

const mapStateToProps = (state) => {
   return {
      email: getEmail(state),
      login: getLogin(state),
      isAuth: getIsAuth(state)
   }
}

export default connect(mapStateToProps, {logout})(HeaderContainer)