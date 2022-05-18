import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userQuery from "../rtk-query/userQuery";
import * as userAPI from '../../api/userAPI'

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (payload, thunkAPI) => {
    const data = await userAPI.getUsers()
    return data;
  }
)

export const createUser = createAsyncThunk(
  "users/createUser",
  async (newUser, thunkAPI) => {
    const state = thunkAPI.getState().userState;
    const data = await userAPI.createUser(newUser)
    return [data, ...state.data];
  }
)

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (newUser, thunkAPI) => {
    const state =  thunkAPI.getState().userState;
    await userAPI.updateUser(newUser)
    return state.data?.map(item => 
      item.id === newUser.id ? newUser : item
    );
  }
)

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState().userState;
    await userAPI.deleteUser(id)
    return state.data?.filter(item => item.id !== id)
  }
)

const initialState = {
  data: [],
  loading: false,
  error: undefined,
  token: 'myToken'
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(userQuery.endpoints.getUsers.matchPending,
        (state, action) => { state.loading = true }
      )
      .addMatcher(userQuery.endpoints.getUsers.matchFulfilled,
        (state, action) => { 
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addMatcher(userQuery.endpoints.getUsers.matchRejected,
        (state, action) => { 
          state.loading = false;
          state.error = action.error;
        }
      )
  }
})


export default userSlice.reducer;