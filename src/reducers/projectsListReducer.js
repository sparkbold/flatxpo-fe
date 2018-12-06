import {
  SET_PROJECTS_REQUEST,
  SET_PROJECTS_SUCCESS,
  CLICK_BUSINESS,
  CLICK_EDUCATION,
  CLICK_GAMES,
  CLICK_PRODUCTITY,
  CLICK_ALL,
  ADD_VOTE_REQUEST,
  ADD_VOTE_SUCCESS
} from "../actions/projectActions";

const INITIAL_STATE = {
  loading: false,
  filtertype: null,
  projects: [{ votes: [] }]
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
    //--------------addVote-------------//
    case ADD_VOTE_REQUEST:
      return { ...state, loading: true };

    case ADD_VOTE_SUCCESS:
      let targetProject = action.payload.response.votes.project;
      return {
        ...state,
        projects: [
          ...state.projects.filter(project => project.id != targetProject.id),
          targetProject
        ].sort((a, b) => a.id - b.id),
        loading: false
      };
    default:
      return state;
  }
};

export default projectsListReducer;
