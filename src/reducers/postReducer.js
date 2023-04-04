// reducers/postReducer.js

import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
  } from "../actions/postActions";
  
  const initialState = {
    loading: false,
    posts: [],
    error: "",
  };
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POSTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_POSTS_SUCCESS:
        return {
          ...state,
          loading: false,
          posts: action.payload,
          error: "",
        };
      case FETCH_POSTS_FAILURE:
        return {
          ...state,
          loading: false,
          posts: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default postReducer;