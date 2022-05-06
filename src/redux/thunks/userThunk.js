import * as userAPI from '../../api/userAPI'
import * as userAction from '../actions/userAtion'

export const getUsers = () => async (dispatch) => {
  dispatch(userAction.fetch_request())

  try {
    const data = await userAPI.getUsers()
    dispatch(userAction.fetch_success(data))
  } catch (err) {
    dispatch(userAction.fetch_error(err))
  }
}

export const createUser = (newUser) => async (dispatch) => {
  dispatch(userAction.create_request())

  try {
    const data = await userAPI.createUser(newUser)
    dispatch(userAction.create_success(data))
  } catch (err) {
    dispatch(userAction.create_error(err))
  }
}


export const updateUser = (newUser) => async (dispatch) => {
  dispatch(userAction.update_request())

  try {
    await userAPI.updateUser(newUser)
    dispatch(userAction.update_success(newUser))
  } catch (err) {
    dispatch(userAction.update_error(err))
  }
}

export const deleteUser = (id) => async (dispatch) => {
  dispatch(userAction.delete_request())

  try {
    await userAPI.deleteUser(id)
    dispatch(userAction.delete_success(id))
  } catch (err) {
    dispatch(userAction.delete_error(err))
  }
}
