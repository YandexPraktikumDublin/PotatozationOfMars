import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import { createMemoryHistory, createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import logger from 'redux-logger'
import createRootReducer from '@store/rootReducer'
import rootSaga from '@store/rootSaga'
import { IAppStore } from '@types'

function isServer() {
  return !(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  )
}

function getComposeEnhancers() {
  if (process.env.NODE_ENV !== 'production' && !isServer()) {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  }

  return compose
}

export function configureStore(initialState: {}, url = '/') {
  const history = isServer()
    ? createMemoryHistory({ initialEntries: [url] })
    : createBrowserHistory()

  const sagaMiddleware = createSagaMiddleware()
  const composeEnhancers = getComposeEnhancers()
  const middlewares = [routerMiddleware(history), sagaMiddleware]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  ) as IAppStore

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)

  if (!isServer()) {
    sagaMiddleware.run(rootSaga)
  }

  return { store, history }
}
