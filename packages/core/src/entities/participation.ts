export interface ParticipationJSON {
  game_id: string
}

export class Participation {
  public gameId: string

  public static fromJSON(json: ParticipationJSON): Participation {
    const participation = new Participation()
    participation.gameId = json.game_id

    return participation
  }
}
