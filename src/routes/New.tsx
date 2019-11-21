import React from 'react'
import api from 'lib/backend-api'
import { Participation } from 'types'

export const New: React.FC = () => {
  const join = async () => {
    const participation: Participation = await api.post<Participation>(
      '/api/participations',
      {}
    )
    console.log(participation)
  }

  return (
    <div>
      <button onClick={join}>Join Game</button>
    </div>
  )
}
