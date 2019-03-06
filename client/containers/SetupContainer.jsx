/**
 * ************************************
 *
 * @module  SetupContainer.jsx
 * @author
 * @date
 * @description container for login and invite functionality
 *
 * ************************************
 */

import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Login from '../components/Login';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  isLoggedIn: store.reducer.isLoggedIn,
}
)

const mapDispatchToProps = dispatch => ({
  logIn: (login) => {
    dispatch(actions.logIn(login));
  }
})

class SetupContainer extends Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props);
    const {logIn, isLoggedIn} = this.props;
    return(
      <div>
        {isLoggedIn ? 
        <div>something</div> :   
        <Login logIn={logIn} isLoggedIn={isLoggedIn}/>

      }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetupContainer);
