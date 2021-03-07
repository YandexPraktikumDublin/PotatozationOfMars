import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory, createMemoryHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import logger from 'redux-logger'
import createRootReducer from '@store/rootReducer'
import rootSaga from '@store/rootSaga'
import { isServer } from '@utils/server'

function getComposeEnhancers() {
  if (process.env.NODE_ENV !== 'production' && !isServer) {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  }

  return compose
}

export function configureStore(initialState: {}, url = '/') {
  const history = isServer
    ? createMemoryHistory({ initialEntries: [url] })
    : createBrowserHistory()

  const sagaMiddleware = createSagaMiddleware()
  const composeEnhancers = getComposeEnhancers()
  const middlewares = [routerMiddleware(history), sagaMiddleware]

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares, logger))
  )

  if (!isServer) {
    sagaMiddleware.run(rootSaga)
  }

  return { store, history }
}
