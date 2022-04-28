import { combineReducers } from 'redux'
import nameReducer from './nameReducer'
import ageReducer from './ageReducer'

const rootReducers = combineReducers({
  nameState: nameReducer,
  ageState: ageReducer
})

export default rootReducers;