//---------------------GET ALL PROJECTS-----------------------//
export const SET_PROJECTS = "projectsListContainer:setProjects";
export const SET_PROJECTS_REQUEST = "projectsListContainer:setProjects_REQUEST";
export const SET_PROJECTS_SUCCESS = "projectsListContainer:setProjects_SUCCESS";
export const SET_PROJECTS_ERROR = "projectsListContainer:setProjects_ERROR";

export function setProjects() {
  return dispatch => {
    dispatch({
      type: SET_PROJECTS_REQUEST
    });

    fetch("https://flatxpo-api.herokuapp.com/api/v1/projects")
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: SET_PROJECTS_SUCCESS,
          payload: {
            projects: response,
            filtertype: ""
          }
        });
      })
      .catch(error => {
        dispatch({ type: SET_PROJECTS_ERROR, payload: { error } });
      });
  };
}
//---------------------FILTER PROJECTS-----------------------//

export const CLICK_BUSINESS = "CLICK_BUSINESS";
export const CLICK_EDUCATION = "CLICK_EDUCATION";
export const CLICK_PRODUCTITY = "CLICK_PRODUCTITY";
export const CLICK_GAMES = "CLICK_GAMES";
export const CLICK_ALL = "CLICK_ALL";

export const clickBusiness = () => ({
  type: CLICK_BUSINESS,
  payload: { filtertype: "Business" }
});
export const clickEducation = () => ({
  type: CLICK_EDUCATION,
  payload: { filtertype: "Education" }
});
export const clickProductivity = () => ({
  type: CLICK_PRODUCTITY,
  payload: { filtertype: "Productivity" }
});
export const clickGames = () => ({
  type: CLICK_GAMES,
  payload: { filtertype: "Games" }
});
export const clickAll = () => ({
  type: CLICK_ALL,
  payload: { filtertype: null }
});

//---------------------LOAD--------------------------//
export const LOAD_PROJECT = "LOAD_PROJECT";
export const LOAD_PROJECT_REQUEST = "LOAD_PROJECT_REQUEST";
export const LOAD_PROJECT_SUCCESS = "LOAD_PROJECT_SUCCESS";
export const LOAD_PROJECT_ERROR = "LOAD_PROJECT_ERROR";

export function loadProjectDetails(projectId) {
  // Interpreted by the thunk middleware:
  return dispatch => {
    dispatch({
      type: "LOAD_PROJECT_REQUEST"
    });

    // Dispatch vanilla actions asynchronously
    fetch(`https://flatxpo-api.herokuapp.com/api/v1/projects/${projectId}`)
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

//---------------------CREATE--------------------------//
export const CREATE_PROJECT = "CREATE_PROJECT";
export const CREATE_PROJECT_REQUEST = "CREATE_PROJECT_REQUEST";
export const CREATE_PROJECT_SUCCESS = "CREATE_PROJECT_SUCCESS";
export const CREATE_PROJECT_ERROR = "CREATE_PROJECT_ERROR";

export function createProject(formData) {
  return dispatch => {
    dispatch({
      type: CREATE_PROJECT_REQUEST,
      payload: { project: formData }
    });
    //console.log(formData);
    fetch("https://flatxpo-api.herokuapp.com/api/v1/projects", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.id_token
      },
      body: formData
    })
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: CREATE_PROJECT_SUCCESS,
          payload: {
            project: response
          }
        });
      })
      .catch(error => {
        dispatch({ type: CREATE_PROJECT_ERROR, payload: { error } });
      });
  };
}

// //---------------------UPDATE--------------------------//
// export const UPDATE_PROJECT = "UPDATE_PROJECT";
// export const UPDATE_PROJECT_REQUEST = "UPDATE_PROJECT_REQUEST";
// export const UPDATE_PROJECT_SUCCESS = "UPDATE_PROJECT_SUCCESS";
// export const UPDATE_PROJECT_ERROR = "UPDATE_PROJECT_ERROR";

// export function updateProjects(project_id, content) {
//   return dispatch => {
//     dispatch({
//       type: UPDATE_PROJECT_REQUEST,
//       payload: {project_id, content}
//     });

//     fetch("https://flatxpo-api.herokuapp.com/api/v1/comments", {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer" + localStorage.getItem("id_token")
//       },
//       body: JSON.stringify({project_id, content})
//     })
//       .then(response => response.json())
//       .then(response => {
//         dispatch({
//           type: UPDATE_PROJECT_SUCCESS,
//           payload: {
//             project: response
//           }
//         });
//       })
//       .catch(error => {
//         dispatch({ type: UPDATE_PROJECT_ERROR, payload: { error } });
//       });
//   };
// }

//---------------------ADD COMMENT--------------------------//
export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_ERROR = "ADD_COMMENT_ERROR";

export function addComment(project_id, content) {
  return dispatch => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      payload: { project_id, content }
    });

    fetch("https://flatxpo-api.herokuapp.com/api/v1/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.id_token
      },
      body: JSON.stringify({
        project_id,
        content
      })
    })
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: ADD_COMMENT_SUCCESS,
          payload: {
            response
          }
        });
      })
      .catch(error => {
        dispatch({ type: ADD_COMMENT_ERROR, payload: { error } });
      });
  };
}
