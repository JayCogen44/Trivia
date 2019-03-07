/**
 * ************************************
 *
 * @module  Login.jsx
 * @author
 * @date
 * @description component for login and invite functionality
 *
 * ************************************
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../scss/bootstrap-social.css';

const Login = props => {
  console.log('this.props', props);
  return (
    <div>
      <input />
      Enter a roomID <br />
      OR
      <button onClick={props.logIn}>Log in</button>
      <div>
        <a href="/auth/facebook" className="btn btn-block btn-social btn-facebook">
          <span className="fab fa-facebook" />
          Sign in with Facebook
        </a>
      </div>
    </div>
  );
};
export default Login;
