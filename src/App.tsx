import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { ProtectedRoute, Home, Login, Game } from './routes'
import './App.css'

const App: React.FC = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/game">Game</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <ProtectedRoute path='/game'>
          <Game />
        </ProtectedRoute>
      </Switch>
    </div>
  </Router>
)

export default App
