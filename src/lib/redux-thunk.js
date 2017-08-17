//enables us to make async action creators which will give us tha ability to make action creators that make ajax requests
export default store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
