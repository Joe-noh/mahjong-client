import session from 'lib/session'

type Method = 'GET' | 'POST'

export default {
  get<T>(path: string): Promise<T> {
    return this.request<T>('GET', path)
  },

  post<T>(path: string, body: object): Promise<T> {
    return this.request<T>('POST', path, { body: JSON.stringify(body) })
  },

  request<T>(method: Method, path: string, opts: object = {}): Promise<T> {
    const url = process.env.REACT_APP_API_URL + path
    const headers = this.headers()
    const promise = fetch(url, { method, headers, ...opts } as RequestInit)

    return this.typed<T>(promise)
  },

  headers(): object {
    let headers: object = { 'Content-Type': 'application/json' }
    if (session.isLoggedIn()) {
      headers = { ...headers, Authorization: 'Bearer ' + session.authToken() }
    }

    return headers
  },

  typed<T>(promise: Promise<Response>): Promise<T> {
    return new Promise((resolve, reject) => {
      promise
        .then(response => {
          if (response.ok) {
            response
              .json()
              .then(json => resolve(json.data))
              .catch(error => reject(error))
          } else {
            reject(response)
          }
        })
        .catch(error => reject(error))
    })
  }
}
