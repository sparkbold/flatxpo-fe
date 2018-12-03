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

export const addTodo = makeActionCreator(ADD_PROJECT, "text");
export const editTodo = makeActionCreator(EDIT_PROJECT, "id", "text");
export const removeTodo = makeActionCreator(REMOVE_PROJECT, "id");
