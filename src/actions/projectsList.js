export const SET_PROJECTS = "projectsListContainer:setProjects";
export const SET_PROJECTS_REQUEST = "projectsListContainer:setProjects_REQUEST";
export const SET_PROJECTS_SUCCESS = "projectsListContainer:setProjects_SUCCESS";
export const SET_PROJECTS_ERROR = "projectsListContainer:setProjects_ERROR";

export function setProjects() {
  return dispatch => {
    dispatch({
      type: SET_PROJECTS_REQUEST
    });

    fetch("http://localhost:3000/api/v1/projects")
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: SET_PROJECTS_SUCCESS,
          payload: {
            projects: response
          }
        });
      })
      .catch(error => {
        dispatch({ type: SET_PROJECTS_ERROR, payload: { error } });
      });
  };
}
export const LOAD_PROJECT = "LOAD_PROJECT";
export const LOAD_PROJECT_REQUEST = "LOAD_PROJECT_REQUEST";
export const LOAD_PROJECT_SUCCESS = "LOAD_PROJECT_SUCCESS";
export const LOAD_PROJECT_ERROR = "LOAD_PROJECT_ERROR";

export function loadProjectDetails(projectId) {
  // Interpreted by the thunk middleware:
  return dispatch => {
    // const { project } = getState();
    // if (project) {
    //   // There is cached data! Don't do anything.
    //   console.log("current_project", project);
    //   return;
    // }
    console.log("???????");
    dispatch({
      type: "LOAD_PROJECT_REQUEST"
    });

    // Dispatch vanilla actions asynchronously
    fetch(`http://localhost:3000/api/v1/projects/${projectId}`)
      .then(response => response.json())
      .then(response => {
        // console.log(response);
        dispatch({
          type: LOAD_PROJECT_SUCCESS,
          payload: {
            project: response
          }
        });
      })
      .catch(error => {
        dispatch({ type: LOAD_PROJECT_ERROR, payload: { error } });
      });
  };
}

export const CREATE_PROJECT = "CREATE_PROJECT";
export const CREATE_PROJECT_REQUEST = "CREATE_PROJECT_REQUEST";
export const CREATE_PROJECT_SUCCESS = "CREATE_PROJECT_SUCCESS";
export const CREATE_PROJECT_ERROR = "CREATE_PROJECT_ERROR";

export function createProjects(projectData) {
  return dispatch => {
    dispatch({
      type: CREATE_PROJECT_REQUEST
    });

    fetch("http://localhost:3000/api/v1/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(projectData)
    })
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: SET_PROJECTS_SUCCESS,
          payload: {
            project: response
          }
        });
      })
      .catch(error => {
        dispatch({ type: SET_PROJECTS_ERROR, payload: { error } });
      });
  };
}
