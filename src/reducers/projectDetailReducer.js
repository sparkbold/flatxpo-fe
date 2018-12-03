import {
  LOAD_PROJECT_REQUEST,
  LOAD_PROJECT_SUCCESS
} from "../actions/projectsList";

const INITIAL_STATE = {
  loading: false,
  project: {}
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
    default:
      return state;
  }
};

export default projectsDetailReducer;
