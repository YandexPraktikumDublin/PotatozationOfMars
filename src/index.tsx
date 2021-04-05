import 'react-hot-loader'
import { hot } from 'react-hot-loader/root'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import App from './App'
import { configureStore } from '@store/index'

const initialState = window.__INITIAL_STATE__

const { store, history } = configureStore(initialState)

declare global {
  interface Window {
    __INITIAL_STATE__: {}
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function
  }
}

const RootComponent = () => (
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </ReduxProvider>
)

const RootComponentWithHot = hot(RootComponent)

ReactDOM.hydrate(<RootComponentWithHot />, document.getElementById('root'))
