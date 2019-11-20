import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import session from 'lib/session'

const Login: React.FC = () => {
  const history = useHistory()
  const location = useLocation()

  const login = () => {
    const { from } = location.state || { from: { pathname: '/' } }

    session.setToken('fake')
    history.replace(from)
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>login</button>
    </div>
  )
}

export default Login
