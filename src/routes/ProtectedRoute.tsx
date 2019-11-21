import React from 'react'
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps
} from 'react-router-dom'
import session from 'lib/session'

export const ProtectedRoute = ({ children, ...rest }: RouteProps) => {
  const render = ({ location }: RouteComponentProps) => {
    if (session.isLoggedIn()) {
      return children
    } else {
      return <Redirect to={{ pathname: '/', state: { from: location } }} />
    }
  }

  return <Route {...rest} render={render} />
}
