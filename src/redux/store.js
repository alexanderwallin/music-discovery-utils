/* global window */
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from 'src/redux/reducer.js'
import createPersistorEnhancer from 'src/redux/createPersistorEnhancer.js'

const logger = store => next => action => {
  if (window.reduxLogger === true) {
    console.log('Dispatching action:', action)
    const result = next(action)
    console.log('State after action:', store.getState())
    return result
  }

  return next(action)
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger), createPersistorEnhancer())
)

export default store
