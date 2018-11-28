import { createAsyncActionCreator } from "../helpers/redux.helpers";
import * as projectService from "../helpers/projectBrowserService";

export const keys = {
  GET_ALL_PROJECTS: "GET_ALL_PROJECTS",
  GET_PROJECT_DETAILS: "GET_PROJECT_DETAILS"
};

// export const getTopProjects = page =>
//   createAsyncActionCreator(
//     // actionType
//     keys.GET_TOP_PROJECTS,
//     // requestFn
//     projectService.getTopProjectsRequest,
//     // requestParams
//     { page }
//   );

// export const searchProjects = (query, page) =>
//   createAsyncActionCreator(keys.SEARCH_PROJECTS, projectService.searchProjects, {
//     query,
//     page
//   });

// export const getProjectDetails = projectId =>
//   createAsyncActionCreator(
//     keys.GET_PROJECT_DETAILS,
//     projectService.getProjectDetails,
//     { projectId }
//   );
