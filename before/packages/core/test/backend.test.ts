import { mocked } from 'ts-jest/utils'
import { Backend } from '@/backend'
import { HTTPClient } from '@/backend/http-client'

import { User, UserJSON } from '@/entities/user'
import { Session, SessionJSON } from '@/entities/session'

jest.mock('@/backend/http-client')

describe('Backend', (): void => {
  beforeEach((): void => {
    mocked(HTTPClient).mockClear()
  })

  describe('getUser', (): void => {
    it('returns User instance', async (): Promise<void> => {
      mocked(HTTPClient).mockImplementation((): any => ({
        request(method: string, path: string): Promise<UserJSON> {
          expect(method).toEqual('GET')
          expect(path).toEqual('/api/users/1')

          return new Promise<UserJSON>((resolve): void => {
            resolve({ id: 1, name: 'jack' })
          })
        }
      }))

      const backend = new Backend('http://localhost:4000')
      const user: User = await backend.getUser(1)

      expect(user.id).toEqual(1)
      expect(user.name).toEqual('jack')
    })
  })

  describe('login', (): void => {
    it('returns Session instance on success', async (): Promise<void> => {
      mocked(HTTPClient).mockImplementation((): any => ({
        request(method: string, path: string): Promise<SessionJSON> {
          expect(method).toEqual('POST')
          expect(path).toEqual('/api/users')

          return new Promise<SessionJSON>((resolve): void => {
            resolve({ token: 'json.web.token' })
          })
        }
      }))

      const backend = new Backend('http://localhost:4000')
      const session: Session = await backend.login({ idToken: 'firebase-id-token' })

      expect(session.token).toEqual('json.web.token')
    })
  })

  describe('loginAsGuest', (): void => {
    it('returns Session instance on success', async (): Promise<void> => {
      mocked(HTTPClient).mockImplementation((): any => ({
        request(method: string, path: string): Promise<SessionJSON> {
          expect(method).toEqual('POST')
          expect(path).toEqual('/api/guests')

          return new Promise<SessionJSON>((resolve): void => {
            resolve({ token: 'json.web.token' })
          })
        }
      }))

      const backend = new Backend('http://localhost:4000')
      const session: Session = await backend.loginAsGuest()

      expect(session.token).toEqual('json.web.token')
    })
  })
})