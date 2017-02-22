export const ping = store => next => action => {
  console.log(action,store.getState());
  return next(action);
}