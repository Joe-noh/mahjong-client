import React, { useEffect } from 'react'
import api from 'lib/backend-api'

const Home: React.FC = () => {
  useEffect(() => {
    api
      .post<any>('/game', { hey: 'you' })
      .then(r => {
        console.log(r)
      })
  }, [])

  return <h1>Home</h1>
}

export default Home
