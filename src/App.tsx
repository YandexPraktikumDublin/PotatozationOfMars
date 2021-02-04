import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PATHS } from './config'
import Auth from './pages/Auth';
import Error404 from './pages/Error404';
import Error500 from './pages/Error500';
import Forum from './pages/Forum';
import Game from './pages/Game';
import Liderboard from './pages/Liderboard';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';

import './styles/globals.css'

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={PATHS.BASE}/>
      <Route path={PATHS.AUTH} component={Auth}/>
      <Route path={PATHS.ERROR404} component={Error404}/>
      <Route path={PATHS.ERROR500} component={Error500}/>
      <Route path={PATHS.FORUM} component={Forum}/>
      <Route path={PATHS.GAME} component={Game}/>
      <Route path={PATHS.LIDERBOARD} component={Liderboard}/>
      <Route path={PATHS.PROFILE} component={Profile}/>
      <Route path={PATHS.SIGNUP} component={SignUp}/>
    </Switch>
  </BrowserRouter>
)

export default App
