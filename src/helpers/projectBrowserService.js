const PROJECT_DB_BASE_URL = "http://localhost:3000/api/v1/projects";

export const getAllProjectsRequest = async () => {
  const fullUrl = PROJECT_DB_BASE_URL;
  return fetch(fullUrl);
};

export const getProjectDetails = async ({ ProjectsId }) => {
  const fullUrl = `PROJECT_DB_BASE_URL+${ProjectsId}`;
  return fetch(fullUrl);
};

// const createProjectsDbUrl = (relativeUrl, queryParams) => {
//   let baseUrl = `${Projects_DB_BASE_URL}${relativeUrl}?api_key=${Projects_DB_API_KEY}&language=en-US`;
//   if (queryParams) {
//     Object.keys(queryParams).forEach(
//       paramName => (baseUrl += `&${paramName}=${queryParams[paramName]}`)
//     );
//   }
//   return baseUrl;
// };

// export const getTopProjects = async ({ page }) => {
//   const fullUrl = createProjectsDbUrl("/Projects/top_rated", {
//     page
//   });
//   return fetch(fullUrl);
// };

// export const searchProjects = async ({ page, query }) => {
//   const fullUrl = createProjectsDbUrl("/search/Projects", {
//     page,
//     query
//   });
//   return fetch(fullUrl);
// };
