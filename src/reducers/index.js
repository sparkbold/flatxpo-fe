import { combineReducers } from "redux";

import projectsListReducer from "./projectsListReducer";
import projectDetailReducer from "./projectDetailReducer";
import projectCommentReducer from "./projectComment";

const rootReducer = combineReducers({
  projectsList: projectsListReducer,
  projectDetail: projectDetailReducer,
  projectComment: projectCommentReducer
});

export default rootReducer;
