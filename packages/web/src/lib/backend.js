import { Backend } from '@mahjong-client/core'

export default () => {
  const authToken = localStorage.getItem('authToken')
  return new Backend('http://localhost:4000', { authToken })
}

export function getAuthToken() {
  return localStorage.getItem('authToken')
}

export function persistAuthToken(token) {
  localStorage.setItem('authToken', token)
}

export function deleteAuthToken() {
  localStorage.removeItem('authToken')
}
