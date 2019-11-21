const key = 'session-token'

export default {
  isLoggedIn(): boolean {
    return !!this.authToken()
  },

  authToken(): string | null {
    return sessionStorage.getItem(key)
  },

  setToken(token: string): void {
    sessionStorage.setItem(key, token)
  },

  deleteToken(): void {
    sessionStorage.removeItem(key)
  }
}
