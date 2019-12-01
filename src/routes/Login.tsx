import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import session from 'lib/session'
import api from 'lib/backend-api'

export const Login: React.FC = () => {
  const history = useHistory()
  const location = useLocation()
  const { from } = location.state || { from: { pathname: '/new' } }

  const loginAs = (name: string) => {
    return async () => {
      const { token } = await api.post<Session>('/api/sessions', { name })
      session.setToken(token)

      history.replace(from)
    }
  }

  const buttons = [1, 2, 3, 4].map(i => {
    return (
      <button key={i} onClick={loginAs(`dummy${i}`)}>
        Login as User {i}
      </button>
    )
  })

  return (
    <div>
      <h1>Login</h1>
      {buttons}
    </div>
  )
}
