export interface SessionJSON {
  token: string
}

export class Session {
  public token: string

  public static fromJSON(json: SessionJSON): Session {
    const session = new Session()
    session.token = json.token

    return session
  }
}
