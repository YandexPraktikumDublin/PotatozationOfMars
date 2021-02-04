import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './styles/globals.css'

const App: React.FC = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/"/>
        <Route path="/auth" />
        <Route path="/signup"/>
        <Route path="/game" />
        <Route path="/profile" />
        <Route path="/liderboard" />
        <Route path="/404" />
        <Route path="/500" />
        <Route path="/forum" />
      </Switch>
  </BrowserRouter>
)

export default App
