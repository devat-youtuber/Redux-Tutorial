import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducers from './reducers/rootReducer'

const composeEnhancers = composeWithDevTools()
export const store = createStore(rootReducers, composeEnhancers)