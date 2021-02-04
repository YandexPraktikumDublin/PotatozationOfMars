import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PATHS } from './config';

import './styles/globals.css'

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={ PATHS.BASE } />
      <Route path={ PATHS.AUTH } />
      <Route path={ PATHS.SIGNUP } />
      <Route path={ PATHS.GAME } />
      <Route path={ PATHS.PROFILE } />
      <Route path={ PATHS.LIDERBOARD } />
      <Route path={ PATHS.ERROR404 } />
      <Route path={ PATHS.ERROR500 } />
      <Route path={ PATHS.FORUM } />
    </Switch>
  </BrowserRouter>
)

export default App
