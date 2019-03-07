/**
 * ************************************
 *
 * @module  ShareLink.jsx
 * @author
 * @date
 * @description component for sharing link and starting game
 *
 * ************************************
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ShareLink extends Component{
  constructor(props){
    super(props);
  }
  render(){
    // selectedCategory reducer not working 
    return(
      <div>
        You selected category {this.props.categorySelected} <br/>
        Here is your room id, share it with your friends..
      </div>
    )
  }
}
export default ShareLink;