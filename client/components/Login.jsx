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

const Login = (props) => {
  
    
    console.log('this.props', props);
    return(
      <button onClick={props.logIn}>
        Log in
      </button>
    )

}
export default Login;