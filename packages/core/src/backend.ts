import { HTTPClient } from '@/backend/http-client'
import { WSClient } from '@/backend/ws-client'
import { Session, SessionJSON } from './entities/session'
import { User, UserJSON } from './entities/user'

export class Backend {
  private http: HTTPClient
  private ws: WSClient

  public constructor(baseUrl: string, opts: { authToken?: string } = {}) {
    this.http = new HTTPClient({ baseUrl, authToken: opts.authToken })
    this.ws = new WSClient({ baseUrl, authToken: opts.authToken })
  }

  public login(params: { idToken: string }): Promise<Session> {
    return this.http.request<SessionJSON>('POST', '/api/users', { user: params }).then((json: SessionJSON): Session => Session.fromJSON(json))
  }

  public getUser(id: number): Promise<User> {
    return this.http.request<UserJSON>('GET', `/api/users/${id}`).then((json: UserJSON): User => User.fromJSON(json))
  }

  public joinGame(gameId: string): void {
    this.ws.connect()
    this.ws.join(`game:${gameId}`)
  }

  public sendCommand(command: object): void {
    this.ws.push(command)
  }
}
