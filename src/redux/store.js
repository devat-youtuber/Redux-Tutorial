import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducers from './reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];
const middlewareEnhancers = applyMiddleware(...middlewares)

const composeEnhancers = composeWithDevTools(middlewareEnhancers)

export const store = createStore(rootReducers, composeEnhancers)

sagaMiddleware.run(rootSaga)