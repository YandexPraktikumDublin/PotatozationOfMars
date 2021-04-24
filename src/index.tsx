import 'react-hot-loader'
import { hot } from 'react-hot-loader/root'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { store, history } from '@store/store'
import App from './App'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.info(
          'ServiceWorker registration successful with scope: ',
          registration.scope
        )
      })
      .catch((error: string) => {
        console.error('ServiceWorker registration failed: ', error)
      })
  })
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
