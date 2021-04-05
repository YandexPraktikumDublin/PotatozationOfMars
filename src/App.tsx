import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import { background } from '@images'
import routes from '@routes'

import './styles/globals.css'

const App: React.FC = () => (
  <div
    className="relative bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${background})`
    }}
  >
    <div className="hidden absolute inset-0 bg-black opacity-50 dark:block" />

    <ErrorBoundary>
      <Switch>
        {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          routes.map(({ fetchData, ...routeProps }) => (
            <Route key={routeProps.path} {...routeProps} />
          ))
        }
      </Switch>
    </ErrorBoundary>
  </div>
)

export default App
