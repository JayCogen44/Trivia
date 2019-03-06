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
};

const reducer = (state = initialState, action) => {
    console.log('the state', state);
    switch (action.type) {
        case types.IS_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: true,
            }
        default:
            return state;
    }
};

export default reducer;