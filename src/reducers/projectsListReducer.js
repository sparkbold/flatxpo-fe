import {
  SET_PROJECTS_REQUEST,
  SET_PROJECTS_SUCCESS
} from "../actions/projectActions";

const INITIAL_STATE = {
  loading: false,
  projects: []
};

const projectsListReducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_PROJECTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case SET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload.projects,
        loading: false
      };
    default:
      return state;
  }
};

export default projectsListReducer;
