import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Home, Login } from './pages'
import './App.css'

const App: React.FC = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  </Router>
)

export default App
