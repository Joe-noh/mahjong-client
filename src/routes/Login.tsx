import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import session from 'lib/session'
import api from 'lib/backend-api'

export const Login: React.FC = () => {
  const history = useHistory()
  const location = useLocation()

  const login = async () => {
    const { from } = location.state || { from: { pathname: '/new' } }

    const { token } = await api.post<Session>('/api/guests', {})
    session.setToken(token)

    history.replace(from)
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login as Guest</button>
    </div>
  )
}
