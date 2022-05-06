const thunkMiddleware = ({dispatch, getState}) => next => action => {
  // Code here
  console.log(action)
  if(typeof action === 'function'){
    // action === getUSers
    return action(dispatch)
  }

  next(action)
}

export default thunkMiddleware;