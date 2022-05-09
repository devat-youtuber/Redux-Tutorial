import { call, put, takeEvery,  } from 'redux-saga/effects'
import * as userAPI from '../../api/userAPI'
import * as userAction from '../actions/userAtion'

function* getUsers(){
  try {
    const data = yield call(userAPI.getUsers)
    yield put(userAction.fetch_success(data))
  } catch (err) {
    yield put(userAction.fetch_error(err))
  }
}


function* createUser(action){
  try {
    const data = yield call(userAPI.createUser, action.payload)
    yield put(userAction.create_success(data))
  } catch (err) {
    yield put(userAction.create_error(err))
  }
}

function* updateUser(action){
  try {
    yield call(() => userAPI.updateUser(action.payload))
    yield put(userAction.update_success(action.payload))
  } catch (err) {
    yield put(userAction.update_error(err))
  }
}

function* deleteUser(action){
  try {
    yield call(userAPI.deleteUser, action.payload)
    yield put(userAction.delete_success(action.payload))
  } catch (err) {
    yield put(userAction.delete_error(err))
  }
}



function* userSaga(){
  yield takeEvery("users/fetch_request", getUsers)
  yield takeEvery("users/create_request", createUser)
  yield takeEvery("users/update_request", updateUser)
  yield takeEvery("users/delete_request", deleteUser)
}

export default userSaga;