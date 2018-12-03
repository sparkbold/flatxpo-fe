function makeActionCreator(type, ...argNames) {
  return function(...args) {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

const ADD_PROJECT = "ADD_PROJECT";
const EDIT_PROJECT = "EDIT_TODO";
const REMOVE_PROJECT = "REMOVE_TODO";

export const addProject = makeActionCreator(ADD_PROJECT, "text");
export const editProject = makeActionCreator(EDIT_PROJECT, "id", "text");
export const removeProject = makeActionCreator(REMOVE_PROJECT, "id");
