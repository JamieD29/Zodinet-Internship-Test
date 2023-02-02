import axios from "axios";
import * as actionsTypes from "../constants/question1Constant";

export const actionFetchPosts = () => {
    
    return async (dispatch,) => {
      try {
        dispatch({
          type: actionsTypes.UPDATE_POST_LIST_PENDING,
        });
        const res = await axios({
          method: "GET",
          url: "https://jsonplaceholder.typicode.com/posts",
        });
  
        dispatch({
          type: actionsTypes.UPDATE_POST_LIST_FULFILLED,
          payload: res.data,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: actionsTypes.UPDATE_POST_LIST_REJECTED,
          payload: error.response.data || error.message,
        });
      }
    };
  };
  
  export const actionCreatePost = (post) => {
    console.log("Create post: ", post);
    return async (dispatch) => {
      try {
        await axios({
          method: "POST",
          url: "https://jsonplaceholder.typicode.com/posts",
          data: post,
        });
        
        dispatch({
            type: actionsTypes.CREATE_POST,
            payload: post
        });
        
      } catch (error) {
        console.log(error);
      } 
    };
  };