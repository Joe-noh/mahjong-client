import { Backend } from '@mahjong-client/core'

export default () => {
  const authToken = localStorage.getItem('authToken')
  return new Backend(process.env.BACKEND_URL, { authToken })
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
