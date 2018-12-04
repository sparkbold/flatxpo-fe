import {
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS
} from "../actions/projectsList";

const INITIAL_STATE = {
  loading: false,
  comments: []
};

const projectComment = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_COMMENT_REQUEST:
      return { ...state, loading: true };
    case ADD_COMMENT_SUCCESS:
      // debugger;
      return {
        ...state,
        comments: [...state.comments, action.payload],
        loading: false
      };
    default:
      return state;
  }
};

export default projectComment;
