import { combineReducers } from "redux";

import projectsListReducer from "./projectsListReducer";
import projectDetailReducer from "./projectDetailReducer";

const rootReducer = combineReducers({
  projectsList: projectsListReducer,
  projectDetail: projectDetailReducer
});

export default rootReducer;
