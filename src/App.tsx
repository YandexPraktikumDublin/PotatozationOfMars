import React, { StrictMode } from 'react'
import { Switch, Route } from 'react-router-dom'
import { PATHS } from '@config'
import ErrorBoundary from './ErrorBoundary'
import {
  Start,
  Auth,
  Error404,
  Forum,
  ForumTopic,
  Game,
  Leaderboard,
  Profile,
  SignUp
} from '@pages'
import { background } from '@images'

import './styles/globals.css'

const App: React.FC = () => (
  <div
    className="relative bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${background})`
    }}
  >
    <div className="hidden absolute inset-0 bg-black opacity-50 dark:block" />

    <StrictMode>
      <ErrorBoundary>
        <Switch>
          <Route exact path={PATHS.BASE} component={Start} />
          <Route path={PATHS.AUTH} component={Auth} />
          <Route path={PATHS.SIGNUP} component={SignUp} />
          <Route path={PATHS.FORUM_TOPIC} component={ForumTopic} />
          <Route path={PATHS.FORUM} component={Forum} />
          <Route path={PATHS.GAME} component={Game} />
          <Route path={PATHS.LEADERBOARD} component={Leaderboard} />
          <Route path={PATHS.PROFILE} component={Profile} />
          <Route path="*" component={Error404} />
        </Switch>
      </ErrorBoundary>
    </StrictMode>
  </div>
)

export default App
