import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './styles/globals.css'

const App: React.FC = () => (
  <main>
    <Switch>
      <Route exact path="/" />
      <Route path="/signup" />
      <Route path="/game" />
      <Route path="/profile" />
      <Route path="/liderboard" />
      <Route path="/400" />
      <Route path="/500" />
      <Route path="/forum" />
    </Switch>
  </main>
)

export default App
