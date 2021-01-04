import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const withLoginRedirect = (Component) => {
	
	class RedirectComponent extends React.Component {
		render() {
			if(this.props.isAuth) return <Redirect to='profile' />
			return <Component {...this.props} />
		}
	}

	const mapStateToProps = (state) => {
		return {
			isAuth: state.auth.isAuth
		}
	}
	
	return connect(mapStateToProps)(RedirectComponent)
}