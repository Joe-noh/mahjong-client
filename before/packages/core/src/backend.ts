import { HTTPClient } from '@/backend/http-client'
import { WSClient } from '@/backend/ws-client'
import { Session, SessionJSON } from './entities/session'
import { User, UserJSON } from './entities/user'
import { Participation, ParticipationJSON } from './entities/participation'

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

  public loginAsGuest(): Promise<Session> {
    return this.http.request<SessionJSON>('POST', '/api/guests').then((json: SessionJSON): Session => Session.fromJSON(json))
  }

  public getUser(id: number): Promise<User> {
    return this.http.request<UserJSON>('GET', `/api/users/${id}`).then((json: UserJSON): User => User.fromJSON(json))
  }

  public participateGame(): Promise<Participation> {
    return this.http.request<ParticipationJSON>('POST', '/api/participations').then((json: ParticipationJSON): Participation => Participation.fromJSON(json))
  }

  public joinGame(gameId: string): Promise<any> {
    this.ws.connect()

    return this.ws.join(`game:${gameId}`)
  }

  public leaveGame(): Promise<void> {
    return this.ws.leave()
  }

  public playerReady(): Promise<any> {
    return this.ws.push('ready', {})
  }

  public on(event: string, callback: (a: any) => void): void {
    return this.ws.on(event, callback)
  }
}
