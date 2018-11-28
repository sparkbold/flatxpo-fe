// Helper function to enables passing an object with
// the action.type as the key and the reducer function as the value
export const createReducer = (
  initialState = {},
  actionHandlerKeyFuncs = {}
) => {
  return (state = initialState, action) => {
    const actionHandler = actionHandlerKeyFuncs[action.type];
    return actionHandler ? actionHandler(state, action) : state;
  };
};
// Creates a basic action
const createAction = (type, actionProps) => {
  return {
    type,
    ...actionProps
  };
};

// e.g. createAsyncActionCreator('GET_TOP_PROJECTS', getTopProjects, {page: 1})
// asyncRequestFn without params is not ideal, but
// wanted to capture the requestParams as part of the start action for logging transparency
export const createAsyncActionCreator = (
  actionType,
  asyncRequestFn,
  requestParams
) => {
  return dispatch => {
    dispatch(createAction(`${actionType}_START`, { request: requestParams }));
    // NOTE: asyncRequestFn must accept single object parameter
    // in order to resolve param values
    return asyncRequestFn(requestParams).then(response => {
      response
        .json()
        .then(json =>
          dispatch(createAction(`${actionType}_SUCCESS`, { response: json }))
        )
        .catch(error =>
          dispatch(createAction(`${actionType}_ERROR`, { error }))
        );
    });
  };
};

// We're setting these based on the state of the request
const initialAsyncState = { isLoading: false, response: null, request: null };

// Generic way of handling state changes for an async request
// Can override {action_type}_START, {action_type}_SUCCESS, {action_type}_ERROR
export const createAsyncReducer = (
  actionType,
  actionHandlerKeyFuncs = {},
  initialState = initialAsyncState
) => {
  const startReducerFn = (state, action) => ({
    ...state,
    isLoading: true,
    request: action.request
  });

  const successReducerFn = (state, action) => ({
    ...state,
    isLoading: false,
    response: action.response
  });
  const errorReducerFn = (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  });

  return createReducer(initialState, {
    [`${actionType}_START`]: startReducerFn,
    [`${actionType}_SUCCESS`]: successReducerFn,
    [`${actionType}_ERROR`]: errorReducerFn,
    ...actionHandlerKeyFuncs
  });
};
