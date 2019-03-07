/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
d */

import * as types from '../constants/actionTypes';

export const logIn = () => ({
    type: types.IS_LOGGED_IN,
})

export const fetchCategories = () => ({
    type: types.FETCH_CATEGORIES,
    payload: [
        {
            id: 1,
            categoryName: 'History'
        },
        {
            id: 2,
            categoryName: 'Drama'
        },
        {
            id: 3,
            categoryName: 'Food & Dining'
        }
    ]
})

export const submitCategoryForm = (id) => ({
    type: types.SUBMIT_CATEGORY_FORM,
    payload: id
})