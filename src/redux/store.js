import { configureStore } from "@reduxjs/toolkit";
import userSlice from './toolkits/userSlice'
import userQuery from "./rtk-query/userQuery";
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    // Regular slice.
    userState: userSlice,
    // Create more slices from the api.
    [userQuery.reducerPath]: userQuery.reducer
  },
  // Add configuration middleware to use functions of RTK Query such as caching, invalidation, polling, ...
  middleware: (gDM) => gDM().concat(userQuery.middleware) 
})

// A utility used to enable refetchOnFocus and refetchOnReconnect behaviors.
setupListeners(store.dispatch)



// import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'

// import rootReducers from './reducers/rootReducer'
// import thunkMiddleware from 'redux-thunk'

// const middlewares = [thunkMiddleware];
// const middlewareEnhancers = applyMiddleware(...middlewares)

// const composeEnhancers = composeWithDevTools(middlewareEnhancers)

// export const store = createStore(rootReducers, composeEnhancers)