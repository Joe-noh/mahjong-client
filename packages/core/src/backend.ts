import HTTPClient from '@/backend/http-client'
import { Session, SessionJSON } from './entities/session'
import { User, UserJSON } from './entities/user'

export class Backend {
  private isDev: boolean
  private http: HTTPClient

  public constructor(opts: { authToken?: string; isDev: boolean }) {
    this.isDev = opts.isDev

    const baseUrl = opts.isDev ? 'http://localhost:4000' : 'https://tbd.com'
    this.http = new HTTPClient({ baseUrl: baseUrl, authToken: opts.authToken })
  }

  public signup(params: { name: string; password: string }): Promise<Session> {
    return this.http.request<SessionJSON>('POST', '/api/users', { user: params }).then((json: SessionJSON): Session => Session.fromJSON(json))
  }

  public getUser(id: number): Promise<User> {
    return this.http.request<UserJSON>('GET', `/api/users/${id}`).then((json: UserJSON): User => User.fromJSON(json))
  }
}
