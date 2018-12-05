import {
  SET_PROJECTS_REQUEST,
  SET_PROJECTS_SUCCESS,
  CLICK_BUSINESS,
  CLICK_EDUCATION,
  CLICK_GAMES,
  CLICK_PRODUCTITY,
  CLICK_ALL
} from "../actions/projectActions";

const INITIAL_STATE = {
  loading: false,
  filtertype: null,
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
    case CLICK_BUSINESS:
      console.log("Click", action.payload.filtertype);
      return { ...state, filtertype: action.payload.filtertype };
    case CLICK_EDUCATION:
      console.log("Click", action.payload.filtertype);
      return { ...state, filtertype: action.payload.filtertype };
    case CLICK_PRODUCTITY:
      console.log("Click", action.payload.filtertype);
      return { ...state, filtertype: action.payload.filtertype };
    case CLICK_GAMES:
      console.log("Click", action.payload.filtertype);
      return { ...state, filtertype: action.payload.filtertype };
    case CLICK_ALL:
      console.log("Click", action.payload.filtertype);
      return { ...state, filtertype: action.payload.filtertype };
    default:
      return state;
  }
};

export default projectsListReducer;
