import React, { Component, PropTypes } from 'react';
import { Accounts, STATES } from 'meteor/std:accounts-ui';

class Login extends Component {
    constructor(props) {
    	super(props);

    	Accounts.ui.config ({
		  passwordSignupFields: 'USERNAME_ONLY',
		  loginPath: '/loginpage',
		  signUpPath: '/signuppage',
		  // resetPasswordPath: '/reset-password',
		  // profilePath: '/profile',
		  // onSignedInHook: () => browserHistory.push('/ltolist'),
		  // onSignedOutHook: () => browserHistory.push('/loginpage'),
		  minimumPasswordLength: 5
		)};
	}

    render() {
        return (
			<div>
				<h1>Bejelentkezés</h1>
				<Accounts.ui.LoginForm />
			</div>           
        );
    }
}

export default Login;
