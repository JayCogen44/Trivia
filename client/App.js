import React, { Component } from 'react';
import ReactDOM from "react-dom";
import * as actions from './actions/actions'
import SetupContainer from './containers/SetupContainer';

class App extends Component {
 constructor(props) {
      super(props);
  }
    // componentDidMount() {
    //     fetch('http://localhost:3000')
    //     .then((data) => {
    //         return data.json();
    //     })
    //     .then((data) => {
    //         console.log(data);
    //     })
    // }
  render() {

    return (
      <div id='app'>
        <SetupContainer/>
      </div>
    )
  }
}

export default App;