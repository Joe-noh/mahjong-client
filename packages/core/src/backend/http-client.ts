import { decamelize } from '@ridi/object-case-converter'

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export class HTTPClient {
  private authToken: string
  private baseUrl: string

  public constructor(opts: { authToken: string; baseUrl: string }) {
    this.authToken = opts.authToken
    this.baseUrl = opts.baseUrl.replace(/\/$/, '')
  }

  public request<T>(method: Method, path: string, params?: object): Promise<T> {
    const headers = new Headers()
    headers.set('Accept', 'application/json')
    headers.set('Content-Type', 'application/json')
    if (this.authToken) {
      headers.set('Authorization', `Bearer ${this.authToken}`)
    }

    let req: RequestInit = {
      method,
      mode: 'cors',
      redirect: 'follow',
      headers: headers
    }

    if (params) {
      req.body = JSON.stringify(decamelize(params, { recursive: true }))
    }

    return this.jsonResolver<T>(fetch(this.urlFor(path), req))
  }

  private jsonResolver<T>(promise: Promise<Response>): Promise<T> {
    let res: Response
    const resolver = async (resolve, reject): Promise<void> => {
      try {
        res = await promise

        if (res && res.ok) {
          try {
            const json: { data: T } = await res.json()
            resolve(json.data)
          } catch (error) {
            reject(error)
          }
        }
      } catch (error) {
        reject(error)
      }
    }

    return new Promise(resolver)
  }

  private urlFor(path: string): string {
    return this.baseUrl + path
  }
}
