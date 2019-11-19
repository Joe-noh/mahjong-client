import React from 'react'
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom'

const ProtectedRoute = ({ children, ...rest }: RouteProps) => {
  const render = ({ location }: RouteComponentProps) => {
    const isLoggedIn = !!sessionStorage.getItem('token')

    if (isLoggedIn) {
      return children
    } else {
      return (<Redirect to={{ pathname: "/login", state: { from: location } }} />)
    }
  }

  return (<Route {...rest} render={render} />)
}

export default ProtectedRoute
