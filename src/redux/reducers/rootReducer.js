import { combineReducers } from 'redux'
import userReducer from './userReducer'

const rootReducers = combineReducers({
  userState: userReducer
})

export default rootReducers;