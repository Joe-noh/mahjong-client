import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ProtectedRoute, Login, New, Game } from './routes'

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <ProtectedRoute path="/new">
        <New />
      </ProtectedRoute>
      <ProtectedRoute path="/game">
        <Game />
      </ProtectedRoute>
    </Switch>
  </Router>
)

export default App
