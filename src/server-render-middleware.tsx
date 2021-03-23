import React from 'react'
import { Helmet, HelmetData } from 'react-helmet'
import { Provider as ReduxProvider } from 'react-redux'
import { configureStore } from '@store/index'
import rootSaga from '@store/rootSaga'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import { StaticRouterContext } from 'react-router'
import { Request, Response } from 'express'
import routes from '@routes'
import App from './App'

function getHtml(reactHtml: string, reduxState = {}, helmet: HelmetData) {
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
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
    </head>
    <body>
        <div id="root">${reactHtml}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
        </script>
        <script src="https://localhost:8080/main.js"></script>
    </body>
  </html>
  `
}

export default (req: Request, res: Response) => {
  const location = req.url
  const { store } = configureStore({}, location)
  const context: StaticRouterContext = {}
  function renderApp() {
    const jsx = (
      <ReduxProvider store={store}>
        <StaticRouter context={context} location={location}>
          <App />
        </StaticRouter>
      </ReduxProvider>
    )
    const reactHtml = renderToString(jsx)
    const reduxState = store.getState()
    const helmet = Helmet.renderStatic()

    if (context.url) {
      res.redirect(context.url)
      return
    }

    res
      .status(context.statusCode || 200)
      .send(getHtml(reactHtml, reduxState, helmet))
  }

  store
    .runSaga(rootSaga)
    .toPromise()
    .then(() => renderApp())
    .catch((err) => {
      throw err
    })

  const dataRequirements: (Promise<void> | void)[] = []

  routes.some((route) => {
    const { fetchData: fetchMethod } = route
    // @ts-ignore
    // eslint-disable-next-line node/no-deprecated-api
    const match = matchPath<{ slug: string }>(location, route)

    if (match && fetchMethod) {
      dataRequirements.push(
        fetchMethod({
          dispatch: store.dispatch,
          match
        })
      )
    }

    return Boolean(match)
  })

  return Promise.all(dataRequirements)
    .then(() => store.close())
    .catch((err) => {
      throw err
    })
}
