import {
  LOAD_PROJECT_REQUEST,
  LOAD_PROJECT_SUCCESS,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS
} from "../actions/projectActions";

const INITIAL_STATE = {
  loading: false,
  project: { user: {} }
};

const projectsDetailReducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_PROJECT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOAD_PROJECT_SUCCESS:
      // debugger;
      return {
        ...state,
        project: action.payload.project,
        loading: false
      };
    case ADD_COMMENT_REQUEST:
      return { ...state, loading: true };
    case ADD_COMMENT_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        project: {
          ...state.project,
          comments: [
            ...state.project.comments,
            action.payload.response.comments
          ]
        },
        loading: false
      };
    default:
      return state;
  }
};

export default projectsDetailReducer;
