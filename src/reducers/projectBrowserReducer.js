import { combineReducers } from "redux";
import { createReducer, createAsyncReducer } from "../helpers/redux.helpers";
import { keys as projectActionKeys } from "../actions/projectBrowserAction";

// Placeholder reducer for our project modal
const projectModalReducer = createReducer({ isOpen: false }, {});

// This will create a new state with both the existing
// projects and new pages of projects
const projectsSuccessReducer = (state, action) => {
  const existingProjects = state.response ? state.response.results : [];
  // Create a new state object to be returned
  // When creating the new state, be sure to include any
  // existing properties we want to persist
  return {
    ...state,
    isLoading: false,
    response: {
      ...action.response,
      results: [...existingProjects, ...action.response.results]
    }
  };
};

// Combines our project browser related reducers to build our projectBrowser reducer
const projectBrowserReducer = combineReducers({
  projectModal: projectModalReducer,
  allProjects: createAsyncReducer(projectActionKeys.GET_ALL_PROJECTS, {
    [`${projectActionKeys.GET_ALL_PROJECTS}_SUCCESS`]: projectsSuccessReducer
  }),
  projectDetails: createAsyncReducer(projectActionKeys.GET_PROJECT_DETAILS)
});

export default projectBrowserReducer;

// projectSearch: createAsyncReducer(projectActionKeys.SEARCH_PROJECTS, {
//   [`${projectActionKeys.SEARCH_PROJECTS}_SUCCESS`]: projectsSuccessReducer
// }),
