import { produce } from "immer";
import * as actionsTypes from "./constants/question1Constant";

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
  };
  
  const reducer = (state = initialState, { type, payload }) => {
    const newState = produce(state, (draft) => {
      if (type === actionsTypes.UPDATE_POST_LIST_PENDING) {
        draft.isLoading = true;
      }
  
      if (type === actionsTypes.UPDATE_POST_LIST_FULFILLED) {
        draft.posts = payload;
        draft.isLoading = false;
      }
  
      if (type === actionsTypes.UPDATE_POST_LIST_REJECTED) {
        draft.error = payload;
        draft.isLoading = false;
      }
      
      if (type === actionsTypes.CREATE_POST) {
        draft.posts.push(payload) ;
        draft.isLoading = false;
      }

    });
  
    return newState;
  };


  export default reducer;