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
import App from '../App'

const { NODE_ENV = 'production' } = process.env

const IS_DEV = NODE_ENV !== 'production'

function getHtml(reactHtml: string, reduxState = {}, helmet: HelmetData) {
  const cssUrl = IS_DEV ? 'https://127.0.0.1:8080/main.css' : '/main.css'
  const jsUrl = IS_DEV ? 'https://127.0.0.1:8080/main.js' : '/main.js'

  const startServerWorkerScript = `
    <!--<script>
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
            .catch((error) => {
              console.error('ServiceWorker registration failed: ', error)
            })
        })
       }
    </script>-->
  `

  return `
    <!doctype html>
    <html lang="en" class="dark">
    <!--suppress HtmlRequiredTitleElement -->
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        <link rel="apple-touch-icon" sizes="180x180" href="/webmanifest/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/webmanifest/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/webmanifest/favicon-16x16.png">
        <link rel="manifest" href="/webmanifest/site.webmanifest">
        <link rel="mask-icon" href="/webmanifest/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#ffffff">
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link href="${cssUrl}" rel="stylesheet">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
    </head>
    <body>
        <div id="root">${reactHtml}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
        </script>
        <script src="${jsUrl}"></script>
        ${!IS_DEV && startServerWorkerScript}
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
