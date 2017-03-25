import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import { opinion } from './reducers/process'

export default createStore(combineReducers({
  opinions
}), composeWithDevTools(applyMiddleware(createLogger(), thunk)))