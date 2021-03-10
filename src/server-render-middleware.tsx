import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { configureStore } from '@store/index'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { StaticRouterContext } from 'react-router'
import { Request, Response } from 'express'
import App from './App'

function getHtml(reactHtml: string, reduxState = {}) {
  return `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        <link href="/main.css" rel="stylesheet">
        <title>Potatozation of Mars</title>
    </head>
    <body>
        <div id="root">${reactHtml}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
        </script>
        <script src="/main.js"></script>
    </body>
  </html>
  `
}

export default (req: Request, res: Response) => {
  const location = req.url
  const { store } = configureStore({}, location)
  const context: StaticRouterContext = {}
  const jsx = (
    <ReduxProvider store={store}>
      <StaticRouter context={context} location={location}>
        <App />
      </StaticRouter>
    </ReduxProvider>
  )
  const reactHtml = renderToString(jsx)
  const reduxState = store.getState()

  if (context.url) {
    res.redirect(context.url)
    return
  }

  res.status(context.statusCode || 200).send(getHtml(reactHtml, reduxState))
}
