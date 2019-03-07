/**
 * ************************************
 *
 * @module  reducer
 * @author
 * @date
 * @description reducer for the app
 *
 * ************************************ 
 */

import * as types from '../constants/actionTypes';

const initialState = {
  // current user, maybe an object with those details (pic url, ganes played, games won %)
  // leaderboard
  // category chose
  isLoggedIn: false,
  categories: [],
  categorySelected: null,
  currentPage: 'loginPage',
};

const reducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case types.IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
        currentPage: 'categoriesPage'
      }
    case types.FETCH_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload]
      }
    case types.SUBMIT_CATEGORY_FORM:
      return {
        ...state,
        categorySelected: action.payload,
        currentPage: 'shareLinkPage'
      }
    default:
      return state;
  }
};

export default reducer;