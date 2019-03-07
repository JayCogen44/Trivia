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
import Categories from '../components/Categories';
import ShareLink from '../components/ShareLink';

import * as actions from "../actions/actions";
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  isLoggedIn: store.reducer.isLoggedIn,
  categories: store.reducer.categories,
  currentPage: store.reducer.currentPage,
  categorySelected: store.reducer.categorySelected,
})

const mapDispatchToProps = dispatch => ({
  // after logged in, should render to choose category or start game if joined from link 
  logIn: () => {
    dispatch(actions.logIn());
  },
  fetchCategories: () => {
    dispatch(actions.fetchCategories())
  },
  // after submitting category, will render to shareLink component
  submitCategoryForm: (e) => {
    dispatch(actions.submitCategoryForm(event.target.id));
  }
})

class SetupContainer extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {logIn, isLoggedIn, categories, fetchCategories, submitCategoryForm, currentPage, categorySelected} = this.props;
    return(
      <div>
        {currentPage == 'loginPage' && 
        <Login logIn={logIn} isLoggedIn={isLoggedIn}/>
        }
        {currentPage == 'categoriesPage' && 
        <Categories fetchCategories={fetchCategories} categories={categories} submitCategoryForm={submitCategoryForm}/> 
        }
        {currentPage == 'shareLinkPage' && 
        <ShareLink categorySelected={categorySelected}  />
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetupContainer);
