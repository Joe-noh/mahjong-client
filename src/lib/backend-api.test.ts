import api from './backend-api'
import session from './session'

type User = {
  name: string
}

beforeEach(() => {
  session.setToken('token')

  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      resolve(new Response(JSON.stringify({ name: 'alex' })))
    })
  })
})

afterEach(() => {
  global.fetch.mockClear()
})

describe('get', () => {
  it('can fetch json', async () => {
    const user: User = await api.get<User>('/users/1')

    expect(user.name).toEqual('alex')
    expect(global.fetch).toBeCalledWith('/users/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer token'
      }
    })
  })
})

describe('post', () => {
  it('can post json', async () => {
    await api.post<User>('/users', { name: 'jack' })

    expect(global.fetch).toBeCalledWith('/users', {
      method: 'POST',
      body: JSON.stringify({ name: 'jack' }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer token'
      }
    })
  })
})
