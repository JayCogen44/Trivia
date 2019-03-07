/**
 * ************************************
 *
 * @module  Categories.jsx
 * @author
 * @date
 * @description container for choosing category for the game
 *
 * ************************************
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Categories extends Component{
  constructor(props){
    super(props);
  }

  //fetch categories list from Database
  componentDidMount(){
    this.props.fetchCategories();
  }

  // change local state to hold the chosen category
  // handleCategoryChange(event) {
  //   this.setState({
  //     categoryIdSelected: event.target.id
  //   })
  // }

  render() {
    const { categories, submitCategoryForm } = this.props;
    const categoriesArr =[];
    for(let i = 0; i < categories.length; i++){
      categoriesArr.push(
        <div id={categories[i].id} className="Category" key={i} onClick={submitCategoryForm}>
          {categories[i].categoryName}
        </div>
      )
    }

    return(
      <div> 
        <div id="Prof-Pic">
          Profile Pic, 
        </div>
        <div id='Games-Played'>
          Games Played
        </div>
        <div id='Games-Won'>
          Games Won
        </div>

        <div id="Categories-List">
          {categoriesArr}
        </div>
      </div>
    )
  }
}
  
  export default Categories;