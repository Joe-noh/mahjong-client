import React from 'react'
import { useHistory } from 'react-router-dom'
import api from 'lib/backend-api'

export const New: React.FC = a => {
  const history = useHistory()

  const join = async () => {
    const participation: Participation = await api.post<Participation>('/api/participations')

    history.push(`/game/${participation.gameId}`)
  }

  return (
    <div>
      <button onClick={join}>Join Game</button>
    </div>
  )
}
