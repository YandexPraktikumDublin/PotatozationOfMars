import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PATHS } from '@config'
import {
  Auth,
  Error404,
  Forum,
  Game,
  Leaderboard,
  Profile,
  SignUp
} from '@pages'

import './styles/globals.css'

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={PATHS.BASE} />
      <Route path={PATHS.AUTH} component={Auth} />
      <Route path={PATHS.SIGNUP} component={SignUp} />
      <Route path={PATHS.FORUM} component={Forum} />
      <Route path={PATHS.GAME} component={Game} />
      <Route path={PATHS.LEADERBOARD} component={Leaderboard} />
      <Route path={PATHS.PROFILE} component={Profile} />
      <Route path="*" component={Error404} />
    </Switch>
  </BrowserRouter>
)

export default App
