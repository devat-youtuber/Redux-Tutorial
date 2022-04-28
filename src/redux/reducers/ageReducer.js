function ageReducer(state = { age: 30}, action){
  // console.log({state, action})
  if(action.type === 'update_age'){
    const newState = { age: action.age }
    return newState;
  }

  return state;
}

export default ageReducer;