import React from 'react'
import ReactDOM from 'react-dom'
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

ReactDOM.render(<App />, document.getElementById('root'))
