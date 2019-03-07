/**
 * ************************************
 *
 * @module  Login.jsx
 * @author
 * @date
 * @description container for login and invite functionality
 *
 * ************************************
 */

import React, { Component } from 'react';
// import '../scss/bootstrap-social.scss';

const Login = props => {
  console.log('this.props', props);
  return (
    <form action="/auth/facebook" method="GET">
      <button className="btn-facebook" onClick={props.Login} />
    </form>
  );
};
export default Login;
